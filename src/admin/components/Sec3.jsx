import { useState } from "react";
import { useAppContext } from "../../contexts/AppContext";

/* eslint-disable react/prop-types */
const Sec3 = ({ data }) => {
  const { saveEdit, saving, saved } = useAppContext();

  const [info, setInfo] = useState({
    grid_1: data?.why_lona_care?.grid_1 || "",
    grid_2: data?.why_lona_care?.grid_2 || "",
    grid_3: data?.why_lona_care?.grid_3 || "",
    grid_4: data?.why_lona_care?.grid_4 || "",
    grid_5: data?.why_lona_care?.grid_5 || "",
    grid_6: data?.why_lona_care?.grid_6 || "",
  });

  function handleChange(e) {
    const { value, id } = e.target;
    setInfo((prev) => {
      return {
        ...prev,
        [id]: value,
      };
    });
  }

  function handleSubmit() {
    saveEdit(info, "why_lona_care", "homepage");
  }

  return (
    <div className="w-full border-t border-[#912656] bg-gray-100 px-3 py-10">
      <h2 className="font-medium text-gray-600 mb-6 text-center">Section 3</h2>
      <form className="w-full flex gap-10 flex-wrap justify-center">
        <h2 className="font-bold text-[1.25rem]">WHY LONA CARE</h2>
        <div className="w-full grid grid-cols-3 gap-4">
          <div className="w-full p-3 bg-white flex flex-col items-center gap-3">
            <div className="w-[30px] h-[30px] flex justify-center items-center font-bold bg-[#912656] rounded-full text-white">
              1
            </div>
            <input
              type="text"
              id="grid_1"
              className="w-full border border-gray-300 p-3 outline-none"
              placeholder="something"
              onChange={handleChange}
              value={info?.grid_1}
            />
          </div>

          <div className="w-full p-3 bg-white flex flex-col items-center gap-3">
            <div className="w-[30px] h-[30px] flex justify-center items-center font-bold bg-[#912656] rounded-full text-white">
              2
            </div>
            <input
              type="text"
              id="grid_2"
              className="w-full border border-gray-300 p-3 outline-none"
              placeholder="something"
              onChange={handleChange}
              value={info?.grid_2}
            />
          </div>

          <div className="w-full p-3 bg-white flex flex-col items-center gap-3">
            <div className="w-[30px] h-[30px] flex justify-center items-center font-bold bg-[#912656] rounded-full text-white">
              3
            </div>
            <input
              type="text"
              id="grid_3"
              className="w-full border border-gray-300 p-3 outline-none"
              placeholder="something"
              onChange={handleChange}
              value={info?.grid_3}
            />
          </div>

          <div className="w-full p-3 bg-white flex flex-col items-center gap-3">
            <div className="w-[30px] h-[30px] flex justify-center items-center font-bold bg-[#912656] rounded-full text-white">
              4
            </div>
            <input
              type="text"
              id="grid_4"
              className="w-full border border-gray-300 p-3 outline-none"
              placeholder="something"
              onChange={handleChange}
              value={info?.grid_4}
            />
          </div>

          <div className="w-full p-3 bg-white flex flex-col items-center gap-3">
            <div className="w-[30px] h-[30px] flex justify-center items-center font-bold bg-[#912656] rounded-full text-white">
              5
            </div>
            <input
              type="text"
              id="grid_5"
              className="w-full border border-gray-300 p-3 outline-none"
              placeholder="something"
              onChange={handleChange}
              value={info?.grid_5}
            />
          </div>

          <div className="w-full p-3 bg-white flex flex-col items-center gap-3">
            <div className="w-[30px] h-[30px] flex justify-center items-center font-bold bg-[#912656] rounded-full text-white">
              6
            </div>
            <input
              type="text"
              id="grid_6"
              className="w-full border border-gray-300 p-3 outline-none"
              placeholder="something"
              onChange={handleChange}
              value={info?.grid_6}
            />
          </div>
        </div>
      </form>
      {saved && <p className="bg-green-100 mt-3 p-2">Saved successfully!</p>}
      <div className="flex justify-center mt-6">
        <button
          disabled={saving}
          onClick={handleSubmit}
          className={` w-fit bg-[#912656] hover:bg-[#912656]/80 px-5 md:px-8 py-2 rounded-sm text-white font-medium transition-all duration-300`}
        >
          {saving ? "Saving..." : "Save"}
        </button>
      </div>
    </div>
  );
};

export default Sec3;
