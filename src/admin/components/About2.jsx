const About2 = () => {
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
            />
          </div>
          <div className="flex gap-3">
            <div className="w-fit h-fit bg-black p-2 rounded-full"></div>
            <textarea
              className="w-full min-h-[100px] border border-gray-300 p-3 outline-non"
              id="outcome_2"
            />
          </div>
          <div className="flex gap-3">
            <div className="w-fit h-fit bg-black p-2 rounded-full"></div>
            <textarea
              className="w-full min-h-[100px] border border-gray-300 p-3 outline-non"
              id="outcome_3"
            />
          </div>
        </div>
      </form>
      <div className="flex justify-center mt-6">
        <button
          // disabled={loading}
          // onClick={() => logout()}
          className={` w-fit bg-[#912656] hover:bg-[#912656]/80 px-5 md:px-8 py-2 rounded-sm text-white font-medium transition-all duration-300`}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default About2;
