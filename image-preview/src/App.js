import React from "react";
import { useSelector } from "react-redux";
import "./App.scss";
import DataComponent from "./components/DataComponent";
import PreviewComponent from "./components/PreviewComponent";

export const ThemeContext = React.createContext();
function App() {
  const theme = useSelector((state) => state.mainStore.theme);
  return (
    <div>
      <div className="page-wrapper">
        <div className="item"> 
          <DataComponent />
        </div>
        <div className="item">
          <ThemeContext.Provider value={theme}>
            <PreviewComponent />
          </ThemeContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default App;
