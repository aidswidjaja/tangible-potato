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

fetch('https://www.reddit.com/r/teenagers/about.json')
.then(function(response) {
  if (!response.ok) {
    throw new Error("uh oh: HTTP error, status = " + response.status); // error checking
  }
  return response.json();
})
.then(function(json) {
  var pSelect = document.querySelector('#mobileabout');
  var requestURL = 'https://www.reddit.com/r/teenagers/about.json';

  var createSubCount = document.createElement('h4');
  var createActiveCount = document.createElement('h4');

  var subcontents = json.data && json.data.subscribers;
  createSubCount.innerHTML = subcontents + " members";
  var linebreak = document.createElement('br');
  var activecontents = json.data && json.data.accounts_active;
  createActiveCount.innerHTML = activecontents + " online right now";
  pSelect.appendChild(createSubCount);
  pSelect.appendChild(createActiveCount);
})
.catch(function(error) {
  console.log("oof - "+ error);
});
