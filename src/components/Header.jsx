import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";

const Header = () => {
  const { currentPage } = useAppContext();

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
          ? "bg-[#fdf4ff] text-black shadow-md md:h-[80px]"
          : !scrollBackground && currentPage === "/"
          ? "bg-transparent text-white md:h-[100px]"
          : "bg-[#fdf4ff] text-black md:h-[80px]"
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
              : !scrollBackground && currentPage === "/"
              ? "bg-white"
              : "bg-[#86198f]"
          } rounded-lg`}
        ></div>
        <div
          className={`w-full h-1 ${
            scrollBackground
              ? "bg-[#86198f]"
              : !scrollBackground && currentPage === "/"
              ? "bg-white"
              : "bg-[#86198f]"
          } rounded-lg`}
        ></div>{" "}
      </div>
      {/* <img
        onClick={handleClick}
        alt=""
        src="/images/icons8-menu-64.png"
        className="w-10 h-10 block md:hidden"
      /> */}
      <ul className="gap-10 text-[1.15rem] items-center hidden md:flex">
        <li
          onClick={() => navigate("/")}
          className="cursor-pointer hover:text-purple-400 transition-all duration-300"
        >
          Home
        </li>
        <li
          onClick={() => navigate("/about")}
          className="cursor-pointer hover:text-purple-400 transition-all duration-300"
        >
          About
        </li>
        <li
          onClick={() => navigate("/contact")}
          className="cursor-pointer hover:text-purple-400 transition-all duration-300"
        >
          Contact
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
              className="py-2 border-b border-white/50 uppercase"
            >
              Home
            </li>

            <li
              onClick={() => {
                handleClick();
                navigate("/about");
              }}
              className="py-2 border-b border-white/50 uppercase"
            >
              About
            </li>

            <li
              onClick={() => {
                handleClick();
                navigate("/contact");
              }}
              className="py-2 border-b border-white/50 uppercase"
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
