const info = document.getElementById("info");

/*let teacher = {
    name: "henning",
    year: 28
}

let student = {
    name: "foo",
    year: 30
}

let animal = {
    name: "hermann",
    year: 0.5
}

let myList = [teacher, student, animal]

for(let i = 0; i < myList.length; i++){
    console.log("navn: " + myList[i].name + " og alder: " + myList[i].year);
}

fetch("https://api.imgflip.com/get_memes")
.then(function(response){
    return response.json();
})
.then(function(responseJson){
    const imageContainer = document.getElementById("image-container");
    for(let j = 0; j < 5; j++){
        imageContainer.innerHTML += "<img class='myImage' src='"+responseJson.data.memes[j].url+"'></img>";
    }
    
})*/

/*function getCountry(){
    const userInput = document.getElementById("my-input").value;
    const info = document.getElementById("info");
    const probability = document.getElementById("probability");
    fetch("https://cors-anywhere.herokuapp.com/https://api.nationalize.io/?name="+userInput)
    .then(function(response){
        return response.json()
    })
    .then(function(responseJson){
        info.innerHTML = "land: " + responseJson.country[0].country_id;
        probability.innerHTML = "sandsynligheden: " + responseJson.country[0].probability;

    })
}*/

fetch("https://api.nationalize.io/?name=henning")

//https://cors-anywhere.herokuapp.com/