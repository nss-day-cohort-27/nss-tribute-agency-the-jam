//related image, date, location, type of event, collaborators, and where the event occured or to purchase tickets.

const news = [{
    event: "New CD release - Back from the Dead",
    date: "July 20th at 4pm",
    location: "Nashville",
    type: "concert",
    collaborators: "Brenda Long",
    rating: "11 out of 10",

},
{    
    event: "Dewey walks in on drug usage in bathroom",
    date: "Someday last October",
    location: "Memphis",
    type: "concert",
    collaborators: "Tim Meadows",
    rating: "1 out of 10. You Don't want no part of this Dewey",
    tickets: "Some box office in Memphis"

},
    {
    event: "Dewey cuts his big brother in 2",
    date: "40 years ago",
    location: "Barn",
    type: "accident, The wrong kid died",
    collaborators: "the slingblade",
    rating: "9 out of 10. That was funny. No way he would have still been alive",
    tickets: "Doubtful"
  
},
{
    event: "Dewey drives tractor in water",
    date: "That one part in the movie",
    location: "Lake",
    type: "plunge",
    collaborators: "gravity",
    rating: "10 out of 10. Great form goin in the drink",
    tickets: "No way, brah. Too soggy"

  }
]

const saveNewsBase = function (databaseObject, localStorageKey) {
const stringifiedDatabase = JSON.stringify(databaseObject)
localStorage.setItem(localStorageKey, stringifiedDatabase)
}

const loadNewsData = function (localStorageKey) {
const databaseString = localStorage.getItem(localStorageKey)
return JSON.parse(databaseString)
}

saveNewsBase(news, "News")

const newsJSONdata =loadNewsData("News")

var newsRecap = document.getElementsByClassName("news")[0];
var items = newsJSONdata;

// one big for loop
for(var i = 0; i < items.length; i++) {
    var h2 = document.createElement("h2");
    h2.innerHTML = `Event: ${items[i].event}`;
    newsRecap.appendChild(h2);
    h2.className="eventHead";

    var h4 = document.createElement("h4");
    h4.className="badge badge-light"
    h4.innerHTML = `Date: ${items[i].date}`;
    newsRecap.appendChild(h4);

    var h4 = document.createElement("h4");
    h4.className="newsPic, my-4"
    h4.innerHTML =`Where at? ${items[i].location}`;
    newsRecap.appendChild(h4);

    var h4 = document.createElement("h4");
    h4.className="newsPic, my-4"
    h4.innerHTML = `Type of event: ${items[i].type}`;
    newsRecap.appendChild(h4);

    var r = document.createElement("r");
    id="rating";
    r.className="newsPic, my-4"
    r.innerHTML = `Event rating: ${items[i].rating}`;
    newsRecap.appendChild(r);

    var r = document.createElement("r");
    r.className="newsPic, my-4"
    r.innerHTML = `WITH SPECIAL GUEST: ${items[i].collaborators}`;
    newsRecap.appendChild(r);
}