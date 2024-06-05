import "./style.css";
import toggleMenu from "./scripts/menu";

const content = document.getElementById("content");

function navigate(pageId) {
    const pages = document.querySelectorAll(".page")
    pages.forEach(page => {
        page.classList.add('hidden');
    })

    document.getElementById(pageId).classList.remove('hidden');
}

window.navigate = navigate;
window.toggleMenu = toggleMenu;