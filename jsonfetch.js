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

var myList = document.querySelector('p');
var requestURL = 'https://www.reddit.com/r/teenagers.json';

fetch(requestURL)
.then(function(response) {
  if (!response.ok) {
    throw new Error("uh oh: HTTP error, status = " + response.status); // error checking
  }
  return response.json();
})
.then(function(json) {
  var listItem = document.createElement('h1');
  // get ready!
  var contents = json.data && json.data.children && json.data.children["2"] && json.data.children["2"].data && json.data.children["2"].data.title;i
  listItem.innerHTML = contents;
  myList.appendChild(listItem);

})
.catch(function(error) {
  var p = document.createElement('p');
  p.appendChild(
    document.createTextNode('uh oh: ' + error.message)
  );
  document.body.insertBefore(p, myList);
});


// x-moose: majestic (me when I replace dreamweaver with atom or vs code) //
