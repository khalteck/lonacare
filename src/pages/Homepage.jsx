import Footer from "../components/Footer";
import Header from "../components/Header";
import ScrollToTop from "../ScrollToTop";

export default function Homepage() {
  return (
    <>
      <Header />
      <main className="bg-white text-[#4a044e]">
        <section className="w-full h-[500px] md:h-[800px] bg-hero bg-cover bg-center relative z-0">
          <div className="w-full h-full absolute top-0 left-0  bg-gradient-to-r from-purple-950 to-purple-950/10 px-3 py-[100px] lg:px-[350px] lg:py-[150px]">
            <div className="flex flex-col gap-3 mt-[50px] md:mt-0">
              <h1 className="text-[2rem] md:text-[3rem] font-bold text-white leading-tight">
                Lonacare
                <br />
                Caring for Every <span className="text-[#d946ef]">Life</span>
                <br /> Always
              </h1>
              <button
                //   onClick={() => navigate("/register")}
                className="w-fit bg-[#c026d3] hover:bg-white hover:text-[#c026d3] px-8 py-3 rounded-md text-white font-medium transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>
          </div>

          <svg
            className="w-full absolute bottom-[-1px] left-0 z-0 hidden md:block"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#fdf4ff"
              fillOpacity="1"
              d="M0,128L60,149.3C120,171,240,213,360,218.7C480,224,600,192,720,176C840,160,960,160,1080,170.7C1200,181,1320,203,1380,213.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
          </svg>

          {/* mobile wave */}
          <svg
            className="w-full absolute bottom-[-1px] left-0 z-0 block md:hidden"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#fdf4ff"
              fillOpacity="1"
              d="M0,0L60,0C120,0,240,0,360,16C480,32,600,64,720,101.3C840,139,960,181,1080,181.3C1200,181,1320,139,1380,117.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
          </svg>
        </section>

        <section className="w-full min-h-[300px] px-3 pb-[70px] lg:px-[350px] bg-[#fdf4ff] z-[99]">
          <div className="w-full flex gap-10">
            <div className="w-full">
              <h1 className="font-light text-[1.5rem]">OUR MISSION</h1>
              <div className="mt-3 text-[1.25rem]">
                <p className="text-[1.75rem] font-bold">
                  <span className="text-[#d946ef]">Lona care</span> is committed
                  to make a difference by working with...
                </p>
                <p className="mt-3">
                  Respect, compassion, embracing independence, choice, privacy,
                  pride and dignity,
                </p>
                <p>
                  to all our, young persons, heir families and our staff to
                  offer specialized care and support.
                </p>
                <p className="mt-3">
                  Our vision is to provide excellent quality of service which
                  are committed to exceptional and personalized support service,
                  while ensuring customer satisfaction
                </p>
                <div className="mt-4 w-full flex gap-3 font-light">
                  <div className="h-[80px] bg-white p-3 rounded-lg border border-purple-200 w-full flex items-center">
                    Homely Feel
                  </div>
                  <div className="h-[80px] bg-white p-3 rounded-lg border border-purple-200 w-full flex items-center">
                    Experienced staff
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full">
              <img
                alt=""
                src="/images/mission.png"
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>
        </section>

        <section className="w-full min-h-[400px] px-3 py-[70px] lg:px-[350px] relative bg-[#fdf4ff]">
          <h2 className="text-[2rem] font-medium text-center mb-8">
            Why Lona Care
          </h2>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            <div className="w-full h-[200px] bg-white/80 rounded-xl p-3 border border-[#d946ef]/10 flex flex-col gap-3 items-center justify-center">
              <div className="p-3 w-fit bg-[#d946ef]/20 rounded-full">
                <img
                  alt=""
                  src="/images/mission.png"
                  className="w-10 h-10rounded-full"
                />
              </div>
              <p className="text-[1.35rem] text-center font-medium text-[#4a044e]">
                Semi Independent Living for
                <br /> 16+ -25 yeas of age
              </p>
            </div>

            <div className="w-full h-[200px] bg-white/80 rounded-xl p-3 border border-[#d946ef]/10 flex flex-col gap-3 items-center justify-center">
              <div className="p-3 w-fit bg-[#d946ef]/20 rounded-full">
                <img
                  alt=""
                  src="/images/mission.png"
                  className="w-10 h-10rounded-full"
                />
              </div>
              <p className="text-[1.35rem] text-center font-medium text-[#4a044e]">
                24/7 Provision for 16 - 18
                <br /> Years of age
              </p>
            </div>

            <div className="w-full h-[200px] bg-white/80 rounded-xl p-3 border border-[#d946ef]/10 flex flex-col gap-3 items-center justify-center">
              <div className="p-3 w-fit bg-[#d946ef]/20 rounded-full">
                <img
                  alt=""
                  src="/images/mission.png"
                  className="w-10 h-10rounded-full"
                />
              </div>
              <p className="text-[1.35rem] text-center font-medium text-[#4a044e]">
                Stepdown provision for care leavers
                <br /> 18 - 25 years of age
              </p>
            </div>

            <div className="w-full h-[200px] bg-white/80 rounded-xl p-3 border border-[#d946ef]/10 flex flex-col gap-3 items-center justify-center">
              <div className="p-3 w-fit bg-[#d946ef]/20 rounded-full">
                <img
                  alt=""
                  src="/images/mission.png"
                  className="w-10 h-10rounded-full"
                />
              </div>
              <p className="text-[1.35rem] text-center font-medium text-[#4a044e]">
                Experience staff to manage
                <br /> the service
              </p>
            </div>

            <div className="w-full h-[200px] bg-white/80 rounded-xl p-3 border border-[#d946ef]/10 flex flex-col gap-3 items-center justify-center">
              <div className="p-3 w-fit bg-[#d946ef]/20 rounded-full">
                <img
                  alt=""
                  src="/images/mission.png"
                  className="w-10 h-10rounded-full"
                />
              </div>
              <p className="text-[1.35rem] text-center font-medium text-[#4a044e]">
                Work with young persons to
                <br /> achieve outcomes
              </p>
            </div>

            <div className="w-full h-[200px] bg-white/80 rounded-xl p-3 border border-[#d946ef]/10 flex flex-col gap-3 items-center justify-center">
              <div className="p-3 w-fit bg-[#d946ef]/20 rounded-full">
                <img
                  alt=""
                  src="/images/mission.png"
                  className="w-10 h-10rounded-full"
                />
              </div>
              <p className="text-[1.35rem] text-center font-medium text-[#4a044e]">
                Offer a homely feel
                <br /> provision
              </p>
            </div>
          </div>
        </section>

        <section className="w-full min-h-[600px] px-3 py-[100px] lg:px-[350px] relative bg-white">
          <div className="w-full flex gap-10 flex-row-reverse">
            <div className="w-full">
              <h1 className="font-light text-[1.5rem]">WHAT IS LONA CARE</h1>
              <div className="mt-3 text-[1.25rem]">
                <p className="text-[1.75rem] font-bold">
                  <span className="text-[#d946ef]">Lona care</span> is a
                  semi-independent living services provider with excellent
                  accomodation and support within a secure, environment...
                </p>
                <p className="mt-3">
                  We believe in a supportive environment to our residents aged
                  16 - 25 years where they can feel safe and kept safe.
                </p>
                <p>
                  We aim to be an organisation that takes great pride to support
                  and inspire, young people so they can achieve their own
                  personal goals, live independently and integrate within
                  society.
                </p>
                <p className="mt-3">
                  We want to be the stepping stones to their independenceand
                  adulthood.
                </p>
                <p className="mt-3">
                  We want to ensure that we approach the young people with
                  respect when supporting them by engaging and developing the
                  young person mentally, emotionally, physically and
                  spiritually.
                </p>
                {/* <div className="mt-4 w-full flex gap-3 font-light">
                  <button
                    //   onClick={() => navigate("/register")}
                    className="w-fit bg-[#c026d3] hover:bg-white hover:text-[#c026d3] px-8 py-3 rounded-md text-white font-medium transition-all duration-300"
                  >
                    Read More
                  </button>
                </div> */}
              </div>
            </div>
            <div className="w-full">
              <img
                alt=""
                src="/images/hero.jpg"
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </section>

        <section className="w-full min-h-[600px] bg-hero2 bg-cover bg-center relative bg-white">
          <div className="absolute w-full h-full bg-white/50 px-3 py-[70px] lg:px-[350px]"></div>
          {/* <h2 className="text-[2rem] font-medium text-center mb-8">
            Why Lona Care
          </h2> */}
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}
