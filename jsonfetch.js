// JavaScript Document
// A script to use JS Fetch API to retrieve information from JSON (in this case from r/teenagers) and to display it

// https://github.com/mdn/fetch-examples/blob/master/fetch-json/index.html
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
// https://developers.google.com/web/updates/2015/03/introduction-to-fetch
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse

/* jshint esversion: 6*/ // yay my dreamweaver errors are gone!

// Creative Commons Zero v1.0 Universal - thanks guys!
// based off the MDN fetch() example at https://github.com/mdn/fetch-examples/blob/master/fetch-json/index.html

var divSelect = document.querySelector('p');
var requestURL = 'https://www.reddit.com/r/teenagers.json';

fetch(requestURL)
.then(function(response) {
  if (!response.ok) {
    throw new Error("uh oh: HTTP error, status = " + response.status); // error checking
  }
  return response.json();
})
.then(function(json) {
  var createHeader = document.createElement('h1');
  var createPara = document.createElement('p');
  var createBold = document.createElement('b');
  var createBolder = document.createElement('b');
  // get ready!
  var contents = json.data && json.data.children && json.data.children["2"] && json.data.children["2"].data && json.data.children["2"].data.title;
  createHeader.innerHTML = contents;
  var username = json.data && json.data.children && json.data.children["2"] && json.data.children["2"].data && json.data.children["2"].data.author;
  createPara.innerHTML = "👤 " + username;
  var potato = json.data && json.data.children && json.data.children["2"] && json.data.children["2"].data && json.data.children["2"].data.ups;
  createBold.innerHTML = potato + " upvotes";
  var tomato = json.data && json.data.children && json.data.children["2"] && json.data.children["2"].data && json.data.children["2"].data.downs;
  var linebreak = document.createElement('br');
  createBolder.innerHTML = tomato + " downvotes";
  var grassJellyDrink = json.data && json.data.children && json.data.children["2"] && json.data.children["2"].data && json.data.children["2"].data.permalink;
  // to be done
  divSelect.appendChild(createHeader);
  divSelect.appendChild(createPara);
  divSelect.appendChild(createBold);
  divSelect.appendChild(linebreak);
  divSelect.appendChild(createBolder);
})
.catch(function(error) {
  var p = document.createElement('p');
  p.appendChild(
    document.createTextNode('uh oh: ' + error.message)
  );
  document.body.insertBefore(p, divSelect);
});


// x-moose: majestic (me when I replace dreamweaver with atom or vs code) //
