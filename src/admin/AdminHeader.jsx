import { useAppContext } from "../contexts/AppContext";

const AdminHeader = () => {
  const { loading, logout, adminCurrent, setAdminCurrent } = useAppContext();

  return (
    <div className="w-full font-mont">
      <div className="w-full flex md:flex-row flex-col-reverse justify-between items-center bg-gray-100 px-3 md:px-[8%] py-5">
        <h1 className="text-[1.25rem] font-bold">Lonacare Admin Dashboard</h1>
        <button
          disabled={loading}
          onClick={() => logout()}
          className={` min-w-fit bg-[#912656] hover:bg-[#912656]/80 px-5 md:px-8 py-2 md:py-3 md:mt-3 rounded-sm text-white font-medium transition-all duration-300`}
        >
          {loading ? "Processing" : "Logout"}
        </button>{" "}
      </div>

      <div className="mt-10 px-3 md:px-[100px] flex flex-col gap-5">
        <h1 className="text-[1.5rem] font-medium text-center">
          Content Management System
        </h1>
        <div className="w-full md:w-[500px] bg-[#912656]/30 rounded-lg flex font-medium mx-auto">
          <div
            onClick={() => setAdminCurrent("home")}
            className={`w-full border-r border-[#912656] text-center cursor-pointer hover:bg-[#912656] hover:text-white px-3 py-2 rounded-l-lg ${
              adminCurrent === "home" && "bg-[#912656] text-white"
            }`}
          >
            Homepage
          </div>
          <div
            onClick={() => setAdminCurrent("about")}
            className={`w-full border-r border-[#912656] text-center cursor-pointer hover:bg-[#912656] hover:text-white px-3 py-2 ${
              adminCurrent === "about" && "bg-[#912656] text-white"
            }`}
          >
            About
          </div>
          <div
            onClick={() => setAdminCurrent("service")}
            className={`w-full text-center cursor-pointer hover:bg-[#912656] hover:text-white px-3 py-2 rounded-r-lg ${
              adminCurrent === "service" && "bg-[#912656] text-white"
            }`}
          >
            Service
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
