import { useEffect, useState, type JSX } from "react";
import { FaMoon } from "react-icons/fa";

const LOCAL_KEY = "dark_mode";

function NavBar(): JSX.Element {
  const getInitialDarkMode = () => {
    try {
      const stored = localStorage.getItem(LOCAL_KEY);
      if (stored !== null) return stored === "true"; // ✅ respect saved value

      return document.documentElement.classList.contains("dark");
    } catch (error) {
      console.log("Could not access localStorage for dark mode:", error);
      return document.documentElement.classList.contains("dark");
    }
  };
  const [darkMode, setDarkMode] = useState<boolean>(getInitialDarkMode);

  // Apply dark mode class to HTML element when darkMode changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem(LOCAL_KEY, String(darkMode));
  }, [darkMode]);

  return (
    <div className="h-16 bg-white p-4 text-lg text-black shadow-md dark:bg-blue-900 dark:text-white">
      <div className="m-auto flex items-center justify-between md:max-w-[1200px]">
        <h1 className="font-extrabold">Where in the world?</h1>
        <button
          className="flex cursor-pointer items-center justify-center space-x-2 font-semibold"
          onClick={() => setDarkMode((prev) => !prev)}
        >
          <span>
            <FaMoon />
          </span>
          <span> Dark Mode</span>
        </button>
      </div>
    </div>
  );
}

export default NavBar;
