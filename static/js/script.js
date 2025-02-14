document.addEventListener("DOMContentLoaded", function () {
    document.documentElement.setAttribute("data-theme", localStorage.getItem("theme") || "light");



});

let changeTheme = () => {
    let theme = document.documentElement.getAttribute("data-theme");
    if (theme === "dark") {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
    } else {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
    }
}

let themeToggler = document.getElementById("themeToggler");
themeToggler.addEventListener("click", changeTheme);