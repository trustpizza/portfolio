const navigate = (pageId) =>  {
    const pages = document.querySelectorAll(".page")
    pages.forEach(page => {
        page.classList.add('hidden');
    })

    document.getElementById(pageId).classList.remove('hidden');
}

export default navigate;