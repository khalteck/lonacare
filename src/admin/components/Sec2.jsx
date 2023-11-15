const Sec2 = () => {
  return (
    <div className="w-full border-t border-[#912656] bg-gray-100 px-3 py-10">
      <h2 className="font-medium text-gray-600 mb-6 text-center">Section 2</h2>
      <form className="w-full flex gap-10 flex-wrap justify-center">
        <div className="w-[45%]">
          <h2 className="font-bold text-[1.25rem]">OUR MISSION</h2>
          <div className="mt-4">
            <textarea
              className="w-full min-h-[200px] border border-gray-300 p-3 outline-non"
              id="our_mission"
            />
          </div>
        </div>

        <div className="w-[40%]">
          <div>
            <label htmlFor="mission_img">Change image</label>
            <input
              type="file"
              id="mission_img"
              className="w-full border border-gray-300 p-3 outline-none"
            />
          </div>
          <img className="w-full h-auto mt-4" src="/images/about.jpeg" />
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

export default Sec2;
