const textBox = document.querySelector(".password");
const okButton = document.querySelector(".button-ok");
const inputs = document.querySelectorAll("input");
const launchButton = document.querySelector(".button-submit");
const rocket = document.querySelector(".rocket");

okButton.addEventListener("click", unlock);
launchButton.addEventListener("click", moveAnim);
document.addEventListener("DOMContentLoaded", function(){
    alert("Enter Password to unlock Control Panel!");
});
function moveAnim(){
    setInterval(move, 500);
}

function move() {
    let x = Number(getComputedStyle(rocket).left.substr(0, getComputedStyle(rocket).left.length - 2));
    rocket.style.bottom = 20 + x + "px";
    rocket.style.left = 10 + x + "px";
}

function check(){
    for(let input of inputs) {
        if(input.classList[0] === "checkbox" && !input.checked) {
            return;
        }
        if(input.type === "range" && input.value < 90) {
            return;
        }
    }
    inputs[inputs.length-1].disabled = !inputs[inputs.length-1].disabled;
}
function unlock(){
    if(textBox.value === "TrustNo1") {
        for (let input of inputs) {
            if (input.value !== "Launch") {
                input.disabled = !input.disabled;
            }
        }
        alert("Check all the boxes and turn all the levers up to launch!");
    } else {
        alert("Wrong Password! Try TrustNo1");
    }
}