const DemoButton: React.FC = () => {
  return (
    <>
      <button className="flex items-center justify-center w-[296px] h-[77px] rounded-[86] bg-[#FCFCFC] text-black font-[600] left-[45.52px] gap-[10px]">
        Schedule a Demo
        <img
          className="w-[20px] h-[23px] left-[284px] rotate-[140]"
          src="/img/icons/Vector.svg"
          alt="vector arrow"
        />
      </button>
    </>
  );
};

export default DemoButton;
