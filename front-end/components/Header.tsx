import LogoDark from './../public/img/logo/logo-dark.svg';
import Button from './ui/Button';

const Header: React.FC = () => {
  return (
    <header>
      <img src={LogoDark} alt="logo" />
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About Us</a>
        </li>
        <li>
          <a href="/">Service</a>
        </li>
      </ul>
      <Button name="Contact US" />
    </header>
  );
};
