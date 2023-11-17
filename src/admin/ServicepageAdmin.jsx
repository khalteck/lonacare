import { useAppContext } from "../contexts/AppContext";
import { useStorageFiles } from "../utils/useStorageFiles";
import ImageHandler from "./components/ImageHandler";

const ServicepageAdmin = () => {
  const { files, loading } = useStorageFiles("images/");

  const {
    saveImageToStorage,
    savingImage,
    savedImage,
    imagePreview,
    setImagePreview,
  } = useAppContext();

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
                <ImageHandler
                  files={files}
                  setImagePreview={setImagePreview}
                  saveImageToStorage={saveImageToStorage}
                  imagePreview={imagePreview}
                  savedImage={savedImage}
                  savingImage={savingImage}
                  loading={loading}
                  parentId={"service_image_one"}
                  imageId={"service_img_one"}
                />
              </div>

              <div className="w-full p-3 bg-white flex flex-col items-center gap-3">
                <p className="font-bold">Image 2</p>
                <ImageHandler
                  files={files}
                  setImagePreview={setImagePreview}
                  saveImageToStorage={saveImageToStorage}
                  imagePreview={imagePreview}
                  savedImage={savedImage}
                  savingImage={savingImage}
                  loading={loading}
                  parentId={"service_image_two"}
                  imageId={"service_img_two"}
                />
              </div>

              <div className="w-full p-3 bg-white flex flex-col items-center gap-3">
                <p className="font-bold">Image 3</p>
                <ImageHandler
                  files={files}
                  setImagePreview={setImagePreview}
                  saveImageToStorage={saveImageToStorage}
                  imagePreview={imagePreview}
                  savedImage={savedImage}
                  savingImage={savingImage}
                  loading={loading}
                  parentId={"service_image_three"}
                  imageId={"service_img_three"}
                />
              </div>

              <div className="w-full p-3 bg-white flex flex-col items-center gap-3">
                <p className="font-bold">Image 4</p>
                <ImageHandler
                  files={files}
                  setImagePreview={setImagePreview}
                  saveImageToStorage={saveImageToStorage}
                  imagePreview={imagePreview}
                  savedImage={savedImage}
                  savingImage={savingImage}
                  loading={loading}
                  parentId={"service_image_four"}
                  imageId={"service_img_four"}
                />
              </div>

              <div className="w-full p-3 bg-white flex flex-col items-center gap-3">
                <p className="font-bold">Image 5</p>
                <ImageHandler
                  files={files}
                  setImagePreview={setImagePreview}
                  saveImageToStorage={saveImageToStorage}
                  imagePreview={imagePreview}
                  savedImage={savedImage}
                  savingImage={savingImage}
                  loading={loading}
                  parentId={"service_image_five"}
                  imageId={"service_img_five"}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ServicepageAdmin;
