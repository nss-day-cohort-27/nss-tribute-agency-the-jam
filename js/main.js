// Main JS
console.log("Test")

function makeJSON(params) {
    const stringed = JSON.stringify(params);
    localStorage.setItem("personJSON", stringed);
    console.log("Stringified!");
}

function getJSON(params) {
    const retrievedItem = localStorage.getItem(params);
    return JSON.parse(retrievedItem);
    console.log("Item Loaded")
}

makeJSON(person)
let newStuff = getJSON("personJSON")

console.log(newStuff)

document.getElementById("preview").innerHTML = `<p>${newStuff.summary}</p>`
document.getElementById("hidden").innerHTML = `<p><strong>Born:</strong> ${newStuff.born} in ${newStuff.birthPlace} <br> <strong>Birth Name:</strong> ${newStuff.name} <br> <strong>Died:</strong> ${newStuff.died} <br> <strong>Current Residence:</strong> ${newStuff.currentCountry}</p>`
document.getElementById("family").innerHTML = `<h3>Family</h3> <p><strong>Father:</strong> ${newStuff.family[0]} <br> <strong>Mother:</strong> ${newStuff.family[1]} <br> <strong>Wife 1:</strong> ${newStuff.family[2]} <br> <strong>Wife 2:</strong> ${newStuff.family[3]} <br> <strong>Wife 3:</strong> ${newStuff.family[4]}</p>`