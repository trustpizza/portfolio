import "./style.css";

function setFavicon(image) {
    const headTitle = document.querySelector('head');
    const setFavicon = document.createElement('link');
    setFavicon.setAttribute('rel', 'shortcut icon');
    setFavicon.setAttribute('href', image);
    headTitle.appendChild(setFavicon);
}

const content = document.getElementById("content");

content.innerHTML = 'Hello from webpack'