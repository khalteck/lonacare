import { useAppContext } from "../contexts/AppContext";
import AboutpageAdmin from "./AboutpageAdmin";
import AdminHeader from "./AdminHeader";
import HomepageAdmin from "./HomepageAdmin";
import ServicepageAdmin from "./ServicepageAdmin";
import Toast from "./components/Toast";

const AdminDashboard = () => {
  const { adminCurrent, saved } = useAppContext();
  return (
    <div className="bg-white text-black/80 font-mont">
      <AdminHeader />

      {saved && <Toast />}

      <div className="w-full px-3 md:px-[8%] mt-6 pb-14">
        <div className="">
          {adminCurrent === "home" ? (
            <HomepageAdmin />
          ) : adminCurrent === "about" ? (
            <AboutpageAdmin />
          ) : (
            <ServicepageAdmin />
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
