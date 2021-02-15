import React from "react";
import FileUploadComponent from "./FileUpload/FileUploadComponent";
import Search from "./Search/Search";
import Suggestions from "./Search/Suggestions";
import Themes from "./Theme/Themes";
import "./inputForm.scss";

export default function DataComponent() {
  return (
    <div className="inputForm">
      <div className="inputFormItem">
        <Themes />
      </div>
      <div className="inputFormItem">
        <Search />
      </div>
      <div  className="inputFormItem">
        <Suggestions />
      </div>
      <div className="inputFormItem">
        <FileUploadComponent />
      </div>
    </div>
  );
}
