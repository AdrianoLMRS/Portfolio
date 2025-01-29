import toggleTheme from "@utils/toggleTheme";

export default function ThemeBtn() {
    return (
        <button onClick={toggleTheme} className="theme-btn">
            Toggle theme
        </button>
    );
}
