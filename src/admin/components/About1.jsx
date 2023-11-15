const About1 = () => {
  return (
    <div className="w-full border-t border-[#912656] bg-gray-100 px-3 py-10">
      <h2 className="font-medium text-gray-600 mb-6 text-center">Section 2</h2>
      <form className="w-full ">
        <div className="w-full flex gap-10 flex-wrap justify-center">
          <div className="w-[45%]">
            <div className="mt-4">
              <textarea
                className="w-full min-h-[200px] border border-gray-300 p-3 outline-non"
                id="about_content1"
              />
            </div>
          </div>

          <div className="w-[40%]">
            <div>
              <label htmlFor="mission_img">Change image</label>
              <input
                type="file"
                src="/images/hero4.jpg"
                className="w-full border border-gray-300 p-3 outline-none"
              />
            </div>
            <img className="w-full h-auto mt-4" src="/images/about.jpeg" />
          </div>
        </div>

        <div className="mt-4">
          <h2 className="font-bold text-[1.25rem]">
            Previous Experience and Education
          </h2>
          <textarea
            className="w-full min-h-[200px] border border-gray-300 p-3 outline-non"
            id="about_exp"
          />
        </div>

        <div className="mt-4 flex flex-col gap-2">
          <h2 className="font-bold text-[1.25rem]">We have a team of</h2>
          <input
            type="text"
            id="team_of_1"
            className="w-full border border-gray-300 p-3 outline-none"
            placeholder="something"
          />
          <input
            type="text"
            id="team_of_2"
            className="w-full border border-gray-300 p-3 outline-none"
            placeholder="something"
          />
          <input
            type="text"
            id="team_of_3"
            className="w-full border border-gray-300 p-3 outline-none"
            placeholder="something"
          />
          <input
            type="text"
            id="team_of_4"
            className="w-full border border-gray-300 p-3 outline-none"
            placeholder="something"
          />
          <input
            type="text"
            id="team_of_5"
            className="w-full border border-gray-300 p-3 outline-none"
            placeholder="something"
          />
        </div>

        <div className="mt-10">
          <h2 className="font-bold text-[1.25rem] mb-2">Attribute boxes</h2>
          <div className="w-full flex gap-3">
            <div className="w-full flex flex-col gap-2">
              <input
                type="text"
                id="box_title_1"
                className="w-full border border-gray-300 p-3 outline-none"
                placeholder="something"
              />
              <textarea
                className="w-full min-h-[100px] border border-gray-300 p-3 outline-non"
                id="box_content-1"
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <input
                type="text"
                id="box_title_2"
                className="w-full border border-gray-300 p-3 outline-none"
                placeholder="something"
              />
              <textarea
                className="w-full min-h-[100px] border border-gray-300 p-3 outline-non"
                id="box_content-2"
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <input
                type="text"
                id="box_title_3"
                className="w-full border border-gray-300 p-3 outline-none"
                placeholder="something"
              />
              <textarea
                className="w-full min-h-[100px] border border-gray-300 p-3 outline-non"
                id="box_content-3"
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <input
                type="text"
                id="box_title_4"
                className="w-full border border-gray-300 p-3 outline-none"
                placeholder="something"
              />
              <textarea
                className="w-full min-h-[100px] border border-gray-300 p-3 outline-non"
                id="box_content-4"
              />
            </div>
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

export default About1;
