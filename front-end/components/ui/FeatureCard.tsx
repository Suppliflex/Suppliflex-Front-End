interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  isHighlighted?: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, isHighlighted }) => {
  return (
    <div
      className={`px-14 pb-14 pt-16 rounded-lg shadow-lg hover:transform hover:scale-105 transition-all ${
        isHighlighted ? 'bg-pink' : 'bg-[#FAFAFA]'
      }`}
    >
      <img src={icon} alt={title} className="w-16 h-16 mb-7" />
      <h3
        className={`text-xl font-semibold  mb-2 ${isHighlighted ? 'text-softWhite' : 'text-[#1A1A1A]'}`}
      >
        {title}
      </h3>
      <p className={`text-sm ${isHighlighted ? 'text-softWhite' : 'text-[#787878]'}`}>
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
