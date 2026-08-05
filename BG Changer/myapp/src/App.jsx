import React from "react";
import { ThemeContext } from "./context/ThemeContext";
import { useState } from "react";
import Header from "./Header";
import { useContext } from "react";

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>

    <Header />

    </ThemeContext.Provider>
  );
}
export default App;