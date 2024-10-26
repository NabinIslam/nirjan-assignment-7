import { toast } from "react-toastify";

const SelectedPlayers = ({
  selectedPlayers,
  setSelectedPlayers,
  setActiveTab,
}) => {
  return (
    <div className="space-y-5">
      {selectedPlayers.map(selectedPlayer => (
        <div
          className="border border-[#ddd] flex items-center justify-start gap-x-5 p-6 rounded-xl"
          key={selectedPlayer.playerId}
        >
          <img
            className="w-[200px] h-full rounded-lg"
            src={selectedPlayer.image}
            alt=""
          />
          <div>
            <h6 className="font-bold text-2xl mb-3">{selectedPlayer.name}</h6>
            <p className="font-medium">{selectedPlayer.role}</p>

            <h6 className="font-medium">{selectedPlayer.battingType}</h6>

            <h6 className="font-medium">{selectedPlayer.bowlingType}</h6>
          </div>
          <button
            className="ml-auto"
            onClick={() => {
              const updatedPlayers = selectedPlayers.filter(
                player => player.playerId !== selectedPlayer.playerId
              );
              setSelectedPlayers(updatedPlayers);
              toast("Player removed successfully");
            }}
          >
            <img src="/trash.svg" alt="" />
          </button>
        </div>
      ))}

      <button
        className="bg-[#e7fe29] rounded-lg px-4 py-2 font-medium"
        onClick={() => setActiveTab("Available")}
      >
        Add More Player
      </button>
    </div>
  );
};

export default SelectedPlayers;
