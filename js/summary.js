
const summaryData = {

"collaborators": [
{
    name: "Joe Blow",
    hometown: "Maui, HI",
    age: "56"
},
 {   name: "Susie Queue",
     hometown: "The Big Island, HI",
     age: "48" 
},
{
 name: "Mr. Trex",
 hometown: "Oahu, HI",
 age: "41"
},
{
    name: "Joan Rivera",
    hometown: "Maui, HI",
    age: "42"
}

],
"aliases": [
    {
    name: "Sammy-2Face",
    },
    {
    name: "Low-Blow-Joe"
    }
],

"residence": [
    {
        when: "Former Resident ",
        state: "Maui, HI",
        country: "United States"
    },
    {
        when: "Currently:",
        state: "buried",
        country: "underground"

    }
],

    "whyDewey": [
        {
        sumWhy: "We heard him sing about walking hard...and we learned a little something about how we wanted to walk. What do we think about when we think about Cox?"
        },
   
        {
        sumWhy: "He's been called the Drifter. Also the Shape Shifter, the Master Chef, the Chameleon.The Problem Child. The Hard One. The White Indian. The Giant Midget."
        },
        {sumWhy: "If Elvis and Buddy Holly are the Cain and Abel of rock 'n' roll and Bruce Springsteen is Zechariah...Iggy Pop is Methuselah, and, of course, Neil Young is the wise prophet Ezekiel, then what does that make Dewey Cox?"
        }]
}


// Send data to localStorage


const saveSummary = function (databaseObject, localStorageKey) {
    /*
    Convert the Object into a string.
    */
   const stringifiedSummaryData = JSON.stringify(databaseObject)

   /*
   Create a key in local storage, and store the string
   version of your inventory database as the value
   */
  localStorage.setItem(localStorageKey, stringifiedSummaryData)  
}

const loadSummary = function (localStorageKey) {
    // Get the string version of the database
    const summaryString = localStorage.getItem(localStorageKey)
    
    // Use JSON.parse() to convert the string back into an object
    return JSON.parse(summaryString)
}

saveSummary(summaryData, "SummaryData")

const summaryJsonData = loadSummary("SummaryData")
let sumryart = summaryJsonData 





let artsummary = document.getElementsByClassName("summaryArticle")[0]

console.log(summaryData)
console.log(sumryart.collaborators.length)

let sumCollaborator = document.getElementsByClassName("collaborators")[0]

for(let i = 0; i < sumryart.collaborators.length; i++){
    let h5 = document.createElement("h5");
    h5.innerHTML = sumryart.collaborators[i].name + ", " + sumryart.collaborators[i].age + ", of " + sumryart.collaborators[i].hometown;
    sumCollaborator.appendChild(h5);
}   



console.log(sumryart.aliases.length)
console.log()

let sumAlias = document.getElementsByClassName("aliases")[0]

for(let i = 0; i < sumryart.aliases.length; i++){
    let h5 = document.createElement("h5");
    h5.innerHTML = sumryart.aliases[i].name 
    sumAlias.appendChild(h5);
}

let sumResidence = document.getElementsByClassName("residence")[0]
console.log(sumryart.residence.length)

    for(let i = 0; i< sumryart.residence.length; i++){
        let h5 = document.createElement("h5");
        h5.innerHTML = sumryart.residence[i].when + " " + sumryart.residence[i].state + ", " + sumryart.residence[i].country
        sumResidence.appendChild(h5);
    }


//     /////////////////////////
let whywhy = document.getElementsByClassName("whyDewey")[0]

for(let i =0; i < sumryart.whyDewey.length; i++){
    let h5 = document.createElement("h5");
    h5.className = "blurb"
    h5.innerHTML =sumryart.whyDewey[i].sumWhy
    whywhy.appendChild(h5);
}