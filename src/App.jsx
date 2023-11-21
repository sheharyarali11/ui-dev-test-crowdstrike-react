import React, { useState } from "react";
import FileList from "./components/FileList";
import "./App.css";

function App() {
  const [files] = useState([
    {
      name: "smss.exe",
      device: "Mario",
      path: "\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe",
      status: "scheduled",
    },
    {
      name: "netsh.exe",
      device: "Luigi",
      path: "\\Device\\HarddiskVolume2\\Windows\\System32\\netsh.exe",
      status: "available",
    },
    {
      name: "uxtheme.dll",
      device: "Peach",
      path: "\\Device\\HarddiskVolume1\\Windows\\System32\\uxtheme.dll",
      status: "available",
    },
    {
      name: "aries.sys",
      device: "Daisy",
      path: "\\Device\\HarddiskVolume1\\Windows\\System32\\aries.sys",
      status: "scheduled",
    },
    {
      name: "cryptbase.dll",
      device: "Yoshi",
      path: "\\Device\\HarddiskVolume1\\Windows\\System32\\cryptbase.dll",
      status: "scheduled",
    },
    {
      name: "7za.exe",
      device: "Toad",
      path: "\\Device\\HarddiskVolume1\\temp\\7za.exe",
      status: "scheduled",
    },
  ]);

  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleSelectAll = (event) => {
    if (event.target.checked) {
      setSelectedFiles(files);
    } else {
      setSelectedFiles([]);
    }
  };

  const handleDownloadSelected = () => {
    const selectedAvailableFilesPaths = selectedFiles
      .filter((file) => file.status === "available")
      .map((file) => `${file.device}: ${file.path}`);
    const selectedUnavailableFilesPaths = selectedFiles
      .filter((file) => file.status !== "available")
      .map((file) => `${file.device}: ${file.path}`);
    let alertMessage = ``;
    if (selectedAvailableFilesPaths.length > 0) {
      alertMessage += `Downloading the following files:\n\n${selectedAvailableFilesPaths.join(
        "\n"
      )} \n`;
    }
    if (selectedUnavailableFilesPaths.length > 0) {
      alertMessage += `Following files are scheduled and not available to donwload:\n\n${selectedUnavailableFilesPaths.join(
        "\n"
      )}`;
    }
    if (alertMessage === "") {
      alertMessage = `Please select the files first to be able to download`;
    }
    alert(alertMessage);
  };

  return (
    <div className="container">
      <h1>Download Files</h1>
      <FileList
        files={files}
        selectedFiles={selectedFiles}
        setSelectedFiles={setSelectedFiles}
        onSelectAll={handleSelectAll}
        onDownloadSelected={handleDownloadSelected}
      />
    </div>
  );
}

export default App;
