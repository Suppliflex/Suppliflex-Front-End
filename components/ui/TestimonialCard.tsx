interface TestimonialCardProps {
  quote: React.ReactNode;
  author: string;
  role: string;
  image: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, role, image }) => {
  return (
    <div className="bg-white p-6 text-center max-w-sm mx-auto rounded-lg shadow-lg hover:transform hover:scale-105 transition-all">
      {/* Profile Image */}
      <div className="flex justify-center">
        <img
          src={image}
          alt={author}
          className="w-40 h-40 rounded-full object-cover shadow-2xl -mt-16"
        />
      </div>

      {/* Content */}
      <div className="mt-6">
        <p className="text-black italic text-base">{quote}</p>
        <h3 className="mt-6 text-xl font-bold text-black">{author}</h3>
        <p className="text-black text-sm">{role}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
