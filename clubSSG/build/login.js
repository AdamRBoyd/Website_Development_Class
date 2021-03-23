let cl1 = document.getElementById("click");
let cl2 = document.getElementById("clickMessage");
let emVal = document.getElementById("email");
let pasVal = document.getElementById("password");

function clickHandler() {
    if (emVal.checkValidity() && pasVal.checkValidity()) {
        cl2.classList.replace("hide", "show");
        cl2.innerHTML = "<h2><center><strong>Welcome " + emVal.value + "</strong></center></h2><h4><center>This site is currently under construction!</h4></center><br>";
    }
}

cl1.addEventListener("click", clickHandler);

let navActive = document.querySelector("nav ul #login");
navActive.className = 'active';