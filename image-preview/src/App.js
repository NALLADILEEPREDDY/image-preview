import React from "react";
import { useSelector } from "react-redux";
import "./App.scss";
import DataComponent from "./components/InputForm/InputDataForm";
import PreviewComponent from "./components/PreviewCard/PreviewComponent";

export const ThemeContext = React.createContext();
function App() {
  const theme = useSelector((state) => state.mainStore.theme);
  return (
    <div>
      <div className="previewApp">
        <div className="flexItem"> 
          <DataComponent />
        </div>
        <div className="flexItem">
          <ThemeContext.Provider value={theme}>
            <PreviewComponent />
          </ThemeContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default App;
