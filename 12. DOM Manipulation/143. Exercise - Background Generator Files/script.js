var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
color1.setAttribute("value", "#ff0000")
var color2 = document.querySelector(".color2");
color2.setAttribute("value", "#ffff00")
var body = document.getElementById("gradient");
setGradient();

var random = document.createElement("button");
random.textContent = "Random"
body.appendChild(random)

var setRandom = function(){
	color1.value = "#" + Math.floor(Math.random()*16777215).toString(16);
	color2.value = "#" + Math.floor(Math.random()*16777215).toString(16);
	setGradient()
}


function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

random.addEventListener("click", setRandom)
