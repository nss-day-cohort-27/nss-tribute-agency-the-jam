//related image, date, location, type of event, collaborators, and where the event occured or to purchase tickets.

const news = [{
    event: "Event: New album release",
    date: "July 20th at 3pm",
    location: "Nashville",
    type: "concert",
    collaborators: "Brenda Long",
    rating: "7 out of 10",

},
{    
    event: "Event: Dewey walks in on drug usage in batchroom",
    date: "Someday last October",
    location: "Memphis",
    type: "concert",
    collaborators: "Tim Meadows",
    rating: "1 out of 10. You Don't want no part of this Dewey",
    tickets: "Some box office in Memphis"

},
    {
    event: "Event: Dewey cuts his big brother in 2",
    date: "40 years ago",
    location: "Barn",
    type: "accident",
    collaborators: "slingblade",
    rating: "9 out of 10. That was funny. No way he would have still been alive",
    tickets: "Doubtful"
  
},
{
    event: "Event: Dewey drives tractor in water",
    date: "Last Thursday",
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
    h2.innerHTML = items[i].event;
    newsRecap.appendChild(h2);
    h2.className="eventHead, jumbotron jumbotron-fluid";

    var h4 = document.createElement("h4");
    h4.className="newsPic, lead, dropdown, list-group-item"
    h4.innerHTML = items[i].date;
    newsRecap.appendChild(h4);

    var p = document.createElement("p");
    p.className="newsPic, my-4"
    p.innerHTML = items[i].location;
    newsRecap.appendChild(p);

    var p = document.createElement("p");
    p.className="newsPic, my-4"
    p.innerHTML = items[i].type;
    newsRecap.appendChild(p);

    var p = document.createElement("p");
    p.className="newsPic, my-4"
    p.innerHTML = items[i].rating;
    newsRecap.appendChild(p);

    var p = document.createElement("p");
    p.className="newsPic, my-4"
    p.innerHTML = items[i].collaborators;
    newsRecap.appendChild(p);
}