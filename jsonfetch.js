// JavaScript Document
// A script to use JS Fetch API to retrieve information from JSON (in this case from r/teenagers) and to display it

// https://github.com/mdn/fetch-examples/blob/master/fetch-json/index.html
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
// https://developers.google.com/web/updates/2015/03/introduction-to-fetch

/* jshint esversion: 6*/ // yay my dreamweaver errors are gone!

// Creative Commons Zero v1.0 Universal - thanks guys!

var myList = document.querySelector('ul');
const url = 'https://www.reddit.com/r/teenagers/new.json?sort=hot';
   
fetch(url)
    .then(function(response) {
      if (!response.ok) { // MDN implementation - Google implementation of Response Status check doesn't work haha
        throw new Error("uh oh: Response Status = " + response.status);
      }
      return response.json();
    })
    .then(function(json) {
      for(var i = 0; i < json.data.length; i++) {
        var listItem = document.createElement('p');
        listItem.innerHTML = json.kind+ 'did it work?';
		
      }
    })
    .catch(function(error) {
      var p = document.createElement('p');
      p.appendChild(
        document.createTextNode('uh oh: ' + error.message)
      );
      document.body.insertBefore(p, myList);
    });



// x-moose: majestic (me when I replace dreamweaver with atom or vs code) //