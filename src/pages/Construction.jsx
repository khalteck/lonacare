/* eslint-disable react/no-unescaped-entities */
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Construction() {
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
      <main className="w-full h-screen bg-green-600 text-[#4a044e] flex flex-col">
        <div className="w-full h-[70%] min-h-[550px] bg-purple-100 flex flex-col items-center gap-3 px-3 py-[100px]">
          <img
            alt=""
            src="/images/404-error.png"
            className="w-[70%] sm:w-[400px] h-auto"
          />
          <h1 className="text-[2rem] md:text-[3.5rem] font-light text-purple-950 leading-tight text-center">
            Under Construction
          </h1>
          <p className="text-center text-[1.15rem]">
            Our new website is being updated, semi independent living 24/7
            stepdown provision.
          </p>
          <p className="text-[1.5rem] text-center font-light">Coming soon!</p>
        </div>

        <div className="w-full h-[30%] min-h-[150px] bg-white flex items-center pt-10">
          <div className="w-full">
            <p className="w-[fit-content] font-bold mx-auto mb-3">Contact</p>
            <ul className="w-full justify-center md:w-[250px] flex gap-4 mx-auto">
              <li className="w-[fit-content] cursor-pointer hover:text-purple-500 whitespace-nowrap">
                <a href="tel:02080904509">
                  {" "}
                  <div className="bg-purple-200">
                    <img
                      alt=""
                      src="/images/icons8-call-50.png"
                      className="w-7 h-7"
                    />
                  </div>
                </a>
              </li>
              <li className="w-[fit-content] cursor-pointer hover:text-purple-500  whitespace-nowrap">
                <a href="mailto:info@lonacare.com">
                  {" "}
                  <div className="bg-purple-200">
                    <img
                      alt=""
                      src="/images/icons8-mail-50.png"
                      className="w-7 h-7"
                    />
                  </div>
                </a>
              </li>
              <li className="w-[fit-content] cursor-pointer hover:text-purple-500">
                <a href={getGoogleMapsUrl(address)}>
                  <div className="bg-purple-200">
                    <img
                      alt=""
                      src="/images/icons8-location-50.png"
                      className="w-7 h-7"
                    />
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
