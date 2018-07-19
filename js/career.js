
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
    description: "Dewey won this award for his chart-topping album, 'Going down, Getting dirty'"
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

//////////////////////  Populate HTML w/JSON.intro

var artistIntro = document.getElementsByClassName("intro")[0];
var artistIntroJson = careerJSONData.intro;

for(var i = 0; i < artistIntroJson.length; i++) {

    var introName = document.createElement("h3");
    introName.innerHTML = artistIntroJson[i].name;
    artistIntro.appendChild(introName);

    var introDescription = document.createElement("p");
    introDescription.innerHTML = artistIntroJson[i].description;
    artistIntro.appendChild(introDescription);
}

//////////////////////  Populate HTML w/JSON.skills

var artistSkills = document.getElementsByClassName("skills")[0];
var artistSkillsJson = careerJSONData.skills;

for(var i = 0; i < artistSkillsJson.length; i++) {

    var skillsFireName = document.createElement("h3");
    skillsFireName.innerHTML = artistSkillsJson[i].name;
    artistIntro.appendChild(skillsFireName);

    var skillsFireDescription = document.createElement("p");
    skillsFireDescription.innerHTML = artistSkillsJson[i].description;
    artistIntro.appendChild(skillsFireDescription);
}

//////////////////////  Populate HTML w/JSON.published

var artistPublished = document.getElementsByClassName("pub")[0];
var artistPubJson = careerJSONData.published;

for(var i = 0; i < artistPubJson.length; i++) {

    var publishedNameHotter = document.createElement("h3");
    publishedNameHotter.innerHTML = artistPubJson[i].name;
    artistPublished.appendChild(publishedNameHotter);

    var publishedDescriptionHotter = document.createElement("p");
    publishedDescriptionHotter.innerHTML = artistPubJson[i].description;
    artistPublished.appendChild(publishedDescriptionHotter);
}

//////////////////////  Populate HTML w/JSON.residence

var artistResidence = document.getElementsByClassName("res")[0];
var artResJson = careerJSONData.residence;

for(var i = 0; i < artResJson.length; i++) {

    var resMauiName = document.createElement("h3");
    resMauiName.innerHTML = artResJson[i].name;
    artistResidence.appendChild(resMauiName);

    var resMauiDescription = document.createElement("p");
    resMauiDescription.innerHTML = artResJson[i].description;
    artistResidence.appendChild(resMauiDescription);
}

//////////////////////  Populate HTML w/JSON.collaborators

var artistCollab = document.getElementsByClassName("collab")[0];
var artistCollabJson = careerJSONData.collaborators;

for(var i = 0; i < artistCollabJson.length; i++) {

    var collabJoanName = document.createElement("h3");
    collabJoanName.innerHTML = artistCollabJson[i].name;
    artistCollab.appendChild(collabJoanName);

    var collabJoanDescription = document.createElement("p");
    collabJoanDescription.innerHTML = artistCollabJson[i].description;
    artistCollab.appendChild(collabJoanDescription);
}

//////////////////////  Populate HTML w/JSON.awards

var artistAwards = document.getElementsByClassName("awards")[0];
var artistAwardsJson = careerJSONData.awards;

for(var i = 0; i < artistAwardsJson.length; i++) {

    var awardsWoodyName = document.createElement("h3");
    awardsWoodyName.innerHTML = artistAwardsJson[i].name;
    artistAwards.appendChild(awardsWoodyName);

    var awardsWoodyDescription = document.createElement("p");
    awardsWoodyDescription.innerHTML = artistAwardsJson[i].description;
    artistAwards.appendChild(awardsWoodyDescription);
}


console.log(career)