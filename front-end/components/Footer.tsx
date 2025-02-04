import DemoButton from './ui/DemoButton';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <div className="m-auto bg-[#7F6C79] h-[528px]">
      <div className="w-full h-[275px]">
        <div className=" relative w-1334 h-[140px] ml-[51px] gap-[280px] opacity-[0px] pt-[30px]">
          <img
            src="/img/pictures/Rectangle 1.svg"
            alt="Tire-marks"
            className="absolute -left-20 top-0 h-[full] -z-[10px]"
          />
          <img
            src="/img/pictures/Rectangle2.svg"
            alt="Tire-marks"
            className=" absolute left-0 top-0 h-[full] -z-[10px]"
          />
          <img
            src="/img/pictures/Rectangle3.svg"
            alt="Tire-marks"
            className=" absolute left-[275px] top-0 h-[full] -z-[10px]"
          />
          <div className="flex">
            <p className=" font-Poppins w-[858px] h-[140px] text-[#FCFCFC] gap-[0px] opacity-[0px] text-[58.38px] font-semibold leading-[70px] tracking-[px]">
              Optimize your operations with Suppliflex
            </p>
            <DemoButton />
          </div>
          <div className="w-[880px] h-[55px] mt-[15px] top-[182px] left-[58px] gap-0 ">
            <p className="font-poppins text-[16px] font-normal text-[#FFFFFF] leading-[24px] tracking-[-0.003em] text-left [text-underline-position:from-font] [text-decoration-skip-ink:none]">
              Our affordable, scalable solution modernizes supply chain management for SMBs through
              automation, visibility, and predictive insights.
            </p>
          </div>
        </div>
      </div>
      <footer className=" w-full h-[251px] bg-[#7F6C79] border-t-[2.25px] border-white">
        <div className="flex w-[1326px] h-[73px] top-[89px] gap-[479px] left-[56px]">
          <div className="flex w-[706px] mt-[100px] ml-[51px] h-[73px] gap-[58px]">
            <ul className="font-Nunito Sans font-[100]">
              <li>About us</li>
              <li>Schedule</li>
              <li>Service</li>
            </ul>
            <ul className="font-Nunito Sans font-[100]">
              <li>Plan</li>
              <li>Pricing</li>
              <li>Route</li>
            </ul>
            <ul className="font-Nunito Sans font-[100]">
              <li>Security</li>
              <li>Privacy Policy</li>
              <li>Platform</li>
            </ul>
            <ul className="font-Nunito Sans font-[100]">
              <li>Suppliflex@Suppliflex.com</li>
              <li>+123-456-789</li>
              <li>Morocco</li>
            </ul>
            <div className="flex w-[141px] h-[24px] gap-[15px] ml-[550px] ">
              <Link href="" className="w-[23.95] h-23.95">
                <img src="/img/icons/InstagramIcon.svg" alt="Instagram Icon" />
              </Link>
              <Link href="" className="w-[23.95] h-23.95">
                <img src="/img/icons/Facebook.svg" alt="Facebook Icon" />
              </Link>
              <Link href="" className="w-[23.95] h-23.95">
                <img src="/img/icons/LinkedIn.svg" alt="LinkedIn Icon" />
              </Link>
              <Link href="" className="w-[23.95] h-23.95">
                <img src="/img/icons/Twitter.svg" alt="Twitter Icon" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
