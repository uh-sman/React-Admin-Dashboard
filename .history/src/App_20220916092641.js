import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

// import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";
// import {
// Ecommerce,
// Orders,
// Calendar,
// Employees,
// Stacked,
// Pyramid,
// Customers,
// Kanban,
// Line,
// Area,
// Bar,
// Pie,
// Financial,
// ColorPicker,
// ColorMapping,
// Editor,
// } from "./pages";
import "./App.css";

// import { useStateContext } from "./contexts/ContextProvider";

const App = () => {
  // const {
  // setCurrentColor,
  // setCurrentMode,
  // currentMode,
  // activeMenu,
  // currentColor,
  // themeSettings,
  // setThemeSettings,
  // } = useStateContext();

  // useEffect(() => {
  //   const currentThemeColor = localStorage.getItem("colorMode");
  //   const currentThemeMode = localStorage.getItem("themeMode");
  //   if (currentThemeColor && currentThemeMode) {
  //     setCurrentColor(currentThemeColor);
  //     setCurrentMode(currentThemeMode);
  //   }
  // }, []);

  return (
    <div>
      <BrowserRouter>
      <div className="flex relative dark:bg-main-dark-bg">
        <div className="fixed right-4 bottom-4" style={{ z-index:"1000", }}>
          <TooltipComponent content="settings" position="Top">
            <button>
              <FiSettings/>
            </button>

          </TooltipComponent>

        </div>
      </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
