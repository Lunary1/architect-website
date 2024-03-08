import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useState } from "react";
import { db, storage } from "../firebase/config";
import { v4 as uuidv4 } from "uuid";
import { addDoc, collection } from "firebase/firestore";

const useStorage = () => {
  const [progress, setProgress] = useState(null);
  const [error, setError] = useState(null);

  const startUpload = (files, projectName) => {
    if (!files) {
      return;
    }

    const fileId = uuidv4();
    const formatFile = files.type.split("/")[0];
    console.log(formatFile);
    const storageRef = ref(storage, `images/${fileId}.${formatFile}`);

    const uploadTask = uploadBytesResumable(storageRef, files);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        setProgress(progress);
      },
      (error) => {
        setError(error);
      },
      async () => {
        const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);
        setProgress(progress);
        // store data into firestore
        await addDoc(collection(db, "images"), {
          projectName: projectName,
          thumbnailUrl: { downloadUrl },
          createdAt: new Date(),
          imageUrlArray: [downloadUrl],
        });
      }
    );
  };

  return { progress, error, startUpload };
};

export default useStorage;
