
function initializeWeb() {
    const BODY = document.getElementsByTagName("body")[0];
    BODY.appendChild(createMain());
}

function createMain() {
    const MAIN = document.createElement("div");
    MAIN.setAttribute("id", "main");
    MAIN.classList.add("main");

    return MAIN;
}

export default initializeWeb;