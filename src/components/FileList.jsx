import React from "react";
import "./FileList.css";

function FileList({
  files,
  selectedFiles,
  setSelectedFiles,
  onSelectAll,
  onDownloadSelected,
}) {
  const handleSelectFile = (file) => {
    const updatedSelectedFiles = [...selectedFiles];
    if (updatedSelectedFiles.includes(file)) {
      updatedSelectedFiles.splice(updatedSelectedFiles.indexOf(file), 1);
    } else {
      updatedSelectedFiles.push(file);
    }
    setSelectedFiles(updatedSelectedFiles);
  };

  const formatStatus = (status) => {
    switch (status) {
      case "available":
        return "Available";
      case "scheduled":
        return "Scheduled";
      default:
        return "";
    }
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <td>
            <input
              type="checkbox"
              checked={selectedFiles.length === files.length}
              onChange={onSelectAll}
            />
          </td>
          <td colSpan="4">
            <button type="button" onClick={onDownloadSelected}>
              {selectedFiles.length === 0
                ? "None selected"
                : `Download Selected (${selectedFiles.length})`}
            </button>
          </td>
        </tr>
        <tr>
          <th>Select</th>
          <th>Name</th>
          <th>Device</th>
          <th>Path</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {files.map((file, index) => (
          <tr
            key={index}
            className={selectedFiles.includes(file) ? "selected" : ""}
          >
            <td>
              <input
                type="checkbox"
                checked={selectedFiles.includes(file)}
                onChange={() => handleSelectFile(file)}
              />
            </td>
            <td>{file.name}</td>
            <td>{file.device}</td>
            <td>{file.path}</td>
            <td>{formatStatus(file.status)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default FileList;
