/* app.js
* main script file for our little application
* */

"use strict";

var tile = 'img/sec1.jpg';
var info = 'some other data';


//stores gameboard element - id gameboard (add section gameboard in html)
var gameBoard = $('#game-board');

//create and configure a new <img> element...
var newTile = $(document.createElement('img'));

newTile.attr('src', 'img/background.jpg');
newTile.attr('alt', 'photo of nature');
newTile.attr('width', '250px');

//use the .data() method to associate extra data with HTML elements
newTile.data('assocTile', tile);   //first param is a key
newTile.data('tileInfo', info);    //second param is a value

//add to the gameboard
gameBoard.append(newTile);


//when an img in game-board is clicked
$('#game-board img').click(function() {
	//remember that 'this' refers to the DOM element that raise the event; wrapped in jQuery $() to get more functionality
	var clickedImage = $(this);
	var tileData1 = clickedImage.data('assocTile');
	var tileData2 = clickedImage.data('tileInfo');

	clickedImage.attr('src', tileData1);
	clickedImage.attr('alt', tileData2);

	console.log(tileData1);
	console.log(tileData2);
});


//iterate over array, calling passed function for each element
//also works with objects
var array = ['a', 'b', 'c', 'd'];

_.forEach(array, function(element, index) {

 console.log(element);

 console.log(index);

});

_.difference(array, ['c', 'd']);

var unionArray = _.union(array, ['e', 'f'])

_.intersection(array, ['b', 'c']);

//filtering, new array of numbers
var numArray = [1,2,3,4,5,6,7,8,9,10];

//show me even values of the array
var evens = _.filter(numArray, function(num) {return 0 == num % 2;});
console.log(evens);

//shuffle() returns a new shuffled array,
//leaving the original array intact
//use in assignment
var shuffledArray = _.shuffle(numArray);

console.log(shuffledArray);
console.log(numArray);
console.log(array);
console.log(unionArray);

//showing time elapsed
var startTime = _.now();
console.log(startTime);

var timer; //hold timer value

//use window.setInterval to create a timer that runs a function every second
timer = window.setInterval(onTimer, 1000);


//how long someone has been playing 
function onTimer() {
	//compare _.now() to startTime to get elapsed time
	//Math.floor() rounds down to the nearest int

	var elapsedSeconds = Math.floor((_.now() - startTime) / 1000); 
	console.log(elapsedSeconds);
	$('#game-board h2').css("font-size", elapsedSeconds + 'px');
}

function stopTimer() {
	window.clearInterval(timer);
	$('#game-board').empty();     //reset game and start new, check if empty first 
}

$('.jumbotron').click(stopTimer);





/*Challenge 5: States we care about in the game
-total amount of unfound matches (status display to user)
-time since the start of the game (status display to user)
-number of non-matched (status to user)

For tile
-has this tile been matched? if yes - show(disabled as clicked so they can't click on it), if no - flip back over
-has this tile been clicked
-how many tiles have been clicked (true), reset after second click to false
	-loop: has anyhting been clicked? click, set to true, object in memory, click again? if that is set to true?, match? if not,
	 wait lil bit and turn them back over
-restart game when won
-lodash duplicate objects 

