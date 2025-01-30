import Button from './ui/Button';

const Header: React.FC = () => {
  return (
    <header className='flex justify-between'>
      <img src="img/logo/logo.svg" alt="logo" />
      <ul className='flex gap-6'>
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

export default Header;
