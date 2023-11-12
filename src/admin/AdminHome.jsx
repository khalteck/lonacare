import { useAppContext } from "../contexts/AppContext";
import AdminHeader from "./AdminHeader";
import HomepageAdmin from "./HomepageAdmin";

const AdminHome = () => {
  const { adminCurrent } = useAppContext();
  return (
    <div className="bg-white text-black/80 font-mont">
      <AdminHeader />

      <div className="w-full px-3 md:px-[8%] mt-6">
        <div className=" min-h-[200px] border-2 border-gray-300 p-3">
          {adminCurrent === "home" ? <HomepageAdmin /> : ""}
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
