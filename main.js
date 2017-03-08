var treehouseContainer = document.getElementById("treehouseContainer");
var badgeArray = [];

function executeThisCodeAfterFileLoaded(){
	var data = JSON.parse(this.responseText);

	for (i=0; i < 47; i++) {
		// console.log(data.badges[i].icon_url);
		badgeArray += `<img src=" ${data.badges[i].icon_url}" alt="badges-here">;`
		treehouseContainer.innerHTML = badgeArray;
		// console.log(badgeArray);			
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
