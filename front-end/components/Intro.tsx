const Intro: React.FC = () => {
  return (
    <div className="max-w-7xl m-auto flex mt-28 justify-between items-center">
      <div className="flex flex-col gap-12 w-[50%]">
        <h1 className="text-6xl font-bold">Real-Time Supply Chain Management Software</h1>
        <p className="w-[70%]">
          Suppliflex provides an innovative platform with the overall goal to digitize and
          streamline your supply chain management operations. Our real-time shipment tracking,
          warehouse management, and automated billing solutions empower businesses to reduce costs
          and improve efficiency.
        </p>
      </div>
      <div className="">
        <img className="" src="./img/pictures/globe.svg" alt="globe" />
        {/* <img className="absolute top-0 w-5xl" src="./img/pictures/tire-marks.svg" alt="tire marks" /> */}
      </div>
    </div>
  );
};

export default Intro;
