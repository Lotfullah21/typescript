type Theme = "light" | "dark";

function setTheme(theme: Theme) {
	if (theme === "dark") {
		return "dark theme";
	} else if (theme === "light") {
		return "light theme";
	}
}

setTheme("dark");
