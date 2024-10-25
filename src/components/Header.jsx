const Header = () => {
  return (
    <header className="py-5">
      <nav className="container flex items-center justify-end gap-x-10">
        <img className="mr-auto" src="/logo.svg" alt="Dream 11" />

        <ul className="flex items-center gap-x-5">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/fixture">Fixture</a>
          </li>
          <li>
            <a href="/teams">Teams</a>
          </li>
          <li>
            <a href="/schedules">Schedules</a>
          </li>
        </ul>

        <span className="border border-[#ddd] flex items-center gap-x-2 px-4 py-2 rounded-lg font-medium hover:shadow-md cursor-pointer duration-100">
          0 Coin <img src="/coin.svg" alt="Coin" />
        </span>
      </nav>
    </header>
  );
};

export default Header;
