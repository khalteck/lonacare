import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import { useQueryDoc } from "../utils/useQueryDoc";

const Header = () => {
  const { currentPage } = useAppContext();

  const [openMenu, setOpenMenu] = useState(false);
  const [scrollBackground, setScrollBackground] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollThreshold = 500;

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

  const { data } = useQueryDoc("homepage");

  return (
    <header
      className={`w-full h-[60px] ${
        scrollBackground
          ? "bg-gray-100 text-black shadow-md md:h-[80px]"
          : "bg-transparent md:bg-white text-black md:h-[130px] lg:h-[160px]"
      } flex md:gap-20 lg:gap-[150px] justify-between px-3 lg:px-[15%] items-center transition-all duration-700 fixed top-0 left-0 z-[100] font-mont`}
    >
      <Link to="/">
        {scrollBackground ? (
          <>
            <div className="">
              <img
                alt=""
                src="/images/logo.png"
                className="w-[80px] md:w-[150px] md:h-auto h-[70px] mt-2 md:mt-0"
              />
            </div>
          </>
        ) : (
          <>
            {" "}
            <h1
              className={`text-[1.5rem] font-merri md:text-[2rem] font-[900] text-white first-section-text md:hidden uppercase`}
            >
              Lona Care
            </h1>
            <div className="md:flex gap-2 items-center hidden">
              <img
                alt=""
                src="/images/logo.png"
                className="w-[100px] h-auto md:w-[120px] lg:w-[250px] md:h-[100px] lg:h-[160px]"
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
              ? "bg-[#912656]"
              : !scrollBackground
              ? "bg-white"
              : "bg-[#912656]"
          } rounded-lg`}
        ></div>
        <div
          className={`w-full h-1 ${
            scrollBackground
              ? "bg-[#912656]"
              : !scrollBackground
              ? "bg-white"
              : "bg-[#912656]"
          } rounded-lg`}
        ></div>{" "}
      </div>
      <div className="w-full hidden md:flex flex-col">
        {!scrollBackground && (
          <div className="w-full h-[60px] flex gap-12 items-center border-b border-gray-400 sm:text-[.8rem] lg:text-[.9rem]">
            <div className="flex gap-3 items-center">
              <img
                alt=""
                src="/images/icons8-mail-50.png"
                className="w-6 h-6"
              />
              <p>
                <span className="font-bold text-[#912656]">Email Us</span>:{" "}
                <a
                  href={`mailto:${data?.contact_info?.email}`}
                  className="hover:underline font-medium"
                >
                  {data?.contact_info?.email}
                </a>
              </p>
            </div>
            <div className="flex gap-1 items-center">
              <img
                alt=""
                src="/images/icons8-phone-50.png"
                className="w-6 h-6"
              />
              <p className="">
                <span className="font-bold text-[#912656]">Call Us 24/7</span>:{" "}
                <a
                  href={`tel:${data?.contact_info?.phone1}`}
                  className="hover:underline font-medium"
                >
                  {data?.contact_info?.phone1} |{" "}
                </a>
                <a
                  href={`tel:${data?.contact_info?.phone2}`}
                  className="hover:underline font-medium"
                >
                  {data?.contact_info?.phone1}
                </a>
              </p>
            </div>
          </div>
        )}

        <ul className="w-full sm:h-[80px] lg:h-[100px] gap-6 text-[1.1rem] items-center md:flex uppercase font-medium">
          <li
            onClick={() => navigate("/")}
            className={`cursor-pointer hover:text-[#912656] transition-all duration-300 text-[.9rem] ${
              currentPage === "/" ? "text-[#912656] font-bold" : "text-black"
            }`}
          >
            Home
          </li>
          <li
            onClick={() => navigate("/about")}
            className={`cursor-pointer hover:text-[#912656] transition-all duration-300 text-[.9rem] ${
              currentPage === "/about"
                ? "text-[#912656] font-bold"
                : "text-black"
            }`}
          >
            About
          </li>
          <li
            onClick={() => navigate("/service")}
            className={`cursor-pointer hover:text-[#912656] transition-all duration-300 text-[.9rem] ${
              currentPage === "/service"
                ? "text-[#912656] font-bold"
                : "text-black"
            }`}
          >
            Book service
          </li>
          <li
            onClick={() => navigate("/contact")}
            className={`cursor-pointer hover:text-[#912656] transition-all duration-300 text-[.9rem] ${
              currentPage === "/contact"
                ? "text-[#912656] font-bold"
                : "text-black"
            }`}
          >
            Contact
          </li>

          {scrollBackground && (
            <li className="gap-4 items-center ml-auto flex">
              <a href="mailto:info@lonacare.com">
                {" "}
                <img
                  alt=""
                  src="/images/icons8-mail-50.png"
                  className="w-6 h-6"
                />
              </a>
              <a href="tel:02080904509">
                {" "}
                <img
                  alt=""
                  src="/images/icons8-phone-50.png"
                  className="w-6 h-6"
                />
              </a>{" "}
            </li>
          )}
        </ul>
      </div>

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
          <ul className="slide float-right w-full min-h-[150px] bg-[#912656] py-10 text-white gap-3 items-center md:hidden flex flex-col">
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
