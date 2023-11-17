import Footer from "../components/Footer";
import Header from "../components/Header";
import ScrollToTop from "../ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import SearchCont from "../components/SearchCont";
import Loader from "../components/Loader";
import Carousel from "../components/Carousel";
import { useQueryDoc } from "../utils/useQueryDoc";
import { useStorageFiles } from "../utils/useStorageFiles";

export default function Homepage() {
  useEffect(() => {
    AOS.init();
  }, []);

  const navigate = useNavigate();
  const { searchOpen } = useAppContext();

  const { status, data } = useQueryDoc("homepage");

  const { files, loading } = useStorageFiles("images/");

  const ourMissionImg = files?.filter((x) => x?.includes("our_mission"))[0];
  const whatIsImg = files?.filter((x) => x?.includes("what_is"))[0];

  return (
    <>
      <Header />

      {searchOpen && <SearchCont />}
      {(status === "loading" || loading) && <Loader />}

      <main className="bg-white font-mont">
        <Carousel />

        <section className="w-full min-h-[300px] px-3 pb-[70px] pt-14 md:py-[100px] lg:px-[15%] bg-white overflow-hidden relative lg:top-[-50px] text-[1.1rem]">
          <div className="w-full flex gap-10 lg:flex-row flex-col">
            <div className="w-full">
              <h1
                data-aos="fade-up"
                data-aos-duration="1000"
                className="font-bold text-[2rem] text-[#912656] text-center md:text-start"
              >
                OUR MISSION
              </h1>
              <div className="mt-3 text-[1rem]">
                <div className="w-full h-fit md:hidden relative flex justify-center items-center mt-3 mb-8">
                  <img
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                    alt=""
                    src={ourMissionImg}
                    className="w-full h-[230px] object-cover object-top rounded-sm"
                  />
                </div>
                <p
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                  className=""
                >
                  {data?.our_mission?.mission_1}
                </p>

                <p
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                  className="mt-3"
                >
                  {data?.our_mission?.mission_2}
                </p>
              </div>
            </div>
            <div className="w-full h-fit hidden relative md:flex justify-center items-center">
              <img
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay="200"
                alt=""
                src={ourMissionImg}
                className="w-full h-[400px] object-cover rounded-sm"
              />
            </div>
          </div>
        </section>

        <section className="w-full h-[1500px] md:h-[700px] bg-hero2 bg-cover bg-center relative">
          <div className="w-full h-full px-3 py-5 md:py-[70px] lg:px-[15%] bg-slate-500/80 absolute top-0 left-0 text-white">
            <h2
              data-aos="fade-up"
              data-aos-duration="1000"
              className="text-[2rem] uppercase font-bold text-center mb-8"
            >
              Why Lona Care
            </h2>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
                className="w-full h-[200px] bg-white rounded-sm p-3 border border-[#d946ef]/10 flex flex-col gap-3 items-center justify-center transition-all duration-500 text-[#4a044e] hover:translate-y-[-10px]"
              >
                <div className="p-3 w-[50px] h-[50px] flex justify-center items-center bg-[#912656] rounded-full text-[2rem] font-bold text-white">
                  1
                </div>
                <p className="text-[1.15rem] text-center font-medium">
                  {data?.why_lona_care?.grid_1}
                </p>
              </div>

              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
                className="w-full h-[200px] bg-white rounded-sm p-3 border border-[#d946ef]/10 flex flex-col gap-3 items-center justify-center transition-all duration-500 text-[#4a044e] hover:translate-y-[-10px]"
              >
                <div className="p-3 w-[50px] h-[50px] flex justify-center items-center bg-[#912656] rounded-full text-[2rem] font-bold text-white">
                  2
                </div>
                <p className="text-[1.15rem] text-center font-medium">
                  {data?.why_lona_care?.grid_2}
                </p>
              </div>

              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
                className="w-full h-[200px] bg-white rounded-sm p-3 border border-[#d946ef]/10 flex flex-col gap-3 items-center justify-center transition-all duration-500 text-[#4a044e] hover:translate-y-[-10px]"
              >
                <div className="p-3 w-[50px] h-[50px] flex justify-center items-center bg-[#912656] rounded-full text-[2rem] font-bold text-white">
                  3
                </div>
                <p className="text-[1.15rem] text-center font-medium">
                  {data?.why_lona_care?.grid_3}
                </p>
              </div>

              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
                className="w-full h-[200px] bg-white rounded-sm p-3 border border-[#d946ef]/10 flex flex-col gap-3 items-center justify-center transition-all duration-500 text-[#4a044e] hover:translate-y-[-10px]"
              >
                <div className="p-3 w-[50px] h-[50px] flex justify-center items-center bg-[#912656] rounded-full text-[2rem] font-bold text-white">
                  4
                </div>
                <p className="text-[1.15rem] text-center font-medium">
                  {data?.why_lona_care?.grid_4}
                </p>
              </div>

              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
                className="w-full h-[200px] bg-white rounded-sm p-3 border border-[#d946ef]/10 flex flex-col gap-3 items-center justify-center transition-all duration-500 text-[#4a044e] hover:translate-y-[-10px]"
              >
                <div className="p-3 w-[50px] h-[50px] flex justify-center items-center bg-[#912656] rounded-full text-[2rem] font-bold text-white">
                  5
                </div>
                <p className="text-[1.15rem] text-center font-medium">
                  {data?.why_lona_care?.grid_5}
                </p>
              </div>

              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
                className="w-full h-[200px] bg-white rounded-sm p-3 border border-[#d946ef]/10 flex flex-col gap-3 items-center justify-center transition-all duration-500 text-[#4a044e] hover:translate-y-[-10px]"
              >
                <div className="p-3 w-[50px] h-[50px] flex justify-center items-center bg-[#912656] rounded-full text-[2rem] font-bold text-white">
                  6
                </div>
                <p className="text-[1.15rem] text-center font-medium">
                  {data?.why_lona_care?.grid_6}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full min-h-[600px] px-3 py-[100px] lg:px-[15%] relative bg-white">
          <div className="w-full flex flex-col gap-10 lg:flex-row-reverse">
            <div className="w-full">
              <h1
                data-aos="fade-up"
                data-aos-duration="1000"
                className="font-bold text-[2rem] text-[#912656] text-center md:text-start"
              >
                WHAT IS LONA CARE
              </h1>
              <div className="w-full h-fit md:hidden relative flex justify-center items-center mt-3 mb-8">
                <img
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                  alt=""
                  src={whatIsImg}
                  className="w-full h-auto rounded-sm"
                />
              </div>

              <div className="mt-3 text-[1rem] flex flex-col gap-3">
                <p
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                  className="mt-3"
                >
                  {data?.what_is?.what_is_content_1}
                </p>
                <p
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  {data?.what_is?.what_is_content_2}
                </p>
                <p
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                  className="mt-3"
                >
                  {data?.what_is?.what_is_content_3}
                </p>

                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                  className="mt-4 w-full flex gap-3 font-light"
                >
                  <button
                    onClick={() => navigate("/about")}
                    className="w-fit bg-[#912656] border border-[#912656] hover:bg-white text-[.95rem] hover:text-[#912656] px-5 md:px-8 py-2 md:py-3 rounded-sm text-white font-medium transition-all duration-300"
                  >
                    Read More
                  </button>
                  <button
                    onClick={() => navigate("/service")}
                    className="w-fit hover:bg-[#912656] border border-[#912656] bg-white text-[.95rem] text-[#912656] px-5 md:px-8 py-2 md:py-3 rounded-sm hover:text-white font-medium transition-all duration-300"
                  >
                    Book a Service
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full h-fit hidden relative md:flex justify-center items-center mt-3 mb-8">
              <img
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay="200"
                alt=""
                src={whatIsImg}
                className="w-full h-auto rounded-sm"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}
