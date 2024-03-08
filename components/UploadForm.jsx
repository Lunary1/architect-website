import React, { useState } from "react";
import useStorage from "../hooks/useStorage";

function UploadForm() {
  const [files, setFiles] = useState(null);
  const { startUpload } = useStorage();
  const [projectName, setProjectName] = useState("");
  const [thumbnail, setThumbnail] = useState(null);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFiles(e.target.files[0]);
    }
  };

  const handleProjectChange = (e) => {
    if (e.target.value) {
      setProjectName(e.target.value);
    }
  };

  const handleThumbnailChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setThumbnail(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fileInput = document.getElementById("file-upload");
    const selectedFiles = fileInput.files;
    if (selectedFiles.length === 0) {
      alert("Please select at least one file to upload.");
      setFiles(null);
      return;
    } else {
      startUpload(files, projectName, thumbnail);
    }
  };

  return (
    <div className="h-screen font-sans text-gray-900 bg-gray-300 border-box">
      <div className="flex justify-center w-full mx-auto sm:max-w-lg">
        <div className="flex flex-col items-center w-full h-[35rem] my-20 bg-white sm:w-3/4 sm:rounded-lg sm:shadow-xl">
          <div className="mt-10 mb-10 text-center">
            <h2 className="text-2xl font-semibold mb-2">
              Upload nieuw project
            </h2>
            <p className="text-xs text-gray-500">File in jpg, jpeg of png</p>
          </div>
          <form
            action="#"
            className="w-4/5 h-[15rem] max-w-xs mb-10 bg-white bg-gray-100 rounded-lg shadow-inner"
            onSubmit={handleSubmit}
          >
            <input
              onChange={handleFileChange}
              type="file"
              id="file-upload"
              className="hidden"
              multiple
            />
            <label
              htmlFor="file-upload"
              className="z-20 flex flex-col-reverse items-center justify-center w-full h-[8rem] cursor-pointer"
            >
              <p className="z-10 text-xs font-light text-center text-gray-500">
                Drag & Drop your files here
              </p>
              <svg
                className="z-10 w-8 h-8 text-indigo-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"></path>
              </svg>
            </label>
            <div>
              <label className="text-xs text-gray-500" htmlFor="projectName">
                Project:
              </label>
              <input
                onChange={handleProjectChange}
                className="mt-2 rounded-lg border-none bg-gray-100 w-full"
                type="text"
              />
            </div>

            <button
              type="submit"
              id="submit"
              className="rounded-md px-3 py-1 my-4 bg-blue-700 hover:bg-blue-500 text-white focus:shadow-outline focus:outline-none"
            >
              Upload nu
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UploadForm;
