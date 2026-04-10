const SunIcon = ({ isVisible }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`absolute h-[1.05rem] w-[1.05rem] transition-all duration-500 ${
        isVisible
          ? "scale-100 rotate-0 opacity-100"
          : "scale-75 rotate-45 opacity-0"
      }`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="3.9" />
      <path d="M12 2.75v2.1M12 19.15v2.1M21.25 12h-2.1M4.85 12h-2.1M18.54 5.46l-1.49 1.49M6.95 17.05l-1.49 1.49M18.54 18.54l-1.49-1.49M6.95 6.95 5.46 5.46" />
    </svg>
  );
};

const MoonIcon = ({ isVisible }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`absolute h-4 w-4 transition-all duration-500 ${
        isVisible
          ? "scale-100 rotate-0 opacity-100"
          : "scale-75 -rotate-45 opacity-0"
      }`}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.2 14.2A8.7 8.7 0 0 1 9.8 3.8a.55.55 0 0 0-.77-.65A10 10 0 1 0 20.85 15a.55.55 0 0 0-.65-.8Z" />
    </svg>
  );
};

const ThemeToggle = ({ theme, onToggle, className = "" }) => {
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={onToggle}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      aria-pressed={isDark}
      className={`group inline-flex h-11 items-center rounded-full border border-zinc-200 bg-white/85 px-1.5 text-zinc-900 backdrop-blur-xl transition-[background-color,border-color,color] duration-300 hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-white/[0.04] dark:text-zinc-100 dark:hover:border-zinc-600 dark:hover:bg-white/[0.08] ${className}`}
    >
      <span className="inline-flex items-center gap-2 rounded-full px-2.5">
        <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-full border border-zinc-200 bg-zinc-50 text-zinc-900 transition-colors duration-300 dark:border-zinc-700 dark:bg-white/[0.05] dark:text-zinc-100">
          <SunIcon isVisible={!isDark} />
          <MoonIcon isVisible={isDark} />
        </span>
        <span className="inline-flex w-[3.9rem] justify-start pr-1 text-[0.68rem] font-medium uppercase tracking-[0.22em] text-zinc-600 transition-colors duration-300 group-hover:text-zinc-900 dark:text-zinc-400 dark:group-hover:text-zinc-100">
          {isDark ? "Dark" : "Light"}
        </span>
      </span>
    </button>
  );
};

export default ThemeToggle;
