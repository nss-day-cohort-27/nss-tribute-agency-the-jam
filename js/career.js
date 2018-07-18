
//////////////////////  Database Const

const career = {

//////////////////////  Array - Intro

"intro": [
    {
        name: "Dewey Cox",
        description: "He does a lot of good arts, and makes all the people's happy."
    }
],

//////////////////////  Array - Skills

"skills": [
    {
    name: "Fire Juggling",
    description: "Master of the flaming baton."
    }
],

//////////////////////  Array - Published

"published": [
    {
    name: "Hotter than the Sun",
    description: "Best-selling novel about recovering from a tragic fire-swallowing trick."
    }
],

//////////////////////  Array - Residence

"residence": [
    {
    name: "Hawaii Beachside Property",
    description: "A small shack on the coast of Maui.",
    beginTime: "1988",
    endTime: "2001"
    }
],

//////////////////////  Array - Collaborators

"collaborators": [
    {
    name: "Joan Rivera",
    description: "Scandal artist that boosted his career with badmouthing and smut-stirring."
    }
],

//////////////////////  Array - Awards

"awards": [
    {
    name: "Woody for Best Erotic Album",
    description: "Dewey won this award for his chart-topping album, 'Going down, Getting rough'"
    }
]
}

//////////////////////  Stringify & Parse JSON

const saveCareerData = function (databaseObject, localStorageKey) {
    const stringifiedCareerData = JSON.stringify (databaseObject)
    localStorage.setItem(localStorageKey, stringifiedCareerData)
}

const loadCareerData = function (localStorageKey) {
    const careerDataString = localStorage.getItem(localStorageKey)
    return JSON.parse(careerDataString)
}

saveCareerData(career, "Career")

const careerJSONData = loadCareerData("Career")

//////////////////////  Populate HTML w/JSON

var artistIntro = document.getElementsByClassName("int")[0];
var artIntro = careerJSONData.intro ; 

for(var i = 0; i < artIntro.length; i++) {
    var h3 = document.createElement("h3");
    h3.innerHTML = artIntro[i].name;
    artistIntro.appendChild(h3);
    var p = document.createElement("p");
    p.innerHTML = artIntro[i].description;
    artistIntro.appendChild(p);
}


console.log(career)