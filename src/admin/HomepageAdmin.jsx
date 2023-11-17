import { useQueryDoc } from "../utils/useQueryDoc";
import { useStorageFiles } from "../utils/useStorageFiles";
import ContactForm from "./components/ContactForm";
import Sec2 from "./components/Sec2";
import Sec3 from "./components/Sec3";
import Sec4 from "./components/Sec4";

const HomepageAdmin = () => {
  const { status, data } = useQueryDoc("homepage");

  const { files, loading } = useStorageFiles("images/");

  return (
    <div className="w-full flex flex-col gap-6">
      <p className="text-[.95rem] my-4 text-gray-500 text-center">
        NOTE: Do not forget to click the save button after editing any section
        content
      </p>

      <div className="w-full flex-col gap-3 min-h-[200px] border-2 border-gray-300 p-3 md:p-5">
        <h1 className="font-medium text-[1.5rem]">Contact information:</h1>
        {status === "loading" ? "Loading..." : <ContactForm data={data} />}
      </div>

      <p className="text-[.95rem] my-4 text-gray-500 text-center">
        NOTE: Do not forget to click the save button after editing any section
        content
      </p>

      <div className="w-full flex-col gap-3 min-h-[200px] border-2 border-gray-300 p-3 md:p-5">
        <h1 className="font-medium text-[1.5rem]">Homepage Content:</h1>
        {status === "loading" ? (
          "Loading..."
        ) : (
          <>
            <Sec2 data={data} files={files} loading={loading} />

            <Sec3 data={data} />

            <Sec4 data={data} files={files} loading={loading} />
          </>
        )}
      </div>
    </div>
  );
};

export default HomepageAdmin;
