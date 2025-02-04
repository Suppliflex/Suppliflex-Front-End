const InfoBanner: React.FC = () => {
  const items = ["LOGISTIC", "TRACKING", "DELIVERY", "FINANCE", "SHIPPING"];

  return (
    <div className="bg-pink h-24 mt-20 flex items-center">
      <div className="max-w-7xl m-auto w-full">
        <ul className="flex w-full justify-between px-5">
          {items.map((item) => (
            <li
              key={item}
              className="flex items-center gap-6"
              style={{
                fontSize: "clamp(0.5rem, -0.155rem + 2.33vw, 2rem)"
              }}
            >
              <img src="./img/pictures/sparkle.svg" alt="sparkle" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InfoBanner;
