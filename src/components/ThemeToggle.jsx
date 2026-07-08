import React, { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggle = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");

    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  const toggleTheme = () => {
    if (dark) {
      document.documentElement.classList.remove("dark");

      localStorage.setItem("theme", "light");

      setDark(false);
    } else {
      document.documentElement.classList.add("dark");

      localStorage.setItem("theme", "dark");

      setDark(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="
        p-3
        rounded-full
        bg-gray-800
        text-white
        hover:scale-110
        transition
      "
    >
      {dark ? <FaSun /> : <FaMoon />}
    </button>
  );
};

export default ThemeToggle;