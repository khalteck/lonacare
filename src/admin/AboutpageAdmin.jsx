import About1 from "./components/About1";
import About2 from "./components/About2";

const AboutpageAdmin = () => {
  return (
    <div className="w-full flex flex-col gap-6">
      <p className="text-[.95rem] my-4 text-gray-500 text-center">
        NOTE: Do not forget to click the save button after editing any section
        content
      </p>

      <div className="w-full flex-col gap-3 min-h-[200px] border-2 border-gray-300 p-3 md:p-5">
        <h1 className="font-medium text-[1.5rem]">About Page Content:</h1>
        <About1 />

        <About2 />
      </div>
    </div>
  );
};

export default AboutpageAdmin;
