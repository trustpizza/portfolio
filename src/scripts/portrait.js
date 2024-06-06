import portraitUrl from "../photos/portrait.jpeg";

const portrait = () => {
    const imgTag = document.getElementById("portrait");
    imgTag.src = portraitUrl;
}

export default portrait;