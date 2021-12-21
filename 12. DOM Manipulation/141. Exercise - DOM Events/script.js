var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems = document.getElementsByTagName("li");


for(var i = 0; i < listItems.length; i++){
	var btn = document.createElement("button")
	btn.innerHTML = "Delete";
	btn.addEventListener("click", delTask);
	listItems[i].appendChild(document.createTextNode(" "));
	listItems[i].appendChild(btn);
	listItems[i].addEventListener("click", toggleDone)
}

function inputLength() {
	return input.value.length;
}

function toggleDone() {
	this.classList.toggle("done");
}

function delTask(){
	this.parentElement.remove();
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value+ " "));
	var btn = document.createElement("button")
	btn.innerHTML = "Delete";
	btn.addEventListener("click", delTask);
	li.appendChild(btn);
	li.addEventListener("click", toggleDone);
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}




button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);