
//////////////////////  Database Const

const career = {

//////////////////////  Array - Intro

intro: [
    {
        name: "Dewey Cox",
        description: "He does a lot of good arts, and makes all the people's happy."
    }
],

//////////////////////  Array - Skills

skillTitle: "Totally Awesome Skills",

skills: [
    "Singing",
    "Playing guitar",
    "Walking hard"
],

//////////////////////  Array - Published

pubTitle: "Published Works",

published: [
    "Walk Hard",
    "Black Sheep",
    "(For Christmas) The People Want Cox",
    "Let's Duet"
],

//////////////////////  Array - Residence

resTitle: "Places of Residence",

residence: [
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

collaborators: [
    "Darlene Madison",
    "Sam"
],

//////////////////////  Array - Awards

awardTitle: "Freakin' Awesome Awards",

awards: [
    "Grammy for Best Album - 'Black Sheep'",
    "Grammy for Best Single - 'Walk Hard'"
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

console.log(careerJSONData)

//////////////////////  Populate HTML w/JSON.intro

var artistIntro = document.getElementsByClassName("intro")[0];
var artistIntroJson = careerJSONData.intro;

console.log(artistIntroJson)

for(var i = 0; i < artistIntroJson.length; i++) {

    let currentItem = artistIntroJson[i];

    console.log(currentItem)

    artistIntro.innerHTML+=`
    <h4 class="header">${currentItem.name}</h4>
    <p>${currentItem.description}</p>`

    // var introName = document.createElement("h4");
    // introName.innerHTML = `${currentItem.name}`
    // artistIntro.appendChild(introName);

    // var introDescription = document.createElement("p");
    // introDescription.innerHTML = artistIntroJson[i].description;
    // artistIntro.appendChild(introDescription);
}

//////////////////////  Populate HTML w/JSON.skills

var artistSkills = document.getElementsByClassName("skills")[0];
var artistSkillsJson = careerJSONData.skills;

var skillsTitle = document.createElement("h2");
skillsTitle.innerHTML = artistSkillsJson.skillTitle;
artistSkills.appendChild(skillsTitle);

for(var i = 0; i < artistSkillsJson.length; i++) {

    var skills123 = document.createElement("h4");
    skills123.innerHTML = artistSkillsJson[i].skills;
    artistSkills.appendChild(skills123);

}

//////////////////////  Populate HTML w/JSON.published

var artistPublished = document.getElementsByClassName("pub")[0];
var artistPubJson = careerJSONData.published;

var publishedTitle = document.createElement("h2");
publishedTitle.innerHTML = artistPubJson.pubTitle;
artistPublished.appendChild(publishedTitle);

for(var i = 0; i < artistPubJson.length; i++) {


    var albums1234 = document.createElement("h4");
    albums1234.innerHTML = artistPubJson[i].albums;
    artistPublished.appendChild(albums1234);

}

//////////////////////  Populate HTML w/JSON.residence

var artistResidence = document.getElementsByClassName("res")[0];
var artistResJson = careerJSONData.residence;

var residenceTitle = document.createElement("h2");
residenceTitle.innerHTML = artistResJson.resTitle;
artistResidence.appendChild(residenceTitle);

for(var i = 0; i < artistResJson.length; i++) {


    var resName = document.createElement("h4");
    resName.innerHTML = artistResJson[i].name;
    artistResidence.appendChild(resName);

    var resBegin = document.createElement("p");
    resBegin.innerHTML = artistResJson[i].beginTime;
    artistResidence.appendChild(resBegin);

    var resEnd = document.createElement("p");
    resEnd.innerHTML = artistResJson[i].endTime;
    artistResidence.appendChild(resEnd);

}

//////////////////////  Populate HTML w/JSON.collaborators

var artistCollab = document.getElementsByClassName("collab")[0];
var artistCollabJson = careerJSONData.collaborators;

var collaboratorsTitle = document.createElement("h2");
collaboratorsTitle.innerHTML = artistCollabJson.collabTitle;
artistCollab.appendChild(collaboratorsTitle);

for(var i = 0; i < artistCollabJson.length; i++) {


    var collaborator12 = document.createElement("h4");
    collaborator12.innerHTML = artistCollabJson[i].collaborators;
    artistCollab.appendChild(collaborator12);

}

//////////////////////  Populate HTML w/JSON.awards

var artistAwards = document.getElementsByClassName("awards")[0];
var artistAwardsJson = careerJSONData.awards;

var awardsTitle = document.createElement("h2");
awardsTitle.innerHTML = artistAwardsJson.awardTitle;
artistAwards.appendChild(awardsTitle);

for(var i = 0; i < artistAwardsJson.length; i++) {

    var awards12 = document.createElement("h4");
    awards12.innerHTML = artistAwardsJson[i].awards;
    artistAwards.appendChild(awards12);
   
}


console.log(career)