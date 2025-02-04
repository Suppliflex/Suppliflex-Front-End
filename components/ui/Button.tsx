interface ButtonProps {
    name: string;
    size?: 'small' | 'medium' | 'large';
    colorScheme?: 'primary' | 'red' | 'blue' | 'white';
  }
  
  const Button: React.FC<ButtonProps> = ({ name, size = 'medium', colorScheme = 'primary' }) => {
    const sizeClasses = {
      small: 'w-24 h-9 text-sm',
      medium: 'w-28 h-10 text-base',
      large: 'w-28 h-12 text-lg',
    };
  
    const colorClasses = {
      primary: 'bg-secondary text-white hover:bg-[#96808f]', //hover is subject to change
      red: '', // Fill in later
      blue: '', // Fill in later
      white: '', // Fill in later
    };
  
    return (
      <button
        className={`font-semibold rounded ${sizeClasses[size]} ${colorClasses[colorScheme]} transition-colors`}
      >
        {name}
      </button>
    );
  };
  
  export default Button;
