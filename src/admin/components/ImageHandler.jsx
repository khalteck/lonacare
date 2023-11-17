/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";

/* eslint-disable react/prop-types */
const ImageHandler = ({
  files,
  setImagePreview,
  saveImageToStorage,
  imagePreview,
  savedImage,
  savingImage,
  loading,
  parentId,
  imageId,
}) => {
  //================to handle image
  const imagex = files?.filter((x) => x?.includes(parentId))[0];

  const [file, setfile] = useState(null);

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
    setfile(null);
  }

  function handleSaveImage() {
    saveImageToStorage(file, parentId);
  }

  return (
    <div className="w-full" id={parentId}>
      <div>
        <label htmlFor={imageId}>Change image</label>

        <input
          type="file"
          id={imageId}
          className="w-full border border-gray-300 p-3 outline-none"
          onChange={handleImageChange}
        />
      </div>
      {imagePreview && file && (
        <>
          <div className="w-full flex gap-3 items-center flex-wrap mt-5">
            <div>
              <p className="font-bold">Old</p>
              <img
                src={imagex}
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
            <p className="bg-green-100 my-3 p-2">Image Saved successfully!</p>
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
            <>
              {imagex ? (
                <img
                  className="w-full h-[300px] object-cover mt-4"
                  src={imagex}
                />
              ) : (
                <div className="w-full h-[300px] border-gray-300 border flex justify-center items-center">
                  No image here yet..
                </div>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default ImageHandler;
