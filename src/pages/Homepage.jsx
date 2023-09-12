import Footer from "../components/Footer";
import Header from "../components/Header";
import ScrollToTop from "../ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Homepage() {
  useEffect(() => {
    AOS.init();
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <Header />
      <main className="bg-white text-[#4a044e]">
        <section className="w-full h-[500px] md:h-[500px] bg-hero bg-cover bg-center relative z-0">
          <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-r from-purple-950 to-purple-950/10 px-3 py-[100px] lg:px-[350px] lg:py-[150px]">
            <div className="flex flex-col gap-3 mt-[50px] sm:mt-[100px] lg:mt-0">
              <h1 className="text-[2rem] md:text-[3rem] font-bold text-white leading-tight">
                Lona Care <br /> Making a Difference <br /> in Young Lives.
              </h1>
              <div className="flex gap-3 mt-4 md:mt-0">
                <button
                  onClick={() => navigate("/service")}
                  className="w-fit bg-[#d946ef] hover:bg-white hover:text-[#86198f] px-5 md:px-8 py-2 md:py-3 rounded-sm text-white font-medium transition-all duration-300"
                >
                  Find a Service
                </button>
                <button
                  onClick={() => navigate("/contact")}
                  className="w-fit hover:bg-[#d946ef] bg-white text-[#86198f] px-5 md:px-8 py-2 md:py-3 rounded-sm hover:text-white font-medium transition-all duration-300"
                >
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full min-h-[300px] px-3 pb-[70px] pt-14 md:py-[100px] lg:px-[350px] bg-white z-[99] overflow-hidden relative">
          <div className="w-full flex gap-10">
            <div className="w-full">
              <h1
                data-aos="fade-up"
                data-aos-duration="1000"
                className="font-light text-[1.5rem]"
              >
                OUR MISSION
              </h1>
              <div className="mt-3 text-[1.25rem]">
                <p
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                  className="text-[1.75rem] font-bold"
                >
                  <span className="text-[#d946ef]">Lona care</span> is committed
                  to make a difference...
                </p>
                <div className="w-full h-fit md:hidden relative flex justify-center items-center mt-3 mb-8 translate-x-[-10px]">
                  <div className="w-[90%] h-full absolute border-4 border-[#4a044e] translate-x-[20px] translate-y-[20px] rounded-sm bg-[#4a044e]/10"></div>
                  <img
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                    alt=""
                    src="/images/service7.jpeg"
                    className="w-[90%] h-[230px] object-cover object-top rounded-sm"
                  />
                </div>
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
                    src="/images/mission2.jpg"
                    className="w-[90%] h-auto rounded-xl"
                  />
                </div> */}
                <p
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                  className="mt-3"
                >
                  By working with respect, compassion, embracing independence,
                  choice, privacy, pride and dignity,
                </p>

                <p
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  to all our, young persons, heir families and our staff to
                  offer specialized care and support.
                </p>
                <p
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                  className="mt-3"
                >
                  Our vision is to provide excellent quality of service which
                  are committed to exceptional and personalized support service,
                  while ensuring customer satisfaction
                </p>
                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                  className="mt-4 w-full flex gap-3 font-light"
                >
                  <div className="h-[40px] text-[.85rem] bg-gray-200 p-3 rounded-sm border border-purple-200 w-fit flex items-center gap-2">
                    <img
                      alt=""
                      src="/images/icons8-home-64.png"
                      className="w-5 h-5"
                    />
                    Homely Feel
                  </div>
                  <div className="h-[40px] text-[.85rem] bg-gray-200 p-3 rounded-sm border border-purple-200 w-fit flex items-center gap-2">
                    <img
                      alt=""
                      src="/images/icons8-experience-30.png"
                      className="w-5 h-5"
                    />
                    Experienced staff
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-fit hidden relative md:flex justify-center items-center">
              <div className="w-full h-full absolute border-4 border-[#4a044e] translate-x-[20px] translate-y-[20px] rounded-sm bg-[#4a044e]/10"></div>
              <img
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay="200"
                alt=""
                src="/images/service7.jpeg"
                className="w-full h-[400px] object-cover rounded-sm"
              />
            </div>
            {/* <div className="w-full hidden relative md:flex justify-center items-center overflow-hidden">
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
                src="/images/mission2.jpg"
                className="w-full h-auto rounded-sm"
              />
            </div> */}
          </div>

          {/* <img
            alt=""
            src="/images/shape5.png"
            className="w-[150px] top-5 right-5 h-auto absolute opacity-50 md:opacity-1"
          />
          <img
            alt=""
            src="/images/shape1.png"
            className="w-[200px] bottom-7 md:bottom-5 left-[150px] h-auto absolute opacity-30 md:opacity-50"
          /> */}
        </section>

        <section className="w-full min-h-[400px] px-3 py-5 md:py-[70px] lg:px-[350px] relative bg-[#fdf4ff]">
          <h2
            data-aos="fade-up"
            data-aos-duration="1000"
            className="text-[1.5rem] uppercase font-bold text-center mb-8 font-merri"
          >
            Why Lona Care
          </h2>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
              className="w-full h-[200px] bg-white/80 rounded-sm p-3 border border-[#d946ef]/10 flex flex-col gap-3 items-center justify-center hover:bg-gradient-to-r from-[#a359fb] to-[#dc6bdd] transition-all duration-500 hover:text-white text-[#4a044e] hover:translate-y-[-10px]"
            >
              <div className="p-3 w-[50px] h-[50px] flex justify-center items-center bg-[#86198f] rounded-full text-[2rem] font-bold text-white">
                1
              </div>
              <p className="text-[1.15rem] text-center font-medium">
                Semi Independent Living for
                <br /> 16 - 25 yeas of age
              </p>
            </div>

            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
              className="w-full h-[200px] bg-white/80 rounded-sm p-3 border border-[#d946ef]/10 flex flex-col gap-3 items-center justify-center hover:bg-gradient-to-r from-[#a359fb] to-[#dc6bdd] transition-all duration-500 hover:text-white text-[#4a044e] hover:translate-y-[-10px]"
            >
              <div className="p-3 w-[50px] h-[50px] flex justify-center items-center bg-[#86198f] rounded-full text-[2rem] font-bold text-white">
                2
              </div>
              <p className="text-[1.15rem] text-center font-medium">
                24/7 Provision for 16 - 18
                <br /> Years of age
              </p>
            </div>

            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
              className="w-full h-[200px] bg-white/80 rounded-sm p-3 border border-[#d946ef]/10 flex flex-col gap-3 items-center justify-center hover:bg-gradient-to-r from-[#a359fb] to-[#dc6bdd] transition-all duration-500 hover:text-white text-[#4a044e] hover:translate-y-[-10px]"
            >
              <div className="p-3 w-[50px] h-[50px] flex justify-center items-center bg-[#86198f] rounded-full text-[2rem] font-bold text-white">
                3
              </div>
              <p className="text-[1.15rem] text-center font-medium">
                Stepdown provision for care leavers
                <br /> 18 - 25 years of age
              </p>
            </div>

            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
              className="w-full h-[200px] bg-white/80 rounded-sm p-3 border border-[#d946ef]/10 flex flex-col gap-3 items-center justify-center hover:bg-gradient-to-r from-[#a359fb] to-[#dc6bdd] transition-all duration-500 hover:text-white text-[#4a044e] hover:translate-y-[-10px]"
            >
              <div className="p-3 w-[50px] h-[50px] flex justify-center items-center bg-[#86198f] rounded-full text-[2rem] font-bold text-white">
                4
              </div>
              <p className="text-[1.15rem] text-center font-medium">
                Experience staff to manage
                <br /> the service
              </p>
            </div>

            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
              className="w-full h-[200px] bg-white/80 rounded-sm p-3 border border-[#d946ef]/10 flex flex-col gap-3 items-center justify-center hover:bg-gradient-to-r from-[#a359fb] to-[#dc6bdd] transition-all duration-500 hover:text-white text-[#4a044e] hover:translate-y-[-10px]"
            >
              <div className="p-3 w-[50px] h-[50px] flex justify-center items-center bg-[#86198f] rounded-full text-[2rem] font-bold text-white">
                5
              </div>
              <p className="text-[1.15rem] text-center font-medium">
                Work with young persons to
                <br /> achieve outcomes
              </p>
            </div>

            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
              className="w-full h-[200px] bg-white/80 rounded-sm p-3 border border-[#d946ef]/10 flex flex-col gap-3 items-center justify-center hover:bg-gradient-to-r from-[#a359fb] to-[#dc6bdd] transition-all duration-500 hover:text-white text-[#4a044e] hover:translate-y-[-10px]"
            >
              <div className="p-3 w-[50px] h-[50px] flex justify-center items-center bg-[#86198f] rounded-full text-[2rem] font-bold text-white">
                6
              </div>
              <p className="text-[1.15rem] text-center font-medium">
                Offer a homely feel
                <br /> provision
              </p>
            </div>
          </div>

          {/* <img
            alt=""
            src="/images/shape4.svg"
            className="w-[30px] top-5 md:top-10 left-10 md:right-[60%] h-auto absolute opacity-50 md:opacity-1"
          />
          <img
            alt=""
            src="/images/shape2.svg"
            className="w-[30px] bottom-[100px] right-[150px] h-auto absolute hidden md:block"
          /> */}
        </section>

        <section className="w-full min-h-[600px] px-3 py-[100px] lg:px-[350px] relative bg-white">
          <div className="w-full flex flex-col gap-10 md:flex-row-reverse">
            <div className="w-full">
              <h1
                data-aos="fade-up"
                data-aos-duration="1000"
                className="font-light text-[1.5rem]"
              >
                WHAT IS LONA CARE
              </h1>
              {/* <div className="w-full md:hidden block my-4">
                <img
                  alt=""
                  src="/images/hero.jpg"
                  className="w-full h-auto rounded-2xl"
                />
              </div> */}
              <div className="w-full h-fit md:hidden relative flex justify-center items-center mt-3 mb-8 translate-x-[10px]">
                <div className="w-[90%] h-full absolute border-4 border-[#4a044e] translate-x-[-20px] translate-y-[20px] rounded-sm bg-[#4a044e]/10"></div>
                <img
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                  alt=""
                  src="/images/hero4.jpg"
                  className="w-[90%] h-auto rounded-sm"
                />
              </div>

              <div className="mt-3 text-[1.25rem]">
                <p
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                  className="text-[1.75rem] font-bold"
                >
                  <span className="text-[#d946ef]">Lona care</span> is a
                  semi-independent living services provider...
                </p>
                <p
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                  className="mt-3"
                >
                  with excellent accomodation and support within a secure,
                  environment. We believe in a supportive environment to our
                  residents aged 16 - 25 years where they can feel safe and kept
                  safe.
                </p>
                <p
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  We aim to be an organisation that takes great pride to support
                  and inspire, young people so they can achieve their own
                  personal goals, live independently and integrate within
                  society.
                </p>
                <p
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                  className="mt-3"
                >
                  We want to be the stepping stones to their independenceand
                  adulthood.
                </p>
                <p
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                  className="mt-3"
                >
                  We want to ensure that we approach the young people with
                  respect when supporting them by engaging and developing the
                  young person mentally, emotionally, physically and
                  spiritually.
                </p>
                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                  className="mt-4 w-full flex gap-3 font-light"
                >
                  <button
                    onClick={() => navigate("/about")}
                    className="w-fit bg-[#86198f] border border-[#86198f] hover:bg-white hover:text-[#86198f] px-8 py-2 rounded-sm text-white font-medium transition-all duration-300"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
            {/* <div className="w-full hidden md:block">
              <img
                alt=""
                src="/images/hero.jpg"
                className="w-[500px] h-[500px] rounded-full"
              />
            </div> */}
            <div className="w-full h-fit hidden relative md:flex justify-center items-center mt-3 mb-8 translate-x-[-10px]">
              <div className="w-[90%] h-full absolute border-4 border-[#4a044e] translate-x-[-20px] translate-y-[20px] rounded-sm bg-[#4a044e]/10"></div>
              <img
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay="200"
                alt=""
                src="/images/hero4.jpg"
                className="w-[90%] h-auto rounded-sm"
              />
            </div>
          </div>

          {/* <img
            alt=""
            src="/images/shape1.png"
            className="w-[200px] top-5 right-0 md:right-[150px] h-auto absolute opacity-30 md:opacity-50"
          />
          <img
            alt=""
            src="/images/shape4.svg"
            className="w-[30px] bottom-[100px] left-[200px] h-auto absolute"
          /> */}
        </section>

        <section className="w-full h-[600px] mb-[100px] md:mb-0 bg-cover bg-center relative text-white">
          <div className="absolute w-full h-fit bg-gradient-to-r from-[#a359fb] to-[#dc6bdd] px-3 py-[70px] lg:px-[350px]">
            <h2 className="text-[2rem] font-medium text-center mb-8">
              Our promise to you
            </h2>
            <ul className="w-full md:w-[700px] flex flex-col mx-auto text-[1.15rem]">
              <li className="py-3 border-b border-slate-100/50 flex gap-0 items-start leading-tight">
                <div className="w-2 h-2 md:w-4 md:h-4 mr-3 p-1 md:p-2 bg-white rounded-full mt-1"></div>
                <div>
                  Lonacare will ensure that you have all the information you
                  always need and is available to you.
                </div>
              </li>
              <li className="py-3 border-b border-slate-100/50 flex gap-0 items-start leading-tight">
                <div className="w-2 h-2 md:w-4 md:h-4 mr-3 p-1 md:p-2 bg-white rounded-full mt-1"></div>
                <div> To respect your privacy and dignity.</div>
              </li>
              <li className="py-3 border-b border-slate-100/50 flex gap-0 items-start leading-tight">
                <div className="w-2 h-2 md:w-4 md:h-4 mr-3 p-1 md:p-2 bg-white rounded-full mt-1"></div>
                <div>
                  {" "}
                  To understand your thoughts and support you as required.
                </div>
              </li>
              <li className="py-3 border-b border-slate-100/50 flex gap-0 items-start leading-tight">
                <div className="w-2 h-2 md:w-4 md:h-4 mr-3 p-1 md:p-2 bg-white rounded-full mt-1"></div>
                <div> Your home is safe for you.</div>
              </li>
              <li className="py-3 border-b border-slate-100/50 flex gap-0 items-start leading-tight">
                <div className="w-2 h-2 md:w-4 md:h-4 mr-3 p-1 md:p-2 bg-white rounded-full mt-1"></div>
                <div> Address your concerns and complaints!</div>
              </li>
              <li className="py-3 border-b border-slate-100/50 flex gap-0 items-start leading-tight">
                <div className="w-2 h-2 md:w-4 md:h-4 mr-3 p-1 md:p-2 bg-white rounded-full mt-1"></div>
                <div>
                  {" "}
                  To keep the property well maintained and fix any repair ASAP.
                </div>
              </li>
              <li className="py-3 border-b border-slate-100/50 flex gap-0 items-start leading-tight">
                <div className="w-2 h-2 md:w-4 md:h-4 mr-3 p-1 md:p-2 bg-white rounded-full mt-1"></div>
                <div>
                  {" "}
                  Have regular reviews and update your support plans and
                  identify your changing needs.
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
