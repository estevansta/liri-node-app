// test console.log to see if keys.js is linked to liri.js
console.log('\nliri working some magic');

// spotify key that uses the hidden .env senstive information for spotify API
exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};


// code layout origin from exercise 15-callbacks
// Create the TV constructor
// var TV = function() {
//   // divider will be used as a spacer between the tv data we print in log.txt
//   var divider = "\n------------------------------------------------------------\n\n";

//   // findShow takes in the name of a tv show and searches the tvmaze API
//   this.findShow = function(show) {
//     var URL = "http://api.tvmaze.com/singlesearch/shows?q=" + show;

//     axios.get(URL).then(function(response) {
//       // Place the response.data into a variable, jsonData.
//       var jsonData = response.data;

//       // showData ends up being the string containing the show data we will print to the console
//       var showData = [
//         "Show: " + jsonData.name,
//         "Genre(s): " + jsonData.genres.join(", "),
//         "Rating: " + jsonData.rating.average,
//         "Network: " + jsonData.network.name,
//         "Summary: " + jsonData.summary
//       ].join("\n\n");

//       // Append showData and the divider to log.txt, print showData to the console
//       fs.appendFile("log.txt", showData + divider, function(err) {
//         if (err) throw err;
//         console.log(showData);
//       });
//     });
//   };
// }