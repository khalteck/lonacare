/* eslint-disable react-hooks/exhaustive-deps */
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { auth, db, storage } from "../firebase/firebase-config";
import { doc, setDoc, updateDoc } from "firebase/firestore";
import { deleteObject, listAll, ref, uploadBytes } from "firebase/storage";

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

  //============================================================================================ADMIN CONTENT MANAGEMENT
  //============================================================================================ADMIN CONTENT MANAGEMENT
  //============================================================================================ADMIN CONTENT MANAGEMENT

  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  async function saveEdit(data, field, docId) {
    try {
      setSaving(true);

      const docRef = doc(db, "cms", docId);
      await updateDoc(docRef, { [field]: data });
      setSaved(true);
      setTimeout(() => {
        setSaved(false);
      }, 3000);
    } catch (error) {
      console.log("Save error:", error);
    } finally {
      setSaving(false);
    }
  }

  const [imagePreview, setImagePreview] = useState("");

  const [savingImage, setSavingImage] = useState(false);
  const [savedImage, setSavedImage] = useState(false);

  async function saveImageToStorage(file, imageId) {
    try {
      setSavingImage(true);

      const imagesRef = ref(storage, "images");

      // List all items in the images folder
      const imagesList = await listAll(imagesRef);

      // Iterate through the items to find the image with the matching imageId in its name
      const deletePromises = imagesList.items
        .filter((item) => item.name.includes(`${imageId}_`))
        .map(async (item) => {
          await deleteObject(item); // Delete the image if it matches the pattern
        });

      // Wait for all deletion operations to complete
      await Promise.all(deletePromises);

      // Upload the new image
      const storageRef = ref(storage, "images/" + `${imageId}_${file.name}`);
      await uploadBytes(storageRef, file);

      setSavedImage(true);
      setTimeout(() => {
        setSavedImage(false);
        setImagePreview("");
      }, 3000);

      console.log("Image uploaded successfully!");
    } catch (error) {
      console.error("Error uploading image:", error);
      throw error;
    } finally {
      setSavingImage(false);
    }
  }

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
        saving,
        saveEdit,
        saved,
        saveImageToStorage,
        savingImage,
        savedImage,
        setImagePreview,
        imagePreview,
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
