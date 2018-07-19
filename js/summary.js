
const summaryData = {

"collaborators": [
{
    name: "Joe Blow",
    hometown: "Hopkinsville, KY",
    age: "56"
},
 {   name: "Susie Queue",
     hometown: "Clarksville, TN",
     age: "48" 
},
{
 name: "Mr. Trex",
 hometown: "Oak Grove, KY",
 age: "41"
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
        when: "raised in: ",
        state: "Kentucky",
        country: "United States"
    },
    {
        when: "currently",
        state: "buried",
        country: "underground"

    }
]
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


// document.write(JSON.localStorage.summaryData.stringifiedSummaryData)

let artsummary = document.getElementsByClassName("summaryArticle")[0]
let sumryart = summaryJsonData 

console.log(summaryData)
console.log(sumryart.collaborators.length)

for(let i = 0; i < sumryart.collaborators.length; i++){
    let h3 = document.createElement("h3");
    h3.innerHTML = sumryart.collaborators[i].name + ", " + sumryart.collaborators[i].age + ", of " + sumryart.collaborators[i].hometown
    artsummary.appendChild(h3);
}

let sumAlias = document.getElementsByClassName("aliases")[0]

console.log(sumryart.aliases.length)
console.log()

for(let i = 0; i < sumryart.aliases.length; i++){
    let h3 = document.createElement("h3");
    h3.innerHTML = sumryart.aliases[i].name 
    sumAlias.appendChild(h3);
}
