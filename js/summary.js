
const summaryData = {}


////////////////// Database


summaryData.collaborators = [
    {name: "Joe Blow",
     age: "29"
    },
    {name: "Susie Q"

    }

]
summaryData.aliases=[
    {
    name: "Sammy-2Face"
    },
    {
    name: "Low-Blow"
    }
]
summaryData.residence=[
    {
        country: "United States"
    }
]


console.log(summaryData)

// Persist the database to localStorage


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

saveSummary(summaryData, "Summary Data")

const summaryJsonData = loadSummary("Summary Data")


// document.write(JSON.localStorage.summaryData.stringifiedSummaryData)

var summaryArt1 = document.getElementsByClassName(sumar)