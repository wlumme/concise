const SUN = "M15 4a8 8 0 100 8 8 8 0 000-8";
const MOON = "M15 4a8 8 0 100 8 5 5 0 110-8";
const BUTTON = document.getElementById("darkmode-button");
const ICON = document.getElementById("darkmode-icon");
const USING_DARKMODE = localStorage.getItem("darkmode");

function setDark() {
    ICON.setAttribute("d", SUN);
    BUTTON.setAttribute("title", "Light mode")
}

function setLight() {
    ICON.setAttribute("d", MOON);
    BUTTON.setAttribute("title", "Dark mode")
}

function toggleDarkMode() {
    darkMode = !darkMode;
    localStorage.setItem("darkmode", darkMode);
    document.body.classList.toggle("darkmode");
    if (darkMode) {
        setDark();
    } else {
        setLight();
    }
}

let darkMode = false;
if (USING_DARKMODE === "true") {
    darkMode = true;
} else if (USING_DARKMODE === "false") {
    darkMode = false;
} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    darkMode = true;
}

if (darkMode) {
    document.body.classList.add("darkmode");
    setDark();
} else {
    setLight();
}
