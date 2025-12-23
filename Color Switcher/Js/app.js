const red = document.getElementById("red");
const green = document.getElementById("green");
const yellow = document.getElementById("yellow");
const blue = document.getElementById("blue");
const text = document.getElementById("word");
const colorCode = document.getElementById("currentColor")
const color = {
    red: "rgb(255, 0, 0) RED",
    green: "rgb(0, 128, 0) GREEN",
    yellow: "rgb(255, 255, 0) YELLOW",
    blue: "rgb(0, 0, 255) BLUE"
}

red.addEventListener("click", function(){
    text.style.color = "red";
    colorCode.textContent = `The Color Code is ${color.red}`
})

green.addEventListener("click", function(){
    text.style.color = "green";
    colorCode.textContent = `The Color Code is ${color.green}`
})

yellow.addEventListener("click", function(){
    text.style.color = "yellow";
    colorCode.textContent = `The Color Code is ${color.yellow}`
})

blue.addEventListener("click", function(){
    text.style.color = "blue";
    colorCode.textContent = `The Color Code is ${color.blue}`
})


