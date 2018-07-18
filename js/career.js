//////////////////////  Database Array

const career = {}

career.intro = []
career.skills = []
career.published = []
career.residence = []
career.collaborators = []
career.awards = []

//////////////////////  Array Objects - Intro

const artistIntro = {
    name: "Dewey Cox",
    description: "He does a lot of good arts, and makes all the people's happy."
}

//////////////////////  Array Objects - Skills

const fireJuggling = {
    name: "Fire Juggling",
    description: "Master of the flaming baton."
}

//////////////////////  Array Objects - Published

const hotterSun = {
    name: "Hotter than the Sun",
    description: "Best-selling novel about recovering from a tragic fire-swallowing trick."
}

//////////////////////  Array Objects - Residence

const beachHouse = {
    name: "Hawaii Beachside Property",
    description: "A small shack on the coast of x"
}

//////////////////////  Array Objects - Collaborators

const joanRivera = {
    name: "Joan Rivera",
    description: "Scandal artist that boosted his career with badmouthing and smut-stirring."
}

//////////////////////  Array Objects - Awards

const woody = {
    name: "Woody for Best Erotic Album",
    description: "Dewey won this award for his chart-topping album, 'Going down, Getting rough'"
}

//////////////////////  Push Objects into Array

career.intro.push(artistIntro);
career.skills.push(fireJuggling);
career.published.push(hotterSun);
career.residence.push(beachHouse);
career.collaborators.push(joanRivera);
career.awards.push(woody);

console.log(career)