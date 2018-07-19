
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
    {
    name: "Walk Hard",
    img: "walk-hard.jpg"
    },
    {
    name: "Black Sheep",
    img: "black-sheep.jpg"
    },
    {
    name: "(For Christmas) The People Want Cox",
    img: "for-christmas.jpg"
    },
    {
    name: "Let's Duet",
    img: "lets-duet.jpg"
    }
],

//////////////////////  Array - Residence

resTitle: "Places of Residence",

residence: [
    {
    name: "Springberry, Alabama",
    beginEnd: "1946-1953"
    },
    {
    name: "Nashville, Tennessee",
    beginEnd: "1954-1965"
    },
    {
    name: "Berkeley, California",
    beginEnd: "1966-2002"
    }
],

//////////////////////  Array - Collaborators

collabTitle: "Known Collaborators",

collaborators: [
    "Darlene Madison",
    "Sam"
],

//////////////////////  Array - Awards

awardTitle: "Freakin' Amazing Awards",

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

//////////////////////  Populate HTML w/JSON.intro

var artistIntro = document.getElementsByClassName("intro")[0];
var artistIntroJson = careerJSONData.intro;

for(var i = 0; i < artistIntroJson.length; i++) {

    let currentItem = artistIntroJson[i];

    artistIntro.innerHTML+=`
    <h1 class="introTitle">${currentItem.name}</h1>
    <h4 class="introBody">${currentItem.description}</h4>`

}

//////////////////////  Populate HTML w/JSON.skills

var artistSkills = document.querySelector(".skills");
var artistSkillsJson = careerJSONData.skills;
var artistSkillsTitleJson = careerJSONData.skillTitle;

artistSkills.innerHTML+=`
<h2 class="skillsTitle">${artistSkillsTitleJson}</h2>`

for(var i = 0; i < artistSkillsJson.length; i++) {

    let skillsItem = artistSkillsJson[i];

    artistSkills.innerHTML+=`
    <h4 class="skillsBody">${skillsItem}</h4>`

}

//////////////////////  Populate HTML w/JSON.published

var artistPublished = document.getElementsByClassName("pub")[0];
var artistPubJson = careerJSONData.published;
var artistPubTitleJson = careerJSONData.pubTitle;

artistPublished.innerHTML+=`
<h2 class="pubTitle">${artistPubTitleJson}</h2>`

for(var i = 0; i < artistPubJson.length; i++) {

    artistPublished.innerHTML+=`
    <h4 class="pubBody">${artistPubJson[i].name}</h4>
    <img src="images/${artistPubJson[i].img}">`

}

//////////////////////  Populate HTML w/JSON.residence

var artistResidence = document.getElementsByClassName("res")[0];
var artistResJson = careerJSONData.residence;
var artistResTitleJson = careerJSONData.resTitle;

artistResidence.innerHTML+=`
<h2 class="header">${artistResTitleJson}</h2>`

for(var i = 0; i < artistResJson.length; i++) {


    var resName = document.createElement("h4");
    resName.innerHTML = artistResJson[i].name;
    artistResidence.appendChild(resName);

    var resBeginEnd = document.createElement("h6");
    resBeginEnd.innerHTML = artistResJson[i].beginEnd;
    artistResidence.appendChild(resBeginEnd);

}

//////////////////////  Populate HTML w/JSON.collaborators

var artistCollab = document.getElementsByClassName("collab")[0];
var artistCollabJson = careerJSONData.collaborators;
var artistCollabTitleJson = careerJSONData.collabTitle;

artistCollab.innerHTML+=`
<h2 class="header">${artistCollabTitleJson}</h2>`


for(var i = 0; i < artistCollabJson.length; i++) {

    let collabItem = artistCollabJson[i];

    artistCollab.innerHTML+=`
    <h4 class="header">${collabItem}</h4>`

}

//////////////////////  Populate HTML w/JSON.awards

var artistAwards = document.getElementsByClassName("awards")[0];
var artistAwardsJson = careerJSONData.awards;
var artistAwardsTitleJson = careerJSONData.awardTitle;

artistAwards.innerHTML+=`
<h2 class="header">${artistAwardsTitleJson}</h2>`

for(var i = 0; i < artistAwardsJson.length; i++) {

    let awardsItem = artistAwardsJson[i];

    artistAwards.innerHTML+=`
    <h4 class="header">${awardsItem}</h4>`
   
}


console.log(career)