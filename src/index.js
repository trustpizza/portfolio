import "./style.css";
import toggleMenu from "./scripts/menu";
import navigate from "./scripts/navigation";

const content = document.getElementById("content");

window.navigate = navigate;
window.toggleMenu = toggleMenu;