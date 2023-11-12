/* eslint-disable react-hooks/exhaustive-deps */
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { auth, db } from "../firebase/firebase-config";
import { doc, setDoc } from "firebase/firestore";

export const AppContext = createContext();

// eslint-disable-next-line react/prop-types
const AppContextProvider = ({ children }) => {
  const location = useLocation();
  let currentPage = location.pathname;

  const navigate = useNavigate();

  const [searchOpen, setSearchOpen] = useState(false);

  const [loading, setLoading] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);

  const [sendError, setSendError] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  async function register() {
    try {
      setLoading(true);
      const { user } = await createUserWithEmailAndPassword(
        auth,
        formData?.email,
        formData?.password
      );

      const userRef = doc(db, "admins", user.uid);
      await setDoc(userRef, { ...formData, uid: user?.uid, role: "admin" });

      if (user) {
        console.log("user", user);
        setTimeout(() => {
          setFormData({
            email: "",
            password: "",
          });
        }, 3000);
      }
    } catch (error) {
      console.error("Error:", error);
      error?.message === "Firebase: Error (auth/email-already-in-use)." &&
        setSendError("An error occured");
    } finally {
      setLoading(false);
    }
  }

  async function login() {
    try {
      setLoading(true);
      const { user } = await signInWithEmailAndPassword(
        auth,
        formData?.email,
        formData?.password
      );

      if (user?.uid) {
        setTimeout(() => {
          setFormData({
            email: "",
            password: "",
          });
        }, 3000);
        navigate("/admin");
      }
    } catch (error) {
      console.error("Error:", error);
      error?.message === "Firebase: Error (auth/invalid-login-credentials)." &&
        setSendError("Invalid Login Credentials");
    } finally {
      setLoading(false);
    }
  }

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("userData")) || null
  );

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user);
        localStorage.setItem("userData", JSON.stringify(user));
      } else {
        setCurrentUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  async function logout() {
    try {
      setLoading(true);
      await auth.signOut();
      localStorage.removeItem("userData");
      navigate("/");
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  }

  const [adminCurrent, setAdminCurrent] = useState("home");

  return (
    <AppContext.Provider
      value={{
        currentPage,
        searchOpen,
        setSearchOpen,
        loading,
        isValidEmail,
        sendError,
        setIsValidEmail,
        register,
        setSendError,
        setFormData,
        formData,
        login,
        logout,
        currentUser,
        setAdminCurrent,
        adminCurrent,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => {
  return useContext(AppContext);
};

export default AppContextProvider;
