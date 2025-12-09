// const msg = document.getElementById("mess")
const logbut = document.getElementById("loginb")
const enterPK = document.getElementById("enteredPK")
const error = document.getElementById("error")

logbut.onclick = () => {
    const pass = enterPK.value;

    if (pass === "Huber") {
        document.getElementById("login").style.display = "none";
        document.getElementById("homepage").style.display = "block";
    } else {
        error.textContent = "Wrong passcode!";
        error.style.color = "red";
    }
};
// document.getElementById("testButton").onclick = () => {
//     if (msg.textContent === "" ) {
//         msg.textContent = "button!";
//     } else {
//         msg.textContent = "";
//     }
// };