import { toast } from "react-toastify";

const Hero = ({ balance, setBalance }) => {
  return (
    <section>
      <div className="container">
        <div className=" bg-hero-bg bg-center bg-cover bg-no-repeat flex items-center justify-center flex-col gap-5 p-10 rounded-3xl">
          <img src="/hero-img.svg" alt="Dream 11" />

          <h1 className="text-white text-4xl font-bold">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h1>

          <h6 className="text-white text-lg text-opacity-80">
            Beyond Boundaries Beyond Limits
          </h6>

          <button
            className="bg-[#E7FE29] font-medium px-4 py-3 rounded-xl"
            onClick={() => {
              setBalance(balance + 15000000);
              toast(`credit added to the balance`);
            }}
          >
            Claim Free Credit
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
