import { toast } from "react-toastify";

const PlayerCard = ({
  player,
  selectedPlayers,
  setSelectedPlayers,
  balance,
  setBalance,
}) => {
  return (
    <div className="border rounded-xl p-6 space-y-3 shadow-md">
      <div className="h-[270px]">
        <img
          className="w-full h-full rounded-lg border"
          src={player.image}
          alt="Player"
        />
      </div>

      <div className="flex items-center justify-start gap-x-2">
        <img src="/user.svg" alt="User" />
        <h6 className="font-bold text-xl">{player.name}</h6>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-start gap-x-1">
          <img src="/flag.svg" alt="Flag" />
          <span className="font-medium">{player.country}</span>
        </div>
        <span className="bg-[#F3F3F3] font-medium px-4 py-2 rounded-lg border">
          {player.role}
        </span>
      </div>
      <hr className="h-[2px]" />
      <div className="font-medium flex items-center justify-between">
        <h6>Batting Style</h6>
        <h6>{player.battingType}</h6>
      </div>
      <div className="font-medium flex items-center justify-between">
        <h6>Bowling Style</h6>
        <h6>{player.bowlingType}</h6>
      </div>
      <div className="font-medium flex items-center justify-between">
        <h6>Price: ${player.biddingPrice}</h6>
        <button
          className="border px-4 py-2 rounded-lg hover:shadow-md duration-100 hover:bg-[#E7FE29]"
          onClick={() => {
            if (selectedPlayers.length === 6) {
              return toast("You can't select more than 6 players");
            }

            const alreadyExists = selectedPlayers.find(
              selectedPlayer => selectedPlayer.playerId === player.playerId
            );

            if (alreadyExists) {
              return toast("This player is already selected");
            }

            if (balance >= player.biddingPrice) {
              setSelectedPlayers([...selectedPlayers, player]);
              setBalance(balance - player.biddingPrice);
              toast("Player added to the selection");
            } else {
              toast("You don't have enough balance");
            }
          }}
        >
          Choose Player
        </button>
      </div>
    </div>
  );
};

export default PlayerCard;
