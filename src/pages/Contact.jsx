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
      <main className="bg-white text-[#4a044e] mt-[60px] md:mt-[80px]">
        <h1 className="text-[2rem] font-bold uppercase pt-10 text-center text-[#4a044e] bg-[#fdf4ff]">
          About Lonacare
        </h1>
        <section className="w-full min-h-[300px] px-3 pb-[70px] md:py-[80px] lg:px-[350px] bg-[#fdf4ff] z-[99] overflow-hidden relative">
          <div className="w-full mt-4 flex md:flex-row flex-col flex-wrap gap-3 text-[#4a044e] ">
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
              className="w-full md:w-[32%] min-w-[200px] bg-white/80 border border-[#dc6bdd]/30 shadow-sm rounded-lg p-3 flex flex-col items-center gap-2 hover:bg-gradient-to-r from-[#a359fb] to-[#dc6bdd] transition-all duration-300 hover:text-white text-[#4a044e] hover:translate-y-[-10px]"
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
              className="w-full md:w-[32%] min-w-[200px] bg-white/80 border border-[#dc6bdd]/30 shadow-sm rounded-lg p-3 flex flex-col items-center gap-2 hover:bg-gradient-to-r from-[#a359fb] to-[#dc6bdd] transition-all duration-300 hover:text-white text-[#4a044e] hover:translate-y-[-10px]"
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
              className="w-full md:w-[32%] min-w-[200px] bg-white/80 border border-[#dc6bdd]/30 shadow-sm rounded-lg p-3 flex flex-col items-center gap-2 hover:bg-gradient-to-r from-[#a359fb] to-[#dc6bdd] transition-all duration-300 hover:text-white text-[#4a044e] hover:translate-y-[-10px]"
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
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}
