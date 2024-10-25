const PlayerCard = () => {
  return (
    <div className="border rounded-xl p-6 space-y-3 shadow-md">
      <img className="w-full h-[270px]" src="/player-img.svg" alt="Player" />
      <div className="flex items-center justify-start gap-x-2">
        <img className="" src="/user.svg" alt="User" />
        <h6 className="font-bold text-xl">Virat Kholi</h6>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-start gap-x-1">
          <img src="/flag.svg" alt="Flag" />
          <span className="font-medium">India</span>
        </div>
        <span className="bg-[#F3F3F3] font-medium px-4 py-2 rounded-lg border">
          All-Rounder
        </span>
      </div>
      <hr className="h-[2px]" />
      <div className="font-medium flex items-center justify-between">
        <h6>Batting Style</h6>
        <h6>Left-Hand-Bat</h6>
      </div>
      <div className="font-medium flex items-center justify-between">
        <h6>Bowling Style</h6>
        <h6>Right Arm Medium</h6>
      </div>
      <div className="font-medium flex items-center justify-between">
        <h6>Price: $1500000</h6>
        <button className="border px-4 py-2 rounded-lg hover:shadow-md duration-100">
          Choose Player
        </button>
      </div>
    </div>
  );
};

export default PlayerCard;
