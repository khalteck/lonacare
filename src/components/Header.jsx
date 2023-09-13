import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";

const Header = () => {
  const { currentPage, setSearchOpen } = useAppContext();

  const [openMenu, setOpenMenu] = useState(false);
  const [scrollBackground, setScrollBackground] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollThreshold = 100;

      setScrollBackground(scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleClick() {
    setOpenMenu((prevState) => !prevState);
  }

  return (
    <header
      className={`w-full h-[60px] ${
        scrollBackground
          ? "bg-white text-black shadow-md md:h-[80px]"
          : !scrollBackground
          ? "bg-transparent text-white md:h-[100px]"
          : "bg-white text-black md:h-[80px]"
      } flex md:gap-20 lg:gap-[150px] justify-between px-3 lg:px-[350px] items-center transition-all duration-700 fixed top-0 left-0 z-[999]`}
    >
      <Link to="/">
        {scrollBackground ? (
          <h1 className="text-[1.5rem] font-merri md:text-[2rem] font-[900] text-[#86198f] uppercase">
            Lonacare
          </h1>
        ) : (
          <>
            {" "}
            <h1
              className={`text-[1.5rem] font-merri md:text-[2rem] font-[900] text-white md:hidden uppercase`}
            >
              Lonacare
            </h1>
            <div className="md:flex gap-2 items-center hidden">
              <img
                alt=""
                src="/images/logo.jpg"
                className="w-[100px] h-auto md:w-[120px] md:h-[100px] rounded-sm md:rounded-b-lg"
              />
            </div>
          </>
        )}
      </Link>
      <div
        onClick={handleClick}
        className="flex flex-col gap-2 w-10 md:hidden cursor-pointer"
      >
        <div
          className={`w-full h-1 ${
            scrollBackground
              ? "bg-[#86198f]"
              : !scrollBackground
              ? "bg-white"
              : "bg-[#86198f]"
          } rounded-lg`}
        ></div>
        <div
          className={`w-full h-1 ${
            scrollBackground
              ? "bg-[#86198f]"
              : !scrollBackground
              ? "bg-white"
              : "bg-[#86198f]"
          } rounded-lg`}
        ></div>{" "}
      </div>
      <ul className="gap-6 text-[.9remrem] items-center hidden md:flex">
        <li
          onClick={() => navigate("/")}
          className={`cursor-pointer hover:text-purple-400 transition-all duration-300 pb-1.5 lg:pb-3 border-b-4 ${
            currentPage === "/" ? "border-[#d946ef]" : "border-transparent"
          }`}
        >
          Home
        </li>
        <li
          onClick={() => navigate("/about")}
          className={`cursor-pointer hover:text-purple-400 transition-all duration-300 pb-1.5 lg:pb-3 border-b-4 ${
            currentPage === "/about" ? "border-[#d946ef]" : "border-transparent"
          }`}
        >
          About
        </li>
        <li
          onClick={() => navigate("/service")}
          className={`cursor-pointer hover:text-purple-400 transition-all duration-300 pb-1.5 whitespace-nowrap lg:pb-3 border-b-4 ${
            currentPage === "/service"
              ? "border-[#d946ef]"
              : "border-transparent"
          }`}
        >
          Book service
        </li>
        <li
          onClick={() => navigate("/contact")}
          className={`cursor-pointer hover:text-purple-400 transition-all duration-300 pb-1.5 lg:pb-3 border-b-4 ${
            currentPage === "/contact"
              ? "border-[#d946ef]"
              : "border-transparent"
          }`}
        >
          Contact
        </li>
        <li
          onClick={() => setSearchOpen(true)}
          className={`cursor-pointer hover:bg-[#d946ef] translate-y-[-5px] transition-all duration-300 pb-1.5 whitespace-nowrap md:py-1.5 md:px-2 rounded-sm border-b-4 flex items-center gap-1 bg-[#86198f] text-white ${
            currentPage === "/earch" ? "border-[#d946ef]" : "border-transparent"
          }`}
        >
          Search
          <img
            className="w-6 h-6  text-white"
            alt=""
            src={`${
              scrollBackground
                ? "/images/icons8-search-50.png"
                : "/images/icons8-search-50-white.png"
            }`}
          />
        </li>
      </ul>

      {/* mobile dropdown */}
      {openMenu && (
        <div className="w-full h-[100vh] z-[200] bg-black/80 fixed top-0 left-0 lg:hidden">
          <div
            onClick={() => {
              handleClick();
            }}
            className="w-fit h-fit p-2  bg-white rounded-full cursor-pointer mr-[25px] absolute top-4 right-0"
          >
            <img
              className="w-5 h-5  text-white"
              alt=""
              src="/images/icons8-close-50.png"
            />
          </div>
          <ul className="slide float-right w-full min-h-[150px] bg-[#4a044e] py-10 text-white gap-3 items-center md:hidden flex flex-col">
            <li
              onClick={() => {
                handleClick();
                navigate("/");
              }}
              className="py-2 uppercase"
            >
              Home
            </li>

            <li
              onClick={() => {
                handleClick();
                navigate("/about");
              }}
              className="py-2 uppercase"
            >
              About
            </li>

            <li
              onClick={() => {
                handleClick();
                navigate("/service");
              }}
              className="py-2 uppercase"
            >
              Book service
            </li>

            <li
              onClick={() => {
                handleClick();
                navigate("/contact");
              }}
              className="py-2 uppercase"
            >
              Contact
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
