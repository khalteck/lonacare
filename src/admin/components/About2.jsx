import { useState } from "react";
import { useAppContext } from "../../contexts/AppContext";

/* eslint-disable react/prop-types */
const About2 = ({ data }) => {
  const { saveEdit, saving, saved } = useAppContext();

  const [info, setInfo] = useState({
    outcome_1: data?.outcomes?.outcome_1 || "",
    outcome_2: data?.outcomes?.outcome_2 || "",
    outcome_3: data?.outcomes?.outcome_3 || "",
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
    saveEdit(info, "outcomes", "aboutpage");
  }
  return (
    <div className="w-full border-t border-[#912656] bg-gray-100 px-3 py-10">
      <h2 className="font-medium text-gray-600 mb-6 text-center">Section 3</h2>
      <form className="w-full">
        <h2 className="font-bold text-[1.25rem] mb-4">
          LONA CARE POSITIVES OUTCOMES
        </h2>

        <div className="flex flex-col gap-2">
          <div className="flex gap-3">
            <div className="w-fit h-fit bg-black p-2 rounded-full"></div>
            <textarea
              className="w-full min-h-[100px] border border-gray-300 p-3 outline-non"
              id="outcome_1"
              onChange={handleChange}
              value={info?.outcome_1}
            />
          </div>
          <div className="flex gap-3">
            <div className="w-fit h-fit bg-black p-2 rounded-full"></div>
            <textarea
              className="w-full min-h-[100px] border border-gray-300 p-3 outline-non"
              id="outcome_2"
              onChange={handleChange}
              value={info?.outcome_2}
            />
          </div>
          <div className="flex gap-3">
            <div className="w-fit h-fit bg-black p-2 rounded-full"></div>
            <textarea
              className="w-full min-h-[100px] border border-gray-300 p-3 outline-non"
              id="outcome_3"
              onChange={handleChange}
              value={info?.outcome_3}
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

export default About2;
