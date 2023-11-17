/* eslint-disable react/no-unescaped-entities */
import Footer from "../components/Footer";
import Header from "../components/Header";
import ScrollToTop from "../ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useQueryDoc } from "../utils/useQueryDoc";
import { useStorageFiles } from "../utils/useStorageFiles";
import Loader from "../components/Loader";

export default function About() {
  useEffect(() => {
    AOS.init();
  }, []);

  const { status, data } = useQueryDoc("aboutpage");

  const { files, loading } = useStorageFiles("images/");

  const aboutImg = files?.filter((x) => x?.includes("about_image"))[0];

  return (
    <>
      {(status === "loading" || loading) && <Loader />}

      <Header />
      <main className="bg-white font-mont md:pt-[100px]">
        <section className="w-full h-[300px] md:h-[400px] bg-hero2 bg-cover bg-center relative z-0">
          <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-r from-[#912656] to-[#912656]/10 px-3 py-[100px] lg:px-[15%] lg:py-[150px]">
            <div className="flex flex-col gap-3 mt-[50px] sm:mt-[100px] lg:mt-0">
              <h1
                data-aos="zoom-out"
                data-aos-duration="1000"
                className="text-[2rem] md:text-[3rem] font-bold text-white leading-tight uppercase md:mt-[50px]"
              >
                About Lona Care
              </h1>
            </div>
          </div>
        </section>
        {/* <h1 className="text-[1.5rem] font-bold uppercase pt-10 text-center text-black bg-white font-merri">
          About Lona Care
        </h1> */}

        <section className="w-full min-h-[300px] px-3 pb-[70px] pt-14 md:py-[70px] lg:px-[15%] bg-white z-[99] overflow-hidden relative">
          <div className="w-full flex gap-10">
            <div className="w-full">
              <div className="mt-3 text-[1rem]">
                <div className="w-full h-fit md:hidden relative flex justify-center items-center mt-3 mb-8">
                  <img
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                    alt=""
                    src={aboutImg}
                    className="w-full h-auto rounded-sm"
                  />
                </div>
                <p
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                  className="mt-3"
                >
                  {data?.about_content?.about_content_1}
                </p>

                <p
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                  className="mt-3"
                >
                  {data?.about_content?.about_content_2}
                </p>
                <p
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                  className="mt-3"
                >
                  {data?.about_content?.about_content_3}
                </p>
              </div>
            </div>
            <div className="w-full h-fit hidden relative md:flex justify-center items-center mt-3 mb-8">
              <img
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay="200"
                alt=""
                src={aboutImg}
                className="w-full h-auto rounded-sm"
              />
            </div>
          </div>
        </section>

        <section className="w-full min-h-[300px] px-3 pb-[70px] md:py-[70px] lg:px-[15%] bg-white z-[99] overflow-hidden relative">
          <div className="w-full flex gap-10">
            <div className="w-full">
              <h1
                data-aos="fade-up"
                data-aos-duration="1000"
                className="font-medium text-[1.5rem]"
              >
                Previous Experience and Education
              </h1>
              <div className="mt-3 text-[1rem]">
                <p
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                  className="mt-3"
                >
                  {data?.about_content?.about_exp}
                </p>

                <p
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                  className="font-medium text-[1.5rem] mt-4"
                >
                  We have a team of:
                </p>
                <ul
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                  className="mt-3 flex flex-col gap-2"
                >
                  <li>- {data?.about_content?.team_of_1}</li>
                  <li>- {data?.about_content?.team_of_2}</li>
                  <li>- {data?.about_content?.team_of_3}</li>
                  <li>- {data?.about_content?.team_of_4}</li>
                  <li>- {data?.about_content?.team_of_5}</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="w-full mt-10">
            <div className="w-full mt-4 flex md:flex-row flex-col gap-3 text-black ">
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
                className="w-full bg-white/80 border border-[#912656]/30 shadow-sm rounded-lg p-3 flex flex-col gap-2 transition-all duration-300 text-black hover:translate-y-[-10px]"
              >
                <p className="font-bold text-[1rem]">
                  {data?.about_content?.box_title_1}
                </p>
                <p>{data?.about_content?.box_content_1}</p>
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
                className="w-full bg-white/80 border border-[#912656]/30 shadow-sm rounded-lg p-3 flex flex-col gap-2 transition-all duration-300 text-black hover:translate-y-[-10px]"
              >
                <p className="font-bold text-[1rem]">
                  {data?.about_content?.box_title_2}
                </p>
                <p>{data?.about_content?.box_content_2}</p>
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
                className="w-full bg-white/80 border border-[#912656]/30 shadow-sm rounded-lg p-3 flex flex-col gap-2 transition-all duration-300 text-black hover:translate-y-[-10px]"
              >
                <p className="font-bold text-[1rem]">
                  {data?.about_content?.box_title_3}
                </p>

                <p>{data?.about_content?.box_content_3}</p>
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
                className="w-full bg-white/80 border border-[#912656]/30 shadow-sm rounded-lg p-3 flex flex-col gap-2 transition-all duration-300 text-black hover:translate-y-[-10px]"
              >
                <p className="font-bold text-[1rem]">
                  {data?.about_content?.box_title_4}
                </p>

                <p>{data?.about_content?.box_content_4}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full relative">
          <div className="w-full h-fit bg-gray-300 px-3 py-[70px] lg:px-[15%]">
            <h2 className="text-[2rem] font-bold text-center mb-8 uppercase">
              Lona Care Positive Outcomes
            </h2>
            <ul className="w-full md:w-[700px] flex flex-col mx-auto text-[1.15rem]">
              <li className="py-3 border-b border-slate-100/50 flex gap-0 items-start leading-tight">
                <div className="w-2 h-2 md:w-4 md:h-4 mr-3 p-1 md:p-2 bg-black rounded-full mt-1"></div>

                <div>{data?.outcomes?.outcome_1}</div>
              </li>
              <li className="py-3 border-b border-slate-100/50 flex gap-0 items-start leading-tight">
                <div className="w-2 h-2 md:w-4 md:h-4 mr-3 p-1 md:p-2 bg-black rounded-full mt-1"></div>

                <div>{data?.outcomes?.outcome_2}</div>
              </li>
              <li className="py-3 border-b border-slate-100/50 flex gap-0 items-start leading-tight">
                <div className="w-2 h-2 md:w-4 md:h-4 mr-3 p-1 md:p-2 bg-black rounded-full mt-1"></div>

                <div>{data?.outcomes?.outcome_3}</div>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}
