/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { useAppContext } from "../../contexts/AppContext";

const About1 = ({ data, files, loading }) => {
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
    about_content_1: data?.about_content?.about_content_1 || "",
    about_content_2: data?.about_content?.about_content_2 || "",
    about_content_3: data?.about_content?.about_content_3 || "",
    about_exp: data?.about_content?.about_exp || "",
    team_of_1: data?.about_content?.team_of_1 || "",
    team_of_2: data?.about_content?.team_of_2 || "",
    team_of_3: data?.about_content?.team_of_3 || "",
    team_of_4: data?.about_content?.team_of_4 || "",
    team_of_5: data?.about_content?.team_of_5 || "",
    box_title_1: data?.about_content?.box_title_1 || "",
    box_title_2: data?.about_content?.box_title_2 || "",
    box_title_3: data?.about_content?.box_title_3 || "",
    box_title_4: data?.about_content?.box_title_4 || "",
    box_content_1: data?.about_content?.box_content_1 || "",
    box_content_2: data?.about_content?.box_content_2 || "",
    box_content_3: data?.about_content?.box_content_3 || "",
    box_content_4: data?.about_content?.box_content_4 || "",
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
    saveEdit(info, "about_content", "aboutpage");
  }

  //================to handle image
  const aboutImage = files?.filter((x) => x?.includes("about_image_"))[0];

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
    saveImageToStorage(file, "about_image");
  }

  return (
    <div className="w-full border-t border-[#912656] bg-gray-100 px-3 py-10">
      <h2 className="font-medium text-gray-600 mb-6 text-center">Section 2</h2>
      <form className="w-full ">
        <div className="w-full flex gap-10 flex-wrap justify-center">
          <div className="w-[45%]">
            <div className="mt-4">
              <textarea
                className="w-full min-h-[150px] border border-gray-300 p-3 outline-non"
                id="about_content_1"
                value={info?.about_content_1}
                onChange={handleChange}
              />
            </div>
            <div className="mt-4">
              <textarea
                className="w-full min-h-[150px] border border-gray-300 p-3 outline-non"
                id="about_content_2"
                value={info?.about_content_2}
                onChange={handleChange}
              />
            </div>
            <div className="mt-4">
              <textarea
                className="w-full min-h-[150px] border border-gray-300 p-3 outline-non"
                id="about_content_3"
                value={info?.about_content_3}
                onChange={handleChange}
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
                      src={aboutImage}
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
                  NOTE: Do not forget to click "save image" after selecting a
                  new image
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
                  <img className="w-full h-auto mt-4" src={aboutImage} />
                )}
              </>
            )}
          </div>
        </div>

        <div className="mt-4">
          <h2 className="font-bold text-[1.25rem]">
            Previous Experience and Education
          </h2>
          <textarea
            className="w-full min-h-[200px] border border-gray-300 p-3 outline-non"
            id="about_exp"
            value={info?.about_exp}
            onChange={handleChange}
          />
        </div>

        <div className="mt-4 flex flex-col gap-2">
          <h2 className="font-bold text-[1.25rem]">We have a team of</h2>
          <input
            type="text"
            id="team_of_1"
            className="w-full border border-gray-300 p-3 outline-none"
            placeholder="something"
            value={info?.team_of_1}
            onChange={handleChange}
          />
          <input
            type="text"
            id="team_of_2"
            className="w-full border border-gray-300 p-3 outline-none"
            placeholder="something"
            value={info?.team_of_2}
            onChange={handleChange}
          />
          <input
            type="text"
            id="team_of_3"
            className="w-full border border-gray-300 p-3 outline-none"
            placeholder="something"
            value={info?.team_of_3}
            onChange={handleChange}
          />
          <input
            type="text"
            id="team_of_4"
            className="w-full border border-gray-300 p-3 outline-none"
            placeholder="something"
            value={info?.team_of_4}
            onChange={handleChange}
          />
          <input
            type="text"
            id="team_of_5"
            className="w-full border border-gray-300 p-3 outline-none"
            placeholder="something"
            value={info?.team_of_5}
            onChange={handleChange}
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
                value={info?.box_title_1}
                onChange={handleChange}
              />
              <textarea
                className="w-full min-h-[150px] border border-gray-300 p-3 outline-none"
                id="box_content_1"
                value={info?.box_content_1}
                onChange={handleChange}
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <input
                type="text"
                id="box_title_2"
                className="w-full border border-gray-300 p-3 outline-none"
                placeholder="something"
                value={info?.box_title_2}
                onChange={handleChange}
              />
              <textarea
                className="w-full min-h-[150px] border border-gray-300 p-3 outline-none"
                id="box_content_2"
                value={info?.box_content_2}
                onChange={handleChange}
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <input
                type="text"
                id="box_title_3"
                className="w-full border border-gray-300 p-3 outline-none"
                placeholder="something"
                value={info?.box_title_3}
                onChange={handleChange}
              />
              <textarea
                className="w-full min-h-[150px] border border-gray-300 p-3 outline-none"
                id="box_content_3"
                value={info?.box_content_3}
                onChange={handleChange}
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <input
                type="text"
                id="box_title_4"
                className="w-full border border-gray-300 p-3 outline-none"
                placeholder="something"
                value={info?.box_title_4}
                onChange={handleChange}
              />
              <textarea
                className="w-full min-h-[150px] border border-gray-300 p-3 outline-none"
                id="box_content_4"
                value={info?.box_content_4}
                onChange={handleChange}
              />
            </div>
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

export default About1;
