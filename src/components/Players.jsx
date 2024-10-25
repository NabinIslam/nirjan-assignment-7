import PlayerCard from "./PlayerCard";

const Players = () => {
  return (
    <section className="py-[100px]">
      <div className="container">
        <div role="tablist" className="tabs tabs-lifted">
          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Available"
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6 space-y-6"
          >
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

          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Selected(0)"
            defaultChecked
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6"
          >
            Tab content 2
          </div>
        </div>
      </div>
    </section>
  );
};

export default Players;
