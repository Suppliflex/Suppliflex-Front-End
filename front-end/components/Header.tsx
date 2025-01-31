import Button from './ui/Button';

const Header: React.FC = () => {
  return (
    <header className="max-w-7xl mx-auto flex justify-between pt-9 pb-9 pl-20 pr-20">
      <div className="flex gap-28">
        <a href="/">
          <img src="img/logo/logo.svg" alt="logo" />
        </a>
        <ul className="flex gap-8 items-center">
          <li>
            <a className=" font-semibold text-white hover:text-pink transition-colors" href="/">
              Home
            </a>
          </li>
          <li>
            <a
              className="font-semibold text-white hover:text-pink transition-colors whitespace-nowrap"
              href="/"
            >
              About Us
            </a>
          </li>
          <li>
            <a className="font-semibold text-white hover:text-pink transition-colors" href="/">
              Service
            </a>
          </li>
        </ul>
      </div>
      <Button name="Contact US" />
    </header>
  );
};

export default Header;
