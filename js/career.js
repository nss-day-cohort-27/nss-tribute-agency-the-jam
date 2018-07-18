
//////////////////////  Database Const

const career = {}

//////////////////////  Array - Intro

career.intro = [
    {
        name: "Dewey Cox",
        description: "He does a lot of good arts, and makes all the people's happy."
    }
]

//////////////////////  Array - Skills

career.skills = [
    {
    name: "Fire Juggling",
    description: "Master of the flaming baton."
    }
]
//////////////////////  Array - Published

career.published = [
    {
    name: "Hotter than the Sun",
    description: "Best-selling novel about recovering from a tragic fire-swallowing trick."
    }
]

//////////////////////  Array - Residence

career.residence = [
    {
    name: "Hawaii Beachside Property",
    description: "A small shack on the coast of Maui.",
    beginTime: "1988",
    endTime: "2001"
    }
]

//////////////////////  Array - Collaborators

career.collaborators = [
    {
    name: "Joan Rivera",
    description: "Scandal artist that boosted his career with badmouthing and smut-stirring."
    }
]

//////////////////////  Array - Awards

career.awards = [
    {
    name: "Woody for Best Erotic Album",
    description: "Dewey won this award for his chart-topping album, 'Going down, Getting rough'"
    }
]


var careerIntro = document.createElement("section");
careerIntro.innerHTML = career.intro;
fragment.appendChild(careerIntro)

document.querySelector("article").appendChild(fragment);

console.log(career)