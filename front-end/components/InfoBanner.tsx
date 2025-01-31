const InfoBanner: React.FC = () => {
  return (
    <div className="bg-pink h-24 mt-20 flex items-center">
      <div className="max-w-7xl m-auto w-full">
        <ul className="flex w-full justify-between pl-5 pr-5">
          <li className="flex items-center gap-6 text-3xl">
            {' '}
            <img src="./img/pictures/sparkle.svg" alt="sparkle" />
            LOGISTIC
          </li>
          <li className="flex items-center gap-6 text-3xl">
            {' '}
            <img src="./img/pictures/sparkle.svg" alt="sparkle" />
            TRACKING
          </li>
          <li className="flex items-center gap-6 text-3xl">
            {' '}
            <img src="./img/pictures/sparkle.svg" alt="sparkle" />
            DELIVERY
          </li>
          <li className="flex items-center gap-6 text-3xl">
            {' '}
            <img src="./img/pictures/sparkle.svg" alt="sparkle" />
            FINANCE
          </li>
          <li className="flex items-center gap-6 text-3xl">
            {' '}
            <img src="./img/pictures/sparkle.svg" alt="sparkle" />
            SHIPPING
          </li>
        </ul>
      </div>
    </div>
  );
};

export default InfoBanner;
