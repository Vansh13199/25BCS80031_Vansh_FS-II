import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

function Header() {
  const { currentTheme, setCurrentTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: currentTheme === "light" ? "white" : "black",
        color: currentTheme === "light" ? "black" : "white",
        minHeight: "100vh" }}
    >
      <h2>Theme: {currentTheme}</h2>

      <button
        onClick={() =>
          setCurrentTheme(currentTheme === "light" ? "dark" : "light")
        }
      >
        Toggle Theme
      </button>
    </div>
  );
}

export default Header;