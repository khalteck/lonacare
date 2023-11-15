const ServicepageAdmin = () => {
  return (
    <div className="w-full flex flex-col gap-6">
      <p className="text-[.95rem] my-4 text-gray-500 text-center">
        NOTE: Do not forget to click the save button after editing any section
        content
      </p>

      <div className="w-full flex-col gap-3 min-h-[200px] border-2 border-gray-300 p-3 md:p-5">
        <h1 className="font-medium text-[1.5rem]">Service Page Content:</h1>
        <div className="w-full border-t border-[#912656] bg-gray-100 px-3 py-10">
          <h2 className="font-medium text-gray-600 mb-6 text-center">
            Section 1
          </h2>
          <form className="w-full">
            <h2 className="font-bold text-[1.25rem] mb-4">SUPPORTED HOUSING</h2>

            <div className="w-full grid grid-cols-3 gap-4">
              <div className="w-full p-3 bg-white flex flex-col items-center gap-3">
                <p className="font-bold">Image 1</p>
                <div>
                  <label htmlFor="mission_img">Change image</label>
                  <input
                    type="file"
                    id="mission_img"
                    className="w-full border border-gray-300 p-3 outline-none"
                  />
                </div>
                <img
                  className="w-full h-[250px] object-cover mt-4"
                  src="/images/service7.jpeg"
                />
              </div>

              <div className="w-full p-3 bg-white flex flex-col items-center gap-3">
                <p className="font-bold">Image 2</p>
                <div>
                  <label htmlFor="mission_img">Change image</label>
                  <input
                    type="file"
                    id="mission_img"
                    className="w-full border border-gray-300 p-3 outline-none"
                  />
                </div>
                <img
                  className="w-full h-[250px] object-cover mt-4"
                  src="/images/service3.jpeg"
                />
              </div>

              <div className="w-full p-3 bg-white flex flex-col items-center gap-3">
                <p className="font-bold">Image 3</p>
                <div>
                  <label htmlFor="mission_img">Change image</label>
                  <input
                    type="file"
                    id="mission_img"
                    className="w-full border border-gray-300 p-3 outline-none"
                  />
                </div>
                <img
                  className="w-full h-[250px] object-cover mt-4"
                  src="/images/service9.jpeg"
                />
              </div>

              <div className="w-full p-3 bg-white flex flex-col items-center gap-3">
                <p className="font-bold">Image 4</p>
                <div>
                  <label htmlFor="mission_img">Change image</label>
                  <input
                    type="file"
                    id="mission_img"
                    className="w-full border border-gray-300 p-3 outline-none"
                  />
                </div>
                <img className="w-full h-[250px] object-cover mt-4" src="" />
              </div>

              <div className="w-full p-3 bg-white flex flex-col items-center gap-3">
                <p className="font-bold">Image 5</p>
                <div>
                  <label htmlFor="mission_img">Change image</label>
                  <input
                    type="file"
                    id="mission_img"
                    className="w-full border border-gray-300 p-3 outline-none"
                  />
                </div>
                <img className="w-full h-[250px] object-cover mt-4" src="" />
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
      </div>
    </div>
  );
};

export default ServicepageAdmin;
