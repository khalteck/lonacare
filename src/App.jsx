import { Routes, Route } from "react-router-dom";
import "./index.css";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader";
// import { useAppContext } from "./contexts/AppContext";

const Homepage = lazy(() => import("./pages/Homepage"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
// const Dashboard = lazy(() => import("./pages/Dashboard"));
// const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));

function App() {
  // const { userDetails } = useAppContext();
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* {userDetails?.email ? (
          <>
            {userDetails?.role === "admin" ? (
              <Route path="/dashboard" element={<AdminDashboard />} />
            ) : (
              <Route path="/dashboard" element={<Dashboard />} />
            )}
          </>
        ) : (
          <Route path="/dashboard" element={<Login />} />
        )} */}
      </Routes>
    </Suspense>
  );
}

export default App;
