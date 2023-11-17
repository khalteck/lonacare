/* eslint-disable react-hooks/exhaustive-deps */
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { useState, useEffect } from "react";
import { storage } from "../firebase/firebase-config";
import { useAppContext } from "../contexts/AppContext";

export function useStorageFiles(path) {
  const { savedImage } = useAppContext();
  const storageRef = ref(storage, path);
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const result = await listAll(storageRef);
        const urls = await Promise.all(
          result.items.map(async (itemRef) => {
            return getDownloadURL(itemRef);
          })
        );
        setFiles(urls);
      } catch (error) {
        console.error("Error fetching files:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFiles();
  }, [savedImage]);

  return { files, loading };
}
