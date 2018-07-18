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

newStuff.items.forEach(post => {
    console.log(post)
});