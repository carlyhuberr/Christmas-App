const msg = document.getElementById("mess")

document.getElementById("testButton").onclick = () => {
    if (msg.textContent === "" ) {
        msg.textContent = "button!";
    } else {
        msg.textContent = "";
    }
};