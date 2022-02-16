import getPassword from "./form-controller";
import copyPassword from "./form-controller";

const MIN_LENGTH = 3;
const MAX_LENGTH = 50;

function initializeWeb() {
    const HEAD = document.getElementsByTagName("head")[0];
    const FONT_AWESOME = document.createElement("link");
    FONT_AWESOME.setAttribute("rel", "stylesheet");
    FONT_AWESOME.setAttribute("href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css");
    HEAD.appendChild(FONT_AWESOME);

    const BODY = document.getElementsByTagName("body")[0];
    BODY.appendChild(createMain());

    //document.getElementById("copy-btn").addEventListener("click", () => copyPassword());
    document.getElementById("generate-but").addEventListener("click", () => getPassword());

}

function createMain() {
    const MAIN = document.createElement("div");
    MAIN.setAttribute("id", "main");
    MAIN.classList.add("main");

    MAIN.appendChild(createForm());    

    return MAIN;
}

function createForm() {
    const FORM = document.createElement("form");
    
    let pswdField = document.createElement("input");
    pswdField.setAttribute("type", "password");
    pswdField.setAttribute("id", "pswd");
    //pswdField.readOnly = true;
    pswdField.defaultValue = "CLICK GENERATE";
    FORM.appendChild(pswdField);

    let togglePswd = document.createElement("i");
    togglePswd.classList.add("far", "fa-eye");
    togglePswd.setAttribute("id", "togglePswdBut");
    togglePswd.addEventListener("click", () => togglePswdVisible());
    FORM.appendChild(togglePswd);

    let copyBtn = document.createElement("button")
    copyBtn.setAttribute("id", "copy-btn");
    copyBtn.setAttribute("type", "button");
    copyBtn.textContent = "Copy";
    FORM.appendChild(copyBtn);

    let info = document.createElement("p");
    info.setAttribute("id", "info");
    info.textContent = "Info";
    FORM.appendChild(info);

    const FORM_CONTAINER = document.createElement("div");
    FORM_CONTAINER.classList.add("form-container");

    let lengthContainer = document.createElement("div");
    lengthContainer.classList.add("option-container");
    lengthContainer.appendChild(createLabel("length-label", "Length"));
    let lengthInput = document.createElement("input");
    lengthInput.setAttribute("type", "number");
    lengthInput.setAttribute("id", "length-input");
    lengthInput.setAttribute("name", "length-input");
    lengthInput.setAttribute("min", MIN_LENGTH.toString());
    lengthInput.setAttribute("MAX", MAX_LENGTH.toString());
    lengthInput.defaultValue = "10";
    lengthContainer.appendChild(lengthInput);
    FORM_CONTAINER.appendChild(lengthContainer);

 
    let upperContainer = document.createElement("div");
    upperContainer.classList.add("option-container");
    upperContainer.appendChild(createLabel("upper-label", "Uppercase"));
    upperContainer.appendChild(createCheckbox("upper-chkbx", "UPPERCASE"));
    FORM_CONTAINER.appendChild(upperContainer);

    let lowerContainer = document.createElement("div");
    lowerContainer.classList.add("option-container");
    lowerContainer.appendChild(createLabel("lower-label", "Lowercase"));
    lowerContainer.appendChild(createCheckbox("lower-chkbx", "LOWERCASE"));
    FORM_CONTAINER.appendChild(lowerContainer);


    let numbersContainer = document.createElement("div");
    numbersContainer.classList.add("option-container");
    numbersContainer.appendChild(createLabel("numbers-label", "Numbers"));
    numbersContainer.appendChild(createCheckbox("numbers-chkbx", "NUMBERS"));
    FORM_CONTAINER.appendChild(numbersContainer);


    let symbolsContainer = document.createElement("div");
    symbolsContainer.classList.add("option-container");
    symbolsContainer.appendChild(createLabel("symbols-label", "Symbols"));
    symbolsContainer.appendChild(createCheckbox("symbols-chkbx", "SYMBOLS"));
    FORM_CONTAINER.appendChild(symbolsContainer);


    let generateBut = document.createElement("button");
    generateBut.setAttribute("type", "button");
    //generateBut.setAttribute("value", "Generate");
    generateBut.textContent = "Generate";
    generateBut.setAttribute("id", "generate-but");
    FORM_CONTAINER.appendChild(generateBut);

    FORM.appendChild(FORM_CONTAINER);
    return FORM;
}

function createLabel(inputId, text) {
    let label = document.createElement("label");
    label.setAttribute("for", inputId);
    label.textContent = text;
    
    return label;
}

function createCheckbox(id, value) {
    let chkbx = document.createElement("input");
    chkbx.setAttribute("type", "checkbox");
    chkbx.setAttribute("id", id);
    chkbx.setAttribute("name", id);
    chkbx.setAttribute("value", value);
    chkbx.setAttribute("checked", true);

    return chkbx;
}

function togglePswdVisible() {
    let pswdField = document.getElementById("pswd");
    pswdField.type = pswdField.type === "password" ? "text" : "password";
}

export default initializeWeb;