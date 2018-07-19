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

document.getElementById("preview").innerHTML = newStuff.summary
document.getElementById("hidden").innerHTML = `Born: ${newStuff.born} in ${newStuff.birthPlace} <br> Birth Name: ${newStuff.name} <br> Died: ${died} <br> `