let cl1 = document.getElementById("click");
let cl2 = document.getElementById("ThanksDialog");
let n = document.getElementById("name");
let e = document.getElementById("email");
let p = document.getElementById("password");

function clickHandler() {
    if (n.checkValidity() && e.checkValidity() && p.checkValidity()) {
        cl2.innerHTML = "<h2><center>Thanks for Signing Up!</center></h2><h3><center>Name: " + n.value + " <br> Email: " + e.value + "</center></h3><br><center><button id=\"close\">Close</button></center>";
        cl2.classList.replace("hide", "show");
        let cl3 = document.getElementById("close");
    }
}

cl1.addEventListener("click", clickHandler);
document.addEventListener("click", function(e) {
    if (e.target && e.target.id == "close") {
        cl2.classList.add("hide");
    }
});

let navActive = document.querySelector("nav ul #signup");
navActive.className = 'active';