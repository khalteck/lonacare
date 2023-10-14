/* eslint-disable react/no-unescaped-entities */

import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="w-full bg-white pt-[50px] text-[.95rem] text-slate-500">
      <div className="w-full mb-[60px] px-4 sm:px-[30px] lg:px-[80px] flex flex-col md:flex-row gap-8 justify-center">
        <ul className="w-[fit-content] md:w-[280px]">
          <li className="mb-4">
            <img
              alt=""
              src="/images/logo.jpg"
              className="w-[120px] h-[100px]"
            />
          </li>
          <li className="text-[.8rem]">
            We make sure all our young people are registered with GP, dentist,
            Opticians, colleges, gym, help with oyster card.
            <br />
            <br />
            We have a 1 to 1 services and 2 to 1<br />
            <br />
            Our qualified staffs can deal with more special cases of the above.
          </li>
        </ul>

        <ul className="w-full md:w-[250px] flex-col gap-3 md:hidden flex">
          <li className="w-[fit-content] font-bold">Address</li>
          <li className="w-[fit-content]">
            Lona care
            <br />
            15 Maswell Park Road,
            <br /> Hounslow, Middlesex, TW32DL
          </li>
          <li className="w-1/2 md:w-[70%] grid grid-cols-2 gap-2">
            <img alt="" src="/images/right-1.jpg" className="w-full h-auto" />
            <img alt="" src="/images/police.webp" className="w-full h-auto" />
            {/* <img alt="" src="/images/right-3.png" className="w-full h-auto" />
            <img alt="" src="/images/right-4.png" className="w-full h-auto" /> */}
          </li>
        </ul>

        <ul className="w-full md:w-[200px] flex flex-col gap-3">
          <li className="w-[fit-content] font-bold">Browse</li>
          <li
            onClick={() => navigate("/")}
            className="w-[fit-content] cursor-pointer hover:text-purple-500"
          >
            Home
          </li>
          <li
            onClick={() => navigate("/about")}
            className="w-[fit-content] cursor-pointer hover:text-purple-500"
          >
            About
          </li>
          <li
            onClick={() => navigate("/contact")}
            className="w-[fit-content] cursor-pointer hover:text-purple-500"
          >
            Contact
          </li>
        </ul>

        <ul className="w-full md:w-[250px] flex flex-col gap-3">
          <li className="w-[fit-content] font-bold">Contact Information</li>
          <li className="w-[fit-content] cursor-pointer hover:text-purple-500">
            <a href="tel:02080904509">Tel: 02080904509</a>
          </li>
          <li className="w-[fit-content] cursor-pointer hover:text-purple-500">
            <a href="tel:07956537535">Mob: 07956537535</a>
          </li>
          <li className="w-[fit-content] cursor-pointer hover:text-purple-500">
            <a href="mailto:info@lonacare.com">Email: info@lonacare.com</a>
          </li>
          <li
            onClick={() => navigate("/")}
            className="w-[fit-content] cursor-pointer hover:text-purple-500"
          >
            lonacare.com
          </li>
        </ul>

        <ul className="w-full md:w-[250px] flex-col gap-3 hidden md:flex">
          <li className="w-[fit-content] font-bold">Address</li>
          <li className="w-[fit-content] cursor-pointer hover:text-purple-500">
            Lona care
            <br />
            15 Maswell Park Road,
            <br /> Hounslow, Middlesex, TW32DL
          </li>
          <li className="w-1/2 md:w-full grid grid-cols-2 gap-2">
            <img alt="" src="/images/right-1.jpg" className="w-full h-auto" />
            <img alt="" src="/images/police.webp" className="w-full h-auto" />
            {/* <img alt="" src="/images/right-3.png" className="w-full h-auto" />
            <img alt="" src="/images/right-4.png" className="w-full h-auto" /> */}
          </li>
        </ul>
      </div>
      <div className="w-full h-[80px] flex justify-center items-center border-t border-[#a359fb]/30">
        Copyright @2023 lonacare. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
