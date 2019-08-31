// JavaScript Document
// A script to use JS Fetch API to retrieve information from JSON (in this case from r/teenagers) and to display it

// https://github.com/mdn/fetch-examples/blob/master/fetch-json/index.html
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
// https://developers.google.com/web/updates/2015/03/introduction-to-fetch
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse

/* jshint esversion: 6*/ // yay my dreamweaver errors are gone!

// Creative Commons Zero v1.0 Universal - thanks guys!
// adapted from the MDN fetch() example at https://github.com/mdn/fetch-examples/blob/master/fetch-json/index.html

// Unfortunately variables had to be moved inside a function as scope issues conflicted with another script

fetch('https://www.reddit.com/r/teenagers.json')
.then(function(response) {
  if (!response.ok) {
    throw new Error("uh oh: HTTP error, status = " + response.status); // error checking
  }
  return response.json();
})
.then(function(json) {
  var pSelect = document.querySelector('#mobileredditp');
  var aSelect = document.querySelector('#mobileredditlink');
  var requestURL = 'https://www.reddit.com/r/teenagers.json';

  var createHeader = document.createElement('h1');
  var createPara = document.createElement('p');
  var createBold = document.createElement('b');
  var createBolder = document.createElement('b');
  var createPineapple = document.createElement('p'); // unused
  var createOrange = document.createElement('p'); // unused

  // get ready!
  var grassJellyDrink = json.data && json.data.children && json.data.children["2"] && json.data.children["2"].data && json.data.children["2"].data.permalink;
  document.getElementById("redditlink").href = "https://reddit.com" + grassJellyDrink; // Permalink
  var contents = json.data && json.data.children && json.data.children["2"] && json.data.children["2"].data && json.data.children["2"].data.title;
  createHeader.innerHTML = contents; // Title
  var username = json.data && json.data.children && json.data.children["2"] && json.data.children["2"].data && json.data.children["2"].data.author;
  createPara.innerHTML = "by " + username; // Author
  var potato = json.data && json.data.children && json.data.children["2"] && json.data.children["2"].data && json.data.children["2"].data.score;
  createBold.innerHTML = potato + " points"; // Score
  var linebreak = document.createElement('br');


  aSelect.appendChild(createHeader);
  pSelect.appendChild(createPara);
  pSelect.appendChild(createBold);
  pSelect.appendChild(linebreak);
  pSelect.appendChild(createBolder);

})
.catch(function(error) {
  console.log("oof - "+ error);
});


// x-moose: majestic (me when I replace dreamweaver with atom or vs code) //
