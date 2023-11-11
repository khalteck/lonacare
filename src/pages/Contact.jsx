/* eslint-disable react/no-unescaped-entities */
import Footer from "../components/Footer";
import Header from "../components/Header";
import ScrollToTop from "../ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    AOS.init();
  }, []);

  const address = "15 Maswell Park Road, Hounslow, Middlesex, TW3 2DL";

  // Create a function to generate the Google Maps URL
  const getGoogleMapsUrl = (address) => {
    const encodedAddress = encodeURIComponent(address);
    return `https://www.google.com/maps?q=${encodedAddress}`;
  };

  return (
    <>
      <Header />
      <main className="bg-white font-mont md:pt-[100px]">
        <section className="w-full h-[300px] md:h-[400px] bg-contact bg-cover bg-center relative z-0">
          <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-r from-[#912656] to-[#912656]/10 px-3 py-[100px] lg:px-[15%] lg:py-[150px]">
            <div className="flex flex-col gap-3 mt-[50px] sm:mt-[100px] lg:mt-0">
              <h1
                data-aos="zoom-out"
                data-aos-duration="1000"
                className="text-[2rem] md:text-[3rem] font-bold text-white leading-tight uppercase md:mt-[50px]"
              >
                Contact Us
              </h1>
            </div>
          </div>
        </section>

        <section className="w-full min-h-[300px] px-3 pb-[70px] md:py-[80px] lg:px-[15%] bg-[#fdf4ff] z-[99] overflow-hidden relative">
          <div className="w-full mt-4 flex md:flex-row flex-col flex-wrap gap-3 text-[#912656] z-30">
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
              className="w-full md:w-[32%] min-w-[200px] bg-white/70 z-30 border border-[#dc6bdd]/30 shadow-sm rounded-lg p-3 flex flex-col items-center gap-2 transition-all duration-300  text-[#912656] hover:translate-y-[-10px]"
            >
              <img
                alt=""
                src="/images/icons8-mail-50.png"
                className="w-10 h-10"
              />
              <p className="font-bold text-[1.25rem]">Mail Here</p>
              <p className="hover:underline">
                <a href="mailto:info@lonacare.com">Email: info@lonacare.com</a>
              </p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
              className="w-full md:w-[32%] min-w-[200px] bg-white/70 z-30 border border-[#dc6bdd]/30 shadow-sm rounded-lg p-3 flex flex-col items-center gap-2 transition-all duration-300  text-[#912656] hover:translate-y-[-10px]"
            >
              <img
                alt=""
                src="/images/icons8-location-50.png"
                className="w-10 h-10"
              />
              <p className="font-bold text-[1.25rem]">Visit Here</p>
              <p className="text-center hover:underline">
                <a
                  href={getGoogleMapsUrl(address)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {address}
                </a>
              </p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
              className="w-full md:w-[32%] min-w-[200px] bg-white/70 z-30 border border-[#dc6bdd]/30 shadow-sm rounded-lg p-3 flex flex-col items-center gap-2 transition-all duration-300  text-[#912656] hover:translate-y-[-10px]"
            >
              <img
                alt=""
                src="/images/icons8-call-50.png"
                className="w-10 h-10"
              />
              <p className="font-bold text-[1.25rem]">Call Here</p>
              <p className="hover:underline">
                <a href="tel:02080904509">Tel: 02080904509</a>
              </p>
              <p className="hover:underline">
                <a href="tel:07956537535">Mob: 07956537535</a>
              </p>
            </div>
          </div>

          {/* <img
            alt=""
            src="/images/shape5.png"
            className="w-[150px] top-5 right-5 h-auto absolute opacity-1 md:opacity-1 z-10"
          />
          <img
            alt=""
            src="/images/shape1.png"
            className="w-[200px] bottom-7 md:bottom-5 left-[150px] h-auto absolute opacity-1 md:opacity-50 z-10"
          /> */}
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}
