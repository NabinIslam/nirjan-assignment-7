import { useEffect, useState } from "react";
import Tab from "./Tab";
import TabContent from "./TabContent";
import PlayerCard from "./PlayerCard";
import SelectedPlayers from "./SelectedPlayers";

const CustomTabs = ({ balance, setBalance }) => {
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [activeTab, setActiveTab] = useState("Available");
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("players.json")
      .then(res => res.json())
      .then(data => {
        setPlayers(data);
      });
  }, []);

  const tabs = [
    {
      label: "Available",
      content: (
        <div>
          <h3 className="font-bold text-2xl">Available Players</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
            <PlayerCard />
            <PlayerCard />
            <PlayerCard />
            <PlayerCard />
            <PlayerCard />
            <PlayerCard />
            <PlayerCard />
            <PlayerCard />
            <PlayerCard />
            <PlayerCard />
            <PlayerCard />
            <PlayerCard />
          </div>
        </div>
      ),
    },
    { label: "Selected", content: "This is the content of Tab 2" },
  ];

  return (
    <div className="container my-[100px]">
      {/* Tab Buttons */}
      <div className="flex justify-end items-center space-x-2">
        <Tab
          label="Available"
          isActive={activeTab === "Available"}
          onClick={() => setActiveTab("Available")}
        />
        <Tab
          label={`Selected (${selectedPlayers.length})`}
          isActive={activeTab === "Selected"}
          onClick={() => setActiveTab("Selected")}
        />
      </div>

      {/* Tab Content */}
      <div className="mt-4">
        <TabContent isActive={activeTab === "Available"}>
          <div>
            <h3 className="font-bold text-2xl mb-10">Available Players</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
              {players.map(player => (
                <PlayerCard
                  player={player}
                  selectedPlayers={selectedPlayers}
                  setSelectedPlayers={setSelectedPlayers}
                  key={player.playerId}
                  balance={balance}
                  setBalance={setBalance}
                />
              ))}
            </div>
          </div>
        </TabContent>

        <TabContent isActive={activeTab === "Selected"}>
          <SelectedPlayers
            selectedPlayers={selectedPlayers}
            setSelectedPlayers={setSelectedPlayers}
            setActiveTab={setActiveTab}
          />
        </TabContent>
      </div>
    </div>
  );
};

export default CustomTabs;
