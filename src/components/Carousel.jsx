import slide from "../data/slide.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper";
import "../swiper-pagination.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Carousel() {
  const navigate = useNavigate();

  const [change, setChange] = useState(true);
  const [btn, setbtn] = useState(true);

  const handleSlideChange = () => {
    setChange(false);
    setbtn(false);
    setTimeout(() => {
      setChange(true);
    }, 500);
    setTimeout(() => {
      setbtn(true);
    }, 2500);
  };
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      autoplay={{
        delay: 8000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
      onSlideChange={handleSlideChange}
    >
      {slide?.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <section
              className={`w-full h-[500px] sm:h-[600px] md:h-[100vh] lg:h-[106vh] md:min-h-[500px] bg-cover bg-center relative z-0 ${
                index === 0
                  ? "bg-caro2"
                  : index === 1
                  ? "bg-caro3"
                  : index === 2
                  ? "bg-caro1"
                  : "bg-hero2"
              }`}
            >
              <div className="w-full h-full absolute top-0 left-0 bg-slate-600/50 px-3 py-[100px] lg:px-[15%] lg:py-[150px] md:flex justify-center items-center">
                <div className="flex flex-col items-center gap-3 mt-[50px] sm:mt-[100px] lg:mt-0 relative md:top-[-80px]">
                  {change && (
                    <h1
                      className={`w-full md:w-[550px] text-[2rem] md:text-[3rem] md:mt-12 text-center font-bold text-white leading-tight scale first-section-text`}
                    >
                      {item}
                    </h1>
                  )}
                  <div
                    className={`flex gap-3 mt-4 md:mt-0 md:mx-auto ${
                      btn ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <button
                      onClick={() => navigate("/service")}
                      className="w-fit bg-[#912656] hover:bg-white hover:text-[#912656] px-5 md:px-8 py-2 md:py-3 md:mt-3 rounded-sm text-white font-medium transition-all duration-300"
                    >
                      Book a Service
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
