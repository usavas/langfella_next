"use client";

import { useState, useEffect } from "react";

type Props = {
  type?: "checkbox";
};

const DarkModeSetting = (props: Props) => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const getPreferredTheme = async () => {
      const theme = await fetch(
        "api/usersettings/id_onemsiz_simdilik/preferredTheme"
      );
      setDark((await theme.json()) === "dark");
      setDarkTheme(dark);
    };
    getPreferredTheme();
  }, []);

  return (
    <div className="flex flex-row py-4 justify-between">
      <span className=" text-sm font-medium text-gray-900 dark:text-gray-300">
        Dark Mode
      </span>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={dark}
          onChange={handleChange}
          className="sr-only peer"
        />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      </label>
    </div>
  );

  function handleChange(e: any) {
    const isDarkChecked: boolean = e.target.checked;
    setDark(!isDarkChecked);
    setDarkTheme(dark);
  }

  function setDarkTheme(dark: boolean) {
    document
      .getElementsByTagName("html")[0]
      .classList.add(dark ? "light" : "dark");
  }
};

export default DarkModeSetting;
