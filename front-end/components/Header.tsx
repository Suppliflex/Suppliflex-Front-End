import Button from './ui/Button';

const Header: React.FC = () => {
  return (
    <header className="bg-primary flex justify-between pt-9 pb-9 pl-20 pr-20">
      <div className="flex gap-28">
        <img src="img/logo/logo.svg" alt="logo" />
        <ul className="flex gap-8 items-center">
          <li>
            <a
              className=" font-semibold text-tertiary hover:text-secondary transition-colors"
              href="/"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="font-semibold text-tertiary hover:text-secondary transition-colors whitespace-nowrap"
              href="/"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              className="font-semibold text-tertiary hover:text-secondary transition-colors"
              href="/"
            >
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
