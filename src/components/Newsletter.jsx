const Newsletter = () => {
  return (
    <section className="py-[50px]">
      <div className="container bg-newsletter-bg bg-center bg-cover bg-no-repeat flex flex-col items-center justify-center gap-5 rounded-3xl py-16">
        <h2 className="text-3xl font-bold">Subscribe to our Newsletter</h2>
        <p className="font-medium">
          Get the latest updates and news right in your inbox!
        </p>
        <div className="flex  justify-center gap-x-2">
          <input
            className="border border-[#ddd] px-3 py-2 bg-white rounded-lg"
            type="email"
            placeholder="Enter your email"
          />
          <button className="bg-[#D578B2] px-4 rounded-lg text-white hover:border-white">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
