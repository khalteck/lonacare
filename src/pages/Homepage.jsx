import Footer from "../components/Footer";
import Header from "../components/Header";
import ScrollToTop from "../ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import SearchCont from "../components/SearchCont";
import Carousel from "../components/Carousel";

export default function Homepage() {
  useEffect(() => {
    AOS.init();
  }, []);

  const navigate = useNavigate();
  const { searchOpen } = useAppContext();

  return (
    <>
      <Header />

      {searchOpen && <SearchCont />}
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
                    src="/images/about.jpeg"
                    className="w-full h-[230px] object-cover object-top rounded-sm"
                  />
                </div>
                <p
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                  className=""
                >
                  Lona Care is committed to make a difference.
                </p>
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
                  to all our young persons, their families and our staff to
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
              </div>
            </div>
            <div className="w-full h-fit hidden relative md:flex justify-center items-center">
              <img
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay="200"
                alt=""
                src="/images/about.jpeg"
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
                  Semi Independent Living for
                  <br /> 16 - 25 yeas of age
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
                  24/7 Provision for 16 - 18
                  <br /> Years of age
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
                  Stepdown provision for care leavers
                  <br /> 18 - 25 years of age
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
                  Experience staff to manage
                  <br /> the service
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
                  Work with young persons to
                  <br /> achieve outcomes
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
                  Offer a homely feel
                  <br /> provision
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
                  src="/images/caro2.jpg"
                  className="w-full h-auto rounded-sm"
                />
              </div>

              <div className="mt-3 text-[1rem]">
                <p
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                  className="mt-3"
                >
                  {" "}
                  Lona care is a semi-independent living services provider with
                  excellent accomodation and support within a secure,
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
                  We want to be the stepping stones to their independence and
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
                src="/images/caro2.jpg"
                className="w-full h-auto rounded-sm"
              />
            </div>
          </div>
        </section>

        {/* <section className="w-full h-[600px] mb-[100px] md:mb-0 bg-cover bg-center relative text-white">
          <div className="absolute w-full h-fit bg-gradient-to-r from-[#a359fb] to-[#dc6bdd] px-3 py-[70px] lg:px-[15%]">
            <h2 className="text-[2rem] font-bold text-center mb-8 uppercase">
              Our promise to you
            </h2>
            <ul className="w-full md:w-[700px] flex flex-col mx-auto text-[1.15rem]">
              <li className="py-3 border-b border-slate-100/50 flex gap-0 items-start leading-tight">
                <div className="w-2 h-2 md:w-4 md:h-4 mr-3 p-1 md:p-2 bg-white rounded-full mt-1"></div>
                <div>
                  Lona Care will ensure that you have all the information you
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
        </section> */}
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}
