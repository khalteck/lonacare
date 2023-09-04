/* eslint-disable react/no-unescaped-entities */
import Footer from "../components/Footer";
import Header from "../components/Header";
import ScrollToTop from "../ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Header />
      <main className="bg-white text-[#4a044e] mt-[60px] md:mt-[80px]">
        <h1 className="text-[1.5rem] font-bold uppercase pt-10 text-center text-[#4a044e] bg-[#fdf4ff] font-merri">
          About Lonacare
        </h1>

        <section className="w-full min-h-[300px] px-3 pb-[70px] md:py-[70px] lg:px-[350px] bg-[#fdf4ff] z-[99] overflow-hidden relative">
          <div className="w-full flex gap-10">
            <div className="w-full">
              <div className="mt-3 text-[1.25rem]">
                <div className="w-full md:hidden my-8 flex justify-center items-center overflow-hidden">
                  <img
                    alt=""
                    src="/images/about.png"
                    className="w-full h-auto absolute rotate rounded-full"
                  />
                  <img
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                    alt=""
                    src="/images/mission.png"
                    className="w-[90%] h-auto rounded-xl"
                  />
                </div>
                <p
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                  className="mt-3"
                >
                  As we are a team of experienced managers who have been in the
                  social care settings for over 10 years. We identified
                  throughmarket research and personal contacts that there was a
                  shortage of providers offering suitable placements to place
                  young people
                </p>

                <p
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                  className="mt-3"
                >
                  Lona care wanted to play an influential part in providing such
                  provision services to the social care settings, thaty are
                  facing severe shortages.
                </p>
                <p
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                  className="mt-3"
                >
                  We are aware of the increasing demands of young people needing
                  placements and we believe our involvement and contribution to
                  provide a much-needed service will make a huhe positive
                  difference to the social care teams.
                </p>
              </div>
            </div>
            <div className="w-full hidden relative md:flex justify-center items-center">
              <img
                alt=""
                src="/images/about.png"
                className="w-full h-auto rounded-xl absolute rotate"
              />
              <img
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay="200"
                alt=""
                src="/images/mission.png"
                className="w-[80%] h-auto rounded-xl"
              />
            </div>
          </div>

          <img
            alt=""
            src="/images/shape5.png"
            className="w-[150px] top-5 right-5 h-auto absolute opacity-50 md:opacity-1"
          />
          <img
            alt=""
            src="/images/shape1.png"
            className="w-[200px] bottom-7 md:bottom-5 left-[150px] h-auto absolute opacity-30 md:opacity-50"
          />
        </section>

        <section className="w-full min-h-[300px] px-3 pb-[70px] md:py-[70px] lg:px-[350px] bg-[#fdf4ff] z-[99] overflow-hidden relative">
          <div className="w-full flex gap-10">
            <div className="w-full">
              <h1
                data-aos="fade-up"
                data-aos-duration="1000"
                className="font-medium text-[1.5rem]"
              >
                Previous Experience and Education
              </h1>
              <div className="mt-3 text-[1.25rem]">
                {/* <div className="w-full md:hidden my-8 flex justify-center items-center overflow-hidden">
                  <img
                    alt=""
                    src="/images/about.png"
                    className="w-full h-auto absolute rotate rounded-full"
                  />
                  <img
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                    alt=""
                    src="/images/mission.png"
                    className="w-[90%] h-auto rounded-xl"
                  />
                </div> */}
                <p
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                  className="mt-3"
                >
                  As a team of experienced managers, we have a variety of
                  experience under our titles and still taking on new trainings
                  as required.
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
                  <li>
                    - Experienced members who were involved with working with
                    the refugee council UK
                  </li>
                  <li>- Ex - CQC registered managers</li>
                  <li>- NVQ 5 level managers</li>
                  <li>- Level 1, 2 and 3 in Adult Social Care</li>
                  <li>- SEN trained staff</li>
                </ul>
              </div>
            </div>
            {/* <div className="w-full hidden relative md:flex justify-center items-center">
              <img
                alt=""
                src="/images/about.png"
                className="w-full h-auto rounded-xl absolute rotate"
              />
              <img
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay="200"
                alt=""
                src="/images/mission.png"
                className="w-[80%] h-auto rounded-xl"
              />
            </div> */}
          </div>

          <img
            alt=""
            src="/images/shape2.svg"
            className="w-[30px] bottom-[100px] right-[100px] h-auto absolute opacity-50 md:opacity-1"
          />
          <img
            alt=""
            src="/images/shape4.svg"
            className="w-[40px] top-7 md:bottom-5 left-[250px] h-auto absolute opacity-30 md:opacity-50"
          />

          <div className="w-full mt-10">
            {/* <p
              data-aos="fade-up"
              data-aos-duration="1000"
              //   data-aos-delay="200"
              className="font-medium text-[1.5rem] mt-4 mx-auto text-center mb-5"
            >
              We Care
            </p> */}
            <div className="w-full mt-4 flex md:flex-row flex-col gap-3 text-[#4a044e] ">
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
                className="w-full bg-white/80 border border-[#dc6bdd]/30 shadow-sm rounded-lg p-3 flex flex-col gap-2 hover:bg-gradient-to-r from-[#a359fb] to-[#dc6bdd] transition-all duration-300 hover:text-white text-[#4a044e] hover:translate-y-[-10px]"
              >
                <p className="font-bold text-[1.25rem]">Education</p>
                <p>
                  To ensure our YP's are gaining as much as possible to achieve
                  their goals
                </p>
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
                className="w-full bg-white/80 border border-[#dc6bdd]/30 shadow-sm rounded-lg p-3 flex flex-col gap-2 hover:bg-gradient-to-r from-[#a359fb] to-[#dc6bdd] transition-all duration-300 hover:text-white text-[#4a044e] hover:translate-y-[-10px]"
              >
                <p className="font-bold text-[1.25rem]">Healty Living</p>
                <p>
                  Make sure they learn to eat well and maintain their health
                </p>
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
                className="w-full bg-white/80 border border-[#dc6bdd]/30 shadow-sm rounded-lg p-3 flex flex-col gap-2 hover:bg-gradient-to-r from-[#a359fb] to-[#dc6bdd] transition-all duration-300 hover:text-white text-[#4a044e] hover:translate-y-[-10px]"
              >
                <p className="font-bold text-[1.25rem]">
                  Encouragement & Motivation
                </p>
                <p>
                  Our staff ensure that they always offer positivity, motivation
                  and encourage our YPs to get up and do things themselves
                </p>
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
                className="w-full bg-white/80 border border-[#dc6bdd]/30 shadow-sm rounded-lg p-3 flex flex-col gap-2 hover:bg-gradient-to-r from-[#a359fb] to-[#dc6bdd] transition-all duration-300 hover:text-white text-[#4a044e] hover:translate-y-[-10px]"
              >
                <p className="font-bold text-[1.25rem]">
                  Independence & Confidence
                </p>
                <p>
                  We at Lona care want to be able to see our YP's take the
                  challenges and pass through to become self motivated and work
                  towards their dreams and goal.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full h-[600px] mb-[100px] md:mb-0 bg-cover bg-center relative text-white bg-[#f8fafc]">
          <div className="absolute w-full h-fit bg-gradient-to-r from-[#a359fb] to-[#dc6bdd] px-3 py-[70px] lg:px-[350px]">
            <h2 className="text-[2rem] font-medium text-center mb-8">
              Lona Care Positive Outcomes
            </h2>
            <ul className="w-full md:w-[700px] flex flex-col mx-auto text-[1.15rem]">
              <li className="py-3 border-b border-slate-100/50 flex gap-0 items-start leading-tight">
                <div className="w-2 h-2 md:w-4 md:h-4 mr-3 p-1 md:p-2 bg-white rounded-full mt-1"></div>

                <div>
                  Young people at lona care are supported by specialized key
                  workers, who offer great encouragement, learning and
                  negotiating transitions to adulthood and independence in an
                  ever changing and increasingly complex challenging world.
                </div>
              </li>
              <li className="py-3 border-b border-slate-100/50 flex gap-0 items-start leading-tight">
                <div className="w-2 h-2 md:w-4 md:h-4 mr-3 p-1 md:p-2 bg-white rounded-full mt-1"></div>

                <div>
                  Lona care wants to offer the YP'sa level of confidence that
                  will boost their morale and be ready for the level of choice
                  and opportunities available to them to make informed choices
                  for themselves.
                </div>
              </li>
              <li className="py-3 border-b border-slate-100/50 flex gap-0 items-start leading-tight">
                <div className="w-2 h-2 md:w-4 md:h-4 mr-3 p-1 md:p-2 bg-white rounded-full mt-1"></div>

                <div>
                  We believe that if we can achieve the goals set our YP's will
                  transitioning into adulthood with the skills, encouragement,
                  motivation and knowledge to lead their independent lives.
                </div>
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
