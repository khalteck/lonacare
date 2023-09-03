/* eslint-disable react/no-unescaped-entities */

const Footer = () => {
  return (
    <footer className="w-full bg-[#f8fafc] pt-[50px] text-[.95rem] text-slate-500">
      <div className="w-full mb-[60px] px-4 sm:px-[30px] lg:px-[80px] flex flex-col md:flex-row gap-8 justify-center">
        <ul className="w-[fit-content] md:w-[250px]">
          <li className="mb-4">
            <img
              alt=""
              src="/images/logo.jpg"
              className="w-[150px] h-[120px]"
            />
          </li>
          <li className="">
            Everyday support for elderly We pursue close relationships with
            residential homes and care facilities to provide temporary and full
            time care workers.
          </li>
        </ul>

        <ul className="w-full md:w-[250px] flex-col gap-3 md:hidden flex">
          <li className="w-[fit-content] font-bold">Address</li>
          <li className="w-[fit-content] cursor-pointer hover:text-purple-500">
            Lona care
            <br />
            15 Maswell Park Road,
            <br /> Hounslow, Middlesex, TW32DL
          </li>
          <li className="w-1/2 md:w-[70%] grid grid-cols-2 gap-2">
            <img alt="" src="/images/right-1.jpg" className="w-full h-auto" />
            <img alt="" src="/images/right-2.png" className="w-full h-auto" />
            <img alt="" src="/images/right-3.png" className="w-full h-auto" />
            <img alt="" src="/images/right-4.png" className="w-full h-auto" />
          </li>
        </ul>

        <ul className="w-full md:w-[200px] flex flex-col gap-3">
          <li className="w-[fit-content] font-bold">Browse</li>
          <li className="w-[fit-content] cursor-pointer hover:text-purple-500">
            Home
          </li>
          <li className="w-[fit-content] cursor-pointer hover:text-purple-500">
            About
          </li>
          <li className="w-[fit-content] cursor-pointer hover:text-purple-500">
            Contact
          </li>
        </ul>

        <ul className="w-full md:w-[250px] flex flex-col gap-3">
          <li className="w-[fit-content] font-bold">Contact Information</li>
          <li className="w-[fit-content] cursor-pointer hover:text-purple-500">
            Tel: 02080904509
          </li>
          <li className="w-[fit-content] cursor-pointer hover:text-purple-500">
            Mob: 07956537535
          </li>
          <li className="w-[fit-content] cursor-pointer hover:text-purple-500">
            Email: info@lonacare.com
          </li>
          <li className="w-[fit-content] cursor-pointer hover:text-purple-500">
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
          <li className="w-1/2 md:w-[70%] grid grid-cols-2 gap-2">
            <img alt="" src="/images/right-1.jpg" className="w-full h-auto" />
            <img alt="" src="/images/right-2.png" className="w-full h-auto" />
            <img alt="" src="/images/right-3.png" className="w-full h-auto" />
            <img alt="" src="/images/right-4.png" className="w-full h-auto" />
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
