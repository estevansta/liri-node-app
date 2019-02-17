// set any environment variables with the dotenv package 

require("dotenv").config();

// var KeysJS require("./keys"); links the key.js page to liri.js

var keys = require("./keys.js");

// require axios npm package

var axios = require("axios");

// require fs npm package

var fs = require("fs");

// initialize and use spotify API

var spotify = require("node-spotify-api");
// constructor to use spotify keys s
var spotifyConst = new spotify(keys.spotify);

// require moment npm package 

var moment = require("moment");

// require OMDB API

var omdb = (keys.omdb);

// require BandsInTown API

var bands = (keys.bands)

// return the array user inputted
var userInput = process.argv[2];

// return the commands array that the user will follow ex "mr nobody"
var searchItem = process.argv.slice(3).join(" ");

// app function following the parameters of user Input and the commands
function userCommands(userInput, searchItem) {
// command logic
// 9. Make it so liri.js can take in one of the following commands:
//    * `concert-this`
//    * `spotify-this-song`
//    * `movie-this`
//    * `do-what-it-says`
    switch (userInput) {
        case "concert-this":
        concertThis();
        break;
        case "spotify-this-song":
        spotifyThisSong();
        break;
        case "movie-this":
        // console.log("MOVIE-THIS WORKS!!!!!")
        movieThis(searchItem);
        break;
        case "do-what-it-says":
        doWhatItSays();
        break;
    }
}

// callback the function
userCommands(userInput, searchItem);

// function for concert-this
// function concertThis();

// function for spotify-this-song
// function spotifyThisSong();


// function for movie-this
function movieThis() {
    console.log("\nsearching for movie ... " + searchItem );
    // If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.
    // if (!commands) { commands = "mr nobody"; };
    // call the omdb API key 
    //code template from 15-callbacks
    this.movieThis = function(searched) {  
        var divider = "\n------------------------------------------------------------\n\n";
        var URL = "http://www.omdbapi.com/?t=" + searchItem + "&apikey=f256545c";
    
        axios.get(URL).then(function(body) {
          // Place the response.data into a variable, jsonData.
          var movieData = JSON.parse(body);
    
          // showData ends up being the string containing the show data we will print to the console
          var movieData = [
            "year: " + jsonData.Year,
            "movie: " + jsonData.Title,
            "Rotten tomatoes Rating: " + jsonData.Rating[1].value,
            "Plot: " + jsonData.Plot,
            "Actors: " + jsonData.Actors,
          ].join("\n\n");
          // console.log(movieData + divider);
          // Append showData and the divider to log.txt, print showData to the console
          fs.appendFile("log.txt", movieData + divider, function(err) {
            if (err) throw err;
            console.log(movieData);
            return console.log("movie err");
          });
        });
      };
}

module.exports = keys;

// function do-what-it-says
// function doWhatItSays();




