import { Routes, Route } from "react-router-dom";
import "./index.css";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader";
// import { useAppContext } from "./contexts/AppContext";

const Homepage = lazy(() => import("./pages/Homepage"));
// const Register = lazy(() => import("./pages/Register"));
// const Login = lazy(() => import("./pages/Login"));
// const Dashboard = lazy(() => import("./pages/Dashboard"));
// const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));

function App() {
  // const { userDetails } = useAppContext();
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} /> */}

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
