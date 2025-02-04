import FAQAccordion from './ui/Accordion';

const FaqBelow: React.FC = () => {
  return (
    <div className="max-w-7xl m-auto">
      <section className=" h-[780] top-[2359]">
        <div className=" w-full max-w-[1212] gap-[107.02] top-[54.08] left-[113.26] justify-center">
          <div className="flex flex-col md:flex-row justify-center gap-16 md:gap-32">
            <div className="text-center items-center mt-[300] h-[135]">
              <h1 className="text-white text-8xl font-bold w-fit mb-[10]">FAQs</h1>
              <p className="text-[#787878]">Answering your most asked questions.</p>
            </div>
            <div className="w-full max-w-[600px] mt-[150]">
              <FAQAccordion />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FaqBelow;
