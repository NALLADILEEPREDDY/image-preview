import React from "react";
import FileUploadComponent from "./FileUploadComponent";
import Search from "./Search";
import Suggestions from "./Suggestions";
import Themes from "./Themes";

export default function DataComponent() {
  return (
    <div className="dataform">
      <div>
        <Themes/>
      </div>
      <div>
        <Search />
      </div>
      <div>
          <Suggestions/>
      </div>
      <div>
        <FileUploadComponent />
      </div>
    </div>
  );
}
