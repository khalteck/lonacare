/* eslint-disable react/no-unescaped-entities */
import Footer from "../components/Footer";
import Header from "../components/Header";
import ScrollToTop from "../ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import houses from "../data/houses.json";
import HouseCard from "../components/HouseCard";

export default function Service() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Header />
      <main className="bg-white text-[#4a044e]">
        <section className="w-full h-[300px] md:h-[400px] bg-service bg-cover bg-center relative z-0">
          <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-r from-purple-950 to-purple-950/10 px-3 py-[100px] lg:px-[350px] lg:py-[150px]">
            <div className="flex flex-col gap-3 mt-[50px] sm:mt-[100px] lg:mt-0">
              <h1 className="text-[2rem] md:text-[3rem] font-bold text-white leading-tight uppercase md:mt-[50px]">
                Find A Service
              </h1>
            </div>
          </div>
        </section>

        <section className="w-full min-h-[300px] px-3 pb-[70px] pt-10 md:pb-[80px] lg:px-[350px] bg-[#fdf4ff] z-[99] overflow-hidden relative">
          <h2 className="font-medium my-3">Showing 1 - 5 of 20</h2>
          <div className="w-full flex flex-col gap-4 md:gap-7 mt-10">
            {houses?.map((item, index) => {
              return <HouseCard key={index} item={item} />;
            })}
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}
