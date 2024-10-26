const Footer = () => {
  return (
    <footer className="bg-[#060919] py-[50px]">
      <div className="container">
        <div className="flex items-center justify-center mb-10">
          <img src="/logo.svg" alt="" />
        </div>
        <div className="grid grid-cols-3">
          <div>
            <h5 className="text-white font-medium text-xl mb-2">About us</h5>
            <p className="text-white text-opacity-50 text-sm">
              We are a passionate team dedicated to providing the best services
              to our customers.
            </p>
          </div>
          <div>
            <h5 className="text-white font-medium text-xl mb-2">Quick Links</h5>
            <ul className="text-white text-sm list-disc pl-5">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-medium text-xl mb-2">Subscribe</h5>
            <p className="text-white text-opacity-50 text-sm mb-1">
              Subscribe to our newsletter for the latest updates.
            </p>
            <div className="flex justify-start gap-x-2">
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
