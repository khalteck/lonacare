/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
import Footer from "../components/Footer";
import Header from "../components/Header";
import ScrollToTop from "../ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import houses from "../data/houses.json";
import { useParams } from "react-router-dom";
import ApplyForm from "../components/ApplyForm";
import { useStorageFiles } from "../utils/useStorageFiles";
import Loader from "../components/Loader";

export default function ServiceDetails() {
  useEffect(() => {
    AOS.init();
  }, []);

  const { files, loading } = useStorageFiles("images/");

  const serviceImages = files?.filter((x) => x?.includes("service_image"));

  const { title } = useParams();

  const currentService = houses?.filter((item) => item?.title === title)[0];

  const [index, setIndex] = useState(0);
  const [image, setImage] = useState(serviceImages[index]);

  useEffect(() => {
    setImage(serviceImages[index]);
  }, [index, serviceImages]);

  function next() {
    const lastIndex = serviceImages?.length - 1;
    if (image === serviceImages[lastIndex]) {
      setIndex(0);
    } else {
      setIndex((prev) => prev + 1);
    }
  }

  function prev() {
    const lastIndex = serviceImages?.length - 1;
    if (image === serviceImages[0]) {
      setIndex(lastIndex);
    } else {
      setIndex((prev) => prev - 1);
    }
  }

  return (
    <>
      <Header />

      {loading && <Loader />}

      <main className="bg-white font-mont md:pt-[100px]">
        <section className="w-full h-[400px] md:h-[400px] bg-service bg-cover bg-center relative z-0">
          <div className="w-full h-full absolute top-0 left-0 flex md:flex-row flex-col">
            <div className="w-full md:w-1/2 h-fit md:h-full bg-[#912656] px-3 pt-20 pb-[50px] md:py-[100px] lg:pl-[15%] lg:py-[150px] relative">
              <h1
                data-aos="zoom-out"
                data-aos-duration="1000"
                className="text-[2rem] md:text-[3rem] font-bold text-white leading-tight uppercase md:mt-[50px]"
              >
                {currentService.title}
              </h1>
              {/* <p className="text-white text-[1.2rem]">
                Location: {currentService?.location}
              </p> */}
              <button
                onClick={() => {
                  const element = document.getElementById("apply");
                  element.scrollIntoView({
                    behavior: "smooth",
                    block: "end",
                    inline: "nearest",
                  });
                }}
                className="w-fit bg-[#86198f] border border-[#86198f] mt-4 hover:bg-white hover:text-[#86198f] px-8 py-2 rounded-sm text-white font-medium transition-all duration-300"
              >
                Apply
              </button>
            </div>
            <div className="w-full md:w-1/2 h-[250px] md:h-full relative">
              <div className="absolute w-full h-full bg-gradient-to-bl from-[#912656]/40 to-[#912656]/10 "></div>
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
                  fill="#912656"
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
                  fill="#912656"
                  fillOpacity="1"
                  d="M0,192L26.7,160C53.3,128,107,64,160,58.7C213.3,53,267,107,320,149.3C373.3,192,427,224,480,234.7C533.3,245,587,235,640,202.7C693.3,171,747,117,800,117.3C853.3,117,907,171,960,208C1013.3,245,1067,267,1120,245.3C1173.3,224,1227,160,1280,128C1333.3,96,1387,96,1413,96L1440,96L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
                ></path>
              </svg>
            </div>
          </div>
        </section>

        <section className="w-full min-h-[200px] px-3 pt-10 lg:px-[15%] bg-[#fdf4ff] z-[99] overflow-hidden relative">
          <h2
            data-aos="fade-up"
            data-aos-duration="1000"
            className="text-[1.75rem] md:text-[2rem] font-bold my-4"
          >
            About
          </h2>
          {/* <p
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="w-full md:w-[70%]"
          >
            {currentService?.description}
          </p> */}
          <ul
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="flex flex-col gap-3 mt-4"
          >
            {currentService?.features?.map((itm, idx) => {
              return (
                <li key={idx} className="flex gap-2 items-center">
                  <div className="w-2 h-2 p-1 bg-[#86198f] rounded-full mt-1"></div>{" "}
                  {itm}
                </li>
              );
            })}
          </ul>
        </section>

        <section className="w-full min-h-[300px] px-3 py-12 lg:px-[15%] bg-[#fdf4ff] z-[99] overflow-hidden relative">
          <h2
            data-aos="fade-up"
            data-aos-duration="1000"
            className="text-[1.75rem] md:text-[2rem] font-bold my-4"
          >
            Accommodation
          </h2>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="flex gap-4 flex-col md:flex-row flex-wrap"
          >
            {/* <div className="min-h-[100px] w-full sm:w-[300px] text-[.85rem] bg-gray-200 p-3 rounded-sm border border-purple-200 flex items-start gap-2">
              <img
                alt=""
                src="/images/icons8-home-64.png"
                className="w-10 h-10"
              />
              <div>
                <p className="font-medium leading-tight text-[1.15rem]">
                  Location
                </p>
                <p>{currentService?.location}</p>
              </div>
            </div> */}

            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
              className="min-h-[100px] w-full sm:w-[300px] text-[.85rem] bg-gray-200 p-3 rounded-sm border border-purple-200 flex items-start gap-2"
            >
              <img
                alt=""
                src="/images/icons8-home-64.png"
                className="w-10 h-10"
              />
              <div>
                <p className="font-medium leading-tight text-[1.15rem]">
                  Accommodation Type
                </p>
                <p>
                  Seven unfurnished en-suite bedrooms in a shared house, spread
                  across four floors.
                </p>
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
              className="min-h-[100px] w-full sm:w-[300px] text-[.85rem] bg-gray-200 p-3 rounded-sm border border-purple-200 flex items-start gap-2"
            >
              <img
                alt=""
                src="/images/icons8-home-64.png"
                className="w-10 h-10"
              />
              <div>
                <p className="font-medium leading-tight text-[1.15rem]">
                  Rental Agreement
                </p>
                <p>
                  All bedrooms are let on an assured shorthold tenancy
                  agreement.
                </p>
              </div>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="mt-4"
          >
            <div className="relative w-full md:w-fit">
              <img
                alt=""
                src={image}
                className="w-full md:w-[550px] h-[300px] md:h-[400px] object-cover rounded-sm"
              />
              <div className="absolute top-[50%] translate-y-[-50%] left-0 w-full flex justify-between">
                <div
                  onClick={prev}
                  className="w-fit h-fit p-2  bg-white rounded-full cursor-pointer"
                >
                  <img
                    className="w-5 h-5  text-white"
                    alt=""
                    src="/images/icons8-previous-50.png"
                  />
                </div>
                <div
                  onClick={next}
                  className="w-fit h-fit p-2  bg-white rounded-full cursor-pointer"
                >
                  <img
                    className="w-5 h-5  text-white"
                    alt=""
                    src="/images/icons8-forward-50.png"
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-4 mt-4 flex-wrap">
              {serviceImages?.map((itm, idx) => {
                return (
                  <img
                    key={idx}
                    alt=""
                    src={itm}
                    onClick={() => setImage(itm)}
                    className={`w-[80px] h-[80px] object-cover border-4 cursor-pointer hover:opacity-50 rounded-sm ${
                      itm === image
                        ? "border-[#d946ef]"
                        : "border-[#86198f]/70 opacity-80"
                    }`}
                  />
                );
              })}
            </div>
          </div>
        </section>

        <section
          id="apply"
          className="w-full min-h-[300px] px-3 pt-10 pb-[100px] lg:px-[15%] bg-[#fdf4ff] z-[99] overflow-hidden relative"
        >
          <h2
            data-aos="fade-up"
            data-aos-duration="1000"
            className="text-[1.75rem] md:text-[2rem] font-bold my-4"
          >
            Apply Now
          </h2>
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="w-full md:w-[70%] font-medium"
          >
            How do I apply?
            <br />
            To apply, please complete the enquiry form below and ask for an
            application form.
          </p>

          <ApplyForm currentService={currentService} />
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}
