import { useTheme } from "../../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-surface dark:bg-gray-800 text-text-sub hover:text-primary transition-all flex items-center justify-center cursor-pointer border border-transparent hover:border-primary/20"
      aria-label="Toggle Theme"
    >
      <span className="material-symbols-outlined text-[24px]">
        {theme === "light" ? "dark_mode" : "light_mode"}
      </span>
    </button>
  );
};

export default ThemeToggle;
