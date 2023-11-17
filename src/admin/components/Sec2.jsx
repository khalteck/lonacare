/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { useAppContext } from "../../contexts/AppContext";

/* eslint-disable react/prop-types */
const Sec2 = ({ data, files, loading }) => {
  const {
    saveEdit,
    saving,
    saved,
    saveImageToStorage,
    savingImage,
    savedImage,
    imagePreview,
    setImagePreview,
  } = useAppContext();

  const [info, setInfo] = useState({
    mission_1: data?.our_mission?.mission_1 || "",
    mission_2: data?.our_mission?.mission_2 || "",
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
    saveEdit(info, "our_mission", "homepage");
  }

  //================to handle image
  const ourMissionImage = files?.filter((x) => x?.includes("our_mission_"))[0];

  const [file, setfile] = useState({});

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setfile(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  function handleCancel() {
    setImagePreview("");
    setfile({});
  }

  function handleSaveImage() {
    saveImageToStorage(file, "our_mission");
  }

  return (
    <div className="w-full border-t border-[#912656] bg-gray-100 px-3 py-10">
      <h2 className="font-medium text-gray-600 mb-6 text-center">Section 2</h2>
      <form className="w-full flex gap-10 flex-wrap justify-center">
        <div className="w-[45%]">
          <h2 className="font-bold text-[1.25rem]">OUR MISSION</h2>
          <div className="mt-4">
            <textarea
              className="w-full min-h-[200px] border border-gray-300 p-3 outline-non"
              id="mission_1"
              onChange={handleChange}
              value={info?.mission_1}
            />
          </div>
          <div className="mt-4">
            <textarea
              className="w-full min-h-[200px] border border-gray-300 p-3 outline-non"
              id="mission_2"
              onChange={handleChange}
              value={info?.mission_2}
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
              onChange={handleImageChange}
            />
          </div>
          {imagePreview && (
            <>
              <div className="w-full flex gap-3 items-center flex-wrap mt-5">
                <div>
                  <p className="font-bold">Old</p>
                  <img
                    src={ourMissionImage}
                    alt="Preview"
                    className="w-[100px] h-[100px] object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold">New</p>
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-[100px] h-[100px] object-cover"
                  />
                </div>
              </div>
              <p className="text-[.85rem] my-4 text-gray-500 text-center">
                NOTE: Do not forget to click "save image" after selecting a new
                image
              </p>
              {savedImage && (
                <p className="bg-green-100 my-3 p-2">
                  Image Saved successfully!
                </p>
              )}

              <div className="w-full flex gap-3">
                <button
                  onClick={() => handleCancel()}
                  disabled={savingImage}
                  className="px-3 py-1 rounded-md bg-gray-300 text-black text-[.85rem]"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveImage}
                  disabled={savingImage}
                  className="px-3 py-1 rounded-md bg-[#912656] hover:bg-[#912656]/80 text-white text-[.85rem]"
                >
                  {savingImage ? "Uploading Image.." : "Save image"}
                </button>
              </div>
            </>
          )}
          {!imagePreview && (
            <>
              {loading ? (
                <p>Loading Image...</p>
              ) : (
                // <img className="w-full h-auto mt-4" src="/images/about.jpeg" />
                <img className="w-full h-auto mt-4" src={ourMissionImage} />
              )}
            </>
          )}
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

export default Sec2;
