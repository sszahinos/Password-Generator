
function getPassword() {
    const passwordBox = document.getElementById("pswd");
    const info = document.getElementById("info");

    console.log("clicked");
    if (checkOptions()) {
        console.log("PSWD: " + generatePasswords(readOptions()));
        passwordBox.defaultValue = generatePasswords(readOptions());
    } else {
        info.textContent = "For generate a password at least one option is required."
    }
}

function readOptions() {
    return [
        document.getElementById("length-input").value,
        document.getElementById("upper-chkbx").checked,
        document.getElementById("lower-chkbx").checked,
        document.getElementById("numbers-chkbx").checked,
        document.getElementById("symbols-chkbx").checked,
    ];
};

function generatePasswords(options) {
    let password = "";
    let temp = "";
    let prueba = "";

    for (let index = 0; index < options[0]; index++) {
        if (options[1]) temp += getUpperChar();
        if (options[2]) temp += getLowerChar();
        if (options[3]) temp += getNum();
        if (options[4]) temp += getSymbol();

        password += pickChar(temp);
        temp = "";
    }

    return password;
}

function getUpperChar() {
    return String.fromCharCode(getRandomNum(65, 90));
}

function getLowerChar() {
    return String.fromCharCode(getRandomNum(97, 122));
}

function getNum() {
    return getRandomNum(0, 9);
}

function getSymbol() {
    return String.fromCharCode(getRandomNum(33, 47));
}

function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max-min+1) + min);
}

function pickChar(characters) {
    return characters.charAt(getRandomNum(0, characters.length-1));
}

function checkOptions() {
    return (document.querySelectorAll('input[type=checkbox]:checked')).length != 0 ? true : false;
}

export function copyPassword() {
    const info = document.getElementById("info");
    let password = document.getElementById("pswd").value;
    navigator.clipboard.writeText(password);
    info.textContent = "Copied!";
}

export default getPassword;