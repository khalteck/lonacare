import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { useAppContext } from "../contexts/AppContext";
// import { useAppContext } from "../contexts/AppContext";

const Header = () => {
  //   const { currentPage } = useAppContext();

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
          : "bg-transparent text-white md:h-[100px]"
      } flex md:gap-20 lg:gap-[150px] justify-between px-3 lg:px-[350px] items-center transition-all duration-700 fixed top-0 left-0 z-10`}
    >
      <Link to="/">
        {scrollBackground ? (
          <h1 className="text-[.95rem] md:text-[2rem] font-bold text-[#86198f]">
            Lonacare
          </h1>
        ) : (
          <div className="flex gap-2 items-center">
            <img
              alt=""
              src="/images/logo.jpg"
              className="w-7 h-7 md:w-[120px] md:h-[100px] rounded-b-lg"
            />
          </div>
        )}
      </Link>
      <img
        onClick={handleClick}
        alt=""
        src="/images/icons8-menu-64.png"
        className="w-10 h-10 block md:hidden"
      />
      <ul className="gap-10 text-[1.15rem] items-center hidden md:flex">
        <li className="cursor-pointer hover:text-purple-400 transition-all duration-300">
          Home
        </li>
        <li className="cursor-pointer hover:text-purple-400 transition-all duration-300">
          About
        </li>
        <li className="cursor-pointer hover:text-purple-400 transition-all duration-300">
          Contact
        </li>
        {/* <li className="flex gap-2">
          <button
            //   onClick={() => navigate("/login")}
            className="px-5 py-2 bg-orange-500 uppercase text-[.85rem] text-white font-medium hover:bg-orange-500/70 rounded-md"
          >
            Log In
          </button>
          <button
            //   onClick={() => navigate("/register")}
            className={`px-5 py-2 bg-transparent border-2 uppercase text-[.85rem] font-medium hover:bg-orange-500/80 hover:text-white rounded-md ${
              scrollBackground
                ? "text-orange-500 border-orange-500"
                : "text-white border-white"
            }`}
          >
            Sign Up
          </button>
        </li> */}
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
          <ul className="slide float-right w-full min-h-[150px] bg-orange-500 py-10 text-white gap-3 items-center md:hidden flex flex-col">
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
                // navigate("/dashboard");
              }}
              className="py-2 border-b border-white/50 uppercase"
            >
              Dashboard
            </li>

            <>
              <li
                onClick={() => {
                  handleClick();
                  // navigate("/login");
                }}
                className="py-2 border-b border-white/50 uppercase"
              >
                Log In
              </li>
              <li
                onClick={() => {
                  handleClick();
                  // navigate("/register");
                }}
                className="py-2 uppercase"
              >
                Sign Up
              </li>
            </>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
