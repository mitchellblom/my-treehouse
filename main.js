// var treehouseContainer = document.getElementById("treehouseContainer");


function executeThisCodeAfterFileLoaded(){
	var data = JSON.parse(this.responseText);
	// console.log(data);							/// <-- Uncomment this line to show treehouse content on console
}

function executeThisCodeAfterFileFails(){
	// console.log("not working")
}

var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
myRequest.addEventListener("error", executeThisCodeAfterFileFails);
myRequest.open("GET", "https://teamtreehouse.com/mitchellblom.json");
myRequest.send();