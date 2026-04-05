const ThemeToggle = ({ isDark, onToggle, className = "" }) => {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      aria-pressed={isDark}
      className={`inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/18 bg-white/[0.08] text-ink shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_8px_24px_rgba(0,0,0,0.16)] backdrop-blur-xl transition-[border-color,background-color,box-shadow] duration-300 hover:border-white/26 hover:bg-white/[0.12] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_10px_28px_rgba(0,0,0,0.2)] ${className}`}
    >
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full transition-transform duration-300 hover:scale-105">
        <span className="relative block h-5 w-5 overflow-hidden">
          <span
            className={`absolute inset-0 rounded-full border border-current transition-all duration-500 ${
            isDark ? "scale-100 opacity-100" : "scale-50 opacity-0"
            }`}
          />
          <span
            className={`absolute inset-[2px] rounded-full bg-current transition-all duration-500 ${
              isDark ? "translate-x-2 scale-50 opacity-90" : "translate-x-0 scale-100 opacity-100"
            }`}
          />
        </span>
      </span>
    </button>
  );
};

export default ThemeToggle;
