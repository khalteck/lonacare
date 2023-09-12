/* eslint-disable react/no-unescaped-entities */
import Footer from "../components/Footer";
import Header from "../components/Header";
import ScrollToTop from "../ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Service() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Header />
      <main className="bg-white text-[#4a044e]">
        <section className="w-full h-[300px] md:h-[400px] bg-service bg-cover bg-center relative z-0">
          <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-r from-purple-950 to-purple-950/10 px-3 py-[100px] lg:px-[350px] lg:py-[150px]">
            <div className="flex flex-col gap-3 mt-[50px] sm:mt-[100px] lg:mt-0">
              <h1 className="text-[2rem] md:text-[3rem] font-bold text-white leading-tight uppercase md:mt-[50px]">
                Find A Service
              </h1>
            </div>
          </div>
        </section>

        <section className="w-full min-h-[300px] px-3 pb-[70px] pt-10 md:pb-[80px] lg:px-[350px] bg-[#fdf4ff] z-[99] overflow-hidden relative">
          <h2 className="font-medium my-3">Showing 1 - 5 of 20</h2>
          <div className="w-full flex flex-col gap-4 md:gap-7 mt-10">
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
              className="w-full p-4 md:p-5 border-2 border-[#86198f]/30 rounded-sm flex gap-5 md:flex-row flex-col text-black"
            >
              <div className="w-full md:w-[40%]">
                <img
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                  alt=""
                  src="/images/service7.jpeg"
                  className="w-full h-[230px] md:h-[320px] object-cover rounded-sm"
                />
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-[#4a044e] font-bold text-[1.5rem]">
                  Albert Park Road
                </p>
                <p className="text-[#4a044e]">
                  Location: 123 Humpty road, alberta
                </p>
                <p className="flex gap-2 items-center">
                  <div className="w-2 h-2 p-1 bg-[#86198f] rounded-full mt-1"></div>{" "}
                  Young people
                </p>
                <p className="flex gap-2 items-center">
                  <div className="w-2 h-2 p-1 bg-[#86198f] rounded-full mt-1"></div>{" "}
                  Supported housing
                </p>
                <button
                  // onClick={() => navigate("/about")}
                  className="w-fit bg-[#86198f] border border-[#86198f] mt-4 hover:bg-white hover:text-[#86198f] px-8 py-2 rounded-sm text-white font-medium transition-all duration-300"
                >
                  View Details
                </button>
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
              className="w-full p-4 md:p-5 border-2 border-[#86198f]/30 rounded-sm flex gap-5 md:flex-row flex-col text-black"
            >
              <div className="w-full md:w-[40%]">
                <img
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                  alt=""
                  src="/images/service7.jpeg"
                  className="w-full h-[230px] md:h-[320px] object-cover rounded-sm"
                />
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-[#4a044e] font-bold text-[1.5rem]">
                  Albert Park Road
                </p>
                <p className="text-[#4a044e]">
                  Location: 123 Humpty road, alberta
                </p>
                <p className="flex gap-2 items-center">
                  <div className="w-2 h-2 p-1 bg-[#86198f] rounded-full mt-1"></div>{" "}
                  Young people
                </p>
                <p className="flex gap-2 items-center">
                  <div className="w-2 h-2 p-1 bg-[#86198f] rounded-full mt-1"></div>{" "}
                  Supported housing
                </p>
                <button
                  // onClick={() => navigate("/about")}
                  className="w-fit bg-[#86198f] border border-[#86198f] mt-4 hover:bg-white hover:text-[#86198f] px-8 py-2 rounded-sm text-white font-medium transition-all duration-300"
                >
                  View Details
                </button>
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
              className="w-full p-4 md:p-5 border-2 border-[#86198f]/30 rounded-sm flex gap-5 md:flex-row flex-col text-black"
            >
              <div className="w-full md:w-[40%]">
                <img
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                  alt=""
                  src="/images/service7.jpeg"
                  className="w-full h-[230px] md:h-[320px] object-cover rounded-sm"
                />
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-[#4a044e] font-bold text-[1.5rem]">
                  Albert Park Road
                </p>
                <p className="text-[#4a044e]">
                  Location: 123 Humpty road, alberta
                </p>
                <p className="flex gap-2 items-center">
                  <div className="w-2 h-2 p-1 bg-[#86198f] rounded-full mt-1"></div>{" "}
                  Young people
                </p>
                <p className="flex gap-2 items-center">
                  <div className="w-2 h-2 p-1 bg-[#86198f] rounded-full mt-1"></div>{" "}
                  Supported housing
                </p>
                <button
                  // onClick={() => navigate("/about")}
                  className="w-fit bg-[#86198f] border border-[#86198f] mt-4 hover:bg-white hover:text-[#86198f] px-8 py-2 rounded-sm text-white font-medium transition-all duration-300"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}
