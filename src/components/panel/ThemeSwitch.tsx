'use client';

import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "next-themes";
import { useEffect } from "react";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();

//  ;   const toggleTheme = () => {
//       setTheme(theme === "light" ? "dark" : "light");
//     }
useEffect(() => {
  setTheme("dark")
},[])

  return null
};
 export default ThemeSwitch;