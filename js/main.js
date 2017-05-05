"use strict";

// Full Credits go to https://scotch.io/tutorials/getting-started-with-browserify

var R = require('ramda');
// var Sentencer = require('sentencer');

var square = function square (x) { return x * x; }
var squares = R.chain(square, [1, 2, 3, 4, 5]);

// var randomSentence = Sentencer.make("This sentence has {{ a_noun }} and {{ an_adjective }} {{ noun }} in it.");

document.getElementById('response').innerHTML = randomSentence;

// alert(randomSentence);
