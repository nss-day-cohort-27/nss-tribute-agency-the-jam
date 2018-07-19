
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

skillTitle: "Totally Awesome Skills",

"skills": [
    skill1 = "Singing",
    skill2 = "Playing guitar",
    skill3 = "Walking hard"
],

//////////////////////  Array - Published

pubTitle: "Published Works",

"published": [
    album1 = "Walk Hard",
    album2 = "Black Sheep",
    album3 = "(For Christmas) The People Want Cox",
    album4 = "Let's Duet"
],

//////////////////////  Array - Residence

resTitle: "Places of Residence",

"residence": [
    {
    name: "Springberry, Alabama",
    beginTime: "1946",
    endTime: "1953"
    },
    {
    name: "Nashville, Tennessee",
    beginTime: "1954",
    endTime: "1965"
    },
    {
    name: "Berkeley, California",
    beginTime: "1966",
    endTime: "2002"
    }
],

//////////////////////  Array - Collaborators

collabTitle: "Known Collaborators",

"collaborators": [
    collab1 = "Darlene Madison",
    collab2 = "Sam"
],

//////////////////////  Array - Awards

awardTitle: "Freakin' Awesome Awards",

"awards": [
    award1 = "Grammy for Best Album - 'Black Sheep'",
    award2 = "Grammy for Best Single - 'Walk Hard'"
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

    var introName = document.createElement("h4");
    introName.innerHTML = artistIntroJson[i].name;
    artistIntro.appendChild(introName);

    var introDescription = document.createElement("p");
    introDescription.innerHTML = artistIntroJson[i].description;
    artistIntro.appendChild(introDescription);
}

//////////////////////  Populate HTML w/JSON.skills

var artistSkills = document.getElementsByClassName("skills")[0];
var artistSkillsJson = careerJSONData.skills;

var skillsTitle = document.createElement("h2");
skillsTitle.innerHTML = artistSkillsJson.skillTitle;
artistSkills.appendChild(skillsTitle);

for(var i = 0; i < artistSkillsJson.length; i++) {


    var skillsFireName = document.createElement("h4");
    skillsFireName.innerHTML = artistSkillsJson[i].name;
    artistIntro.appendChild(skillsFireName);

    var skillsFireDescription = document.createElement("p");
    skillsFireDescription.innerHTML = artistSkillsJson[i].description;
    artistIntro.appendChild(skillsFireDescription);
}

//////////////////////  Populate HTML w/JSON.published

var artistPublished = document.getElementsByClassName("pub")[0];
var artistPubJson = careerJSONData.published;

var publishedTitle = document.createElement("h2");
publishedTitle.innerHTML = artistPubJson.pubTitle;
artistPublished.appendChild(publishedTitle);

for(var i = 0; i < artistPubJson.length; i++) {


    var publishedNameHotter = document.createElement("h4");
    publishedNameHotter.innerHTML = artistPubJson[i].name;
    artistPublished.appendChild(publishedNameHotter);

    var publishedDescriptionHotter = document.createElement("p");
    publishedDescriptionHotter.innerHTML = artistPubJson[i].description;
    artistPublished.appendChild(publishedDescriptionHotter);
}

//////////////////////  Populate HTML w/JSON.residence

var artistResidence = document.getElementsByClassName("res")[0];
var artistResJson = careerJSONData.residence;

var residenceTitle = document.createElement("h2");
residenceTitle.innerHTML = artistResJson.resTitle;
artistResidence.appendChild(residenceTitle);

for(var i = 0; i < artistResJson.length; i++) {


    var resMauiName = document.createElement("h4");
    resMauiName.innerHTML = artistResJson[i].name;
    artistResidence.appendChild(resMauiName);

    var resMauiDescription = document.createElement("p");
    resMauiDescription.innerHTML = artistResJson[i].description;
    artistResidence.appendChild(resMauiDescription);
}

//////////////////////  Populate HTML w/JSON.collaborators

var artistCollab = document.getElementsByClassName("collab")[0];
var artistCollabJson = careerJSONData.collaborators;

var collaboratorsTitle = document.createElement("h2");
collaboratorsTitle.innerHTML = artistCollabJson.collabTitle;
artistCollab.appendChild(collaboratorsTitle);

for(var i = 0; i < artistCollabJson.length; i++) {


    var collabJoanName = document.createElement("h4");
    collabJoanName.innerHTML = artistCollabJson[i].name;
    artistCollab.appendChild(collabJoanName);

    var collabJoanDescription = document.createElement("p");
    collabJoanDescription.innerHTML = artistCollabJson[i].description;
    artistCollab.appendChild(collabJoanDescription);
}

//////////////////////  Populate HTML w/JSON.awards

var artistAwards = document.getElementsByClassName("awards")[0];
var artistAwardsJson = careerJSONData.awardTitle;

var awardsTitle = document.createElement("h2");
awardsTitle.innerHTML = artistAwardsJson.title;
artistAwards.appendChild(awardsTitle);

for(var i = 0; i < artistAwardsJson.length; i++) {


    var awardsWoodyName = document.createElement("h4");
    awardsWoodyName.innerHTML = artistAwardsJson[i].name;
    artistAwards.appendChild(awardsWoodyName);

    var awardsWoodyDescription = document.createElement("p");
    awardsWoodyDescription.innerHTML = artistAwardsJson[i].description;
    artistAwards.appendChild(awardsWoodyDescription);
}


console.log(career)