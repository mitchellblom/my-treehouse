var treehouseContainer = document.getElementById("treehouseContainer");
var profilePic = document.getElementById("profile-pic");
var badgeArray = [];

function executeThisCodeAfterFileLoaded(){
	var data = JSON.parse(this.responseText);

	console.log(data);
	profilePic.innerHTML = `<img src="${data.gravatar_url}" alt="pic-here">;`

	for (i=0; i < 47; i++) {
		badgeArray += `<img src="${data.badges[i].icon_url}" alt="badges-here">;`
		treehouseContainer.innerHTML = badgeArray;		
	}
}

function executeThisCodeAfterFileFails(){
	// console.log("not working")
}

var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
myRequest.addEventListener("error", executeThisCodeAfterFileFails);
myRequest.open("GET", "https://teamtreehouse.com/mitchellblom.json");
myRequest.send();




//////////
// For loop
// CSS - wants it pretty
