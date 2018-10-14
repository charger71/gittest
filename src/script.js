window.onload = function(){
    var redButton = document.querySelector("#red")
    var blueButton = document.querySelector("#blue")
    var greenButton = document.querySelector("#green")

    redButton.addEventListener("click", function(){
        changeColor("red")
    })
    blueButton.addEventListener("click", function(){
        changeColor("blue")
    })
    greenButton.addEventListener("click", function(){
        changeColor("green")
    })
    
}

function changeColor(color){
    document.body.style.backgroundColor = color;
}
