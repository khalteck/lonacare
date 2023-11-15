const Sec3 = () => {
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

export default Sec3;
