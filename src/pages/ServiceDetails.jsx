/* eslint-disable react/no-unescaped-entities */
import Footer from "../components/Footer";
import Header from "../components/Header";
import ScrollToTop from "../ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import houses from "../data/houses.json";
import { useParams } from "react-router-dom";

export default function ServiceDetails() {
  useEffect(() => {
    AOS.init();
  }, []);

  const { title } = useParams();

  const currentService = houses?.filter((item) => item?.title === title)[0];

  return (
    <>
      <Header />
      <main className="bg-white text-[#4a044e]">
        <section className="w-full h-[400px] md:h-[400px] bg-service bg-cover bg-center relative z-0">
          <div className="w-full h-full absolute top-0 left-0 flex md:flex-row flex-col">
            <div className="w-full md:w-1/2 h-fit md:h-full bg-purple-950 px-3 pt-20 pb-[50px] md:py-[100px] lg:pl-[350px] lg:py-[150px] relative">
              <h1 className="text-[2rem] md:text-[3rem] font-bold text-white leading-tight uppercase md:mt-[50px]">
                {currentService.title}
              </h1>
              <p className="text-white text-[1.2rem]">
                Location: {currentService?.location}
              </p>
            </div>
            <div className="w-full md:w-1/2 h-[250px] md:h-full relative">
              <div className="absolute w-full h-full bg-gradient-to-bl from-purple-950/40 to-purple-950/10 "></div>
              <img
                alt=""
                src={currentService?.image}
                className="w-full h-full object-cover"
              />
              <svg
                className="w-[401px] absolute top-[155px] left-[-156px] z-0 hidden md:block rotate-[90deg]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
              >
                <path
                  fill="#3b0764"
                  fillOpacity="1"
                  d="M0,192L26.7,160C53.3,128,107,64,160,58.7C213.3,53,267,107,320,149.3C373.3,192,427,224,480,234.7C533.3,245,587,235,640,202.7C693.3,171,747,117,800,117.3C853.3,117,907,171,960,208C1013.3,245,1067,267,1120,245.3C1173.3,224,1227,160,1280,128C1333.3,96,1387,96,1413,96L1440,96L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
                ></path>
              </svg>
              {/* mobile wave */}
              <svg
                className="w-full absolute bottom-[-1px] left-0 z-0 hidden"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
              >
                <path
                  fill="#3b0764"
                  fillOpacity="1"
                  d="M0,192L26.7,160C53.3,128,107,64,160,58.7C213.3,53,267,107,320,149.3C373.3,192,427,224,480,234.7C533.3,245,587,235,640,202.7C693.3,171,747,117,800,117.3C853.3,117,907,171,960,208C1013.3,245,1067,267,1120,245.3C1173.3,224,1227,160,1280,128C1333.3,96,1387,96,1413,96L1440,96L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
                ></path>
              </svg>
            </div>
          </div>
        </section>

        <section className="w-full min-h-[300px] px-3 pb-[70px] pt-10 md:pb-[80px] lg:px-[350px] bg-[#fdf4ff] z-[99] overflow-hidden relative">
          <h2 className="font-medium my-3 text-[1.5rem]">About</h2>
          <p>{currentService?.description}</p>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}
