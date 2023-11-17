/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { useAppContext } from "../../contexts/AppContext";
import ImageHandler from "./ImageHandler";

/* eslint-disable react/prop-types */
const Sec4 = ({ data, files, loading }) => {
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
    what_is_content_1: data?.what_is?.what_is_content_1 || "",
    what_is_content_2: data?.what_is?.what_is_content_2 || "",
    what_is_content_3: data?.what_is?.what_is_content_3 || "",
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
    saveEdit(info, "what_is", "homepage");
  }

  return (
    <div className="w-full border-t border-[#912656] bg-gray-100 px-3 py-10">
      <h2 className="font-medium text-gray-600 mb-6 text-center">Section 4</h2>
      <form className="w-full flex gap-10 flex-wrap justify-center">
        {/* to handle images */}
        <div className="w-[40%]">
          <ImageHandler
            files={files}
            setImagePreview={setImagePreview}
            saveImageToStorage={saveImageToStorage}
            imagePreview={imagePreview}
            savedImage={savedImage}
            savingImage={savingImage}
            loading={loading}
            parentId={"what_is"}
            imageId={"what_is_img"}
          />
        </div>

        <div className="w-[45%]">
          <h2 className="font-bold text-[1.25rem]">WHAT IS LONA CARE</h2>
          <div className="mt-4">
            <textarea
              className="w-full min-h-[150px] border border-gray-300 p-3 outline-non"
              id="what_is_content_1"
              onChange={handleChange}
              value={info?.what_is_content_1}
            />
          </div>
          <div className="mt-4">
            <textarea
              className="w-full min-h-[150px] border border-gray-300 p-3 outline-non"
              id="what_is_content_2"
              onChange={handleChange}
              value={info?.what_is_content_2}
            />
          </div>
          <div className="mt-4">
            <textarea
              className="w-full min-h-[150px] border border-gray-300 p-3 outline-non"
              id="what_is_content_3"
              onChange={handleChange}
              value={info?.what_is_content_3}
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

export default Sec4;
