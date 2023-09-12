import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const HouseCard = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="200"
      className="w-full pb-4 md:pb-5 border-b-2 border-[#86198f]/30 rounded-sm flex gap-5 md:flex-row flex-col text-black"
    >
      <div
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-delay="200"
        className="w-full md:w-[50%] bg-[#86198f] relative"
      >
        <img
          alt=""
          src={item?.image}
          className="w-full h-[230px] md:h-[280px] object-cover rounded-sm hover:opacity-[0.8] cursor-pointer transition-all duration-300"
        />
        <div className="h-[40px] text-[.85rem] bg-gray-200 p-3 rounded-sm border border-purple-200 w-fit flex items-center gap-2 absolute bottom-4 left-4">
          <img alt="" src="/images/icons8-home-64.png" className="w-5 h-5" />
          {item?.tags[0]}
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-[#4a044e] font-bold text-[1.5rem]">{item?.title}</p>
        <p className="text-[#4a044e]">Location: {item?.location}</p>
        {item?.tags?.map((itm, idx) => {
          return (
            <p key={idx} className="flex gap-2 items-center">
              <div className="w-2 h-2 p-1 bg-[#86198f] rounded-full mt-1"></div>{" "}
              {itm}
            </p>
          );
        })}
        <button
          onClick={() => navigate(`/service/${item?.title}`)}
          className="w-fit bg-[#86198f] border border-[#86198f] mt-4 hover:bg-white hover:text-[#86198f] px-8 py-2 rounded-sm text-white font-medium transition-all duration-300"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default HouseCard;
