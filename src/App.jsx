import { Routes, Route } from "react-router-dom";
import "./index.css";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader";
import { useAppContext } from "./contexts/AppContext";

const Homepage = lazy(() => import("./pages/Homepage"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Service = lazy(() => import("./pages/Service"));
const ServiceDetails = lazy(() => import("./pages/ServiceDetails"));
// const Construction = lazy(() => import("./pages/Construction"));

const AdminLogin = lazy(() => import("./admin/AdminLogin"));
const AdminDashboard = lazy(() => import("./admin/AdminDashboard"));

function App() {
  const { currentUser } = useAppContext();
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/service/:title" element={<ServiceDetails />} />
        <Route path="/contact" element={<Contact />} />

        {/* Admin routes */}
        <Route
          path="/admin"
          element={currentUser ? <AdminDashboard /> : <AdminLogin />}
        />
        {/* <Route path="/admin-dashboard" element={<AdminHome />} /> */}
      </Routes>
    </Suspense>
  );
}

export default App;
