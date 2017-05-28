
var Sentencer = require('Sentencer');
var async = require("async");

// TODO: move options into configure method
Sentencer.configure({

    actions: {
        number: function() {
            return Math.floor( Math.random() * 10 ) + 1;
        }
    }

});

document.getElementById("generateBtn").addEventListener("click", function(){

        var template = document.getElementById("template").value;

        // TODO - move settings control here

        var e = document.getElementById("phoneme");

        var phoneme = e.options[e.selectedIndex].dataset['name'];
        var limit = e.options[e.selectedIndex].dataset['limit'];
        var placement = e.options[e.selectedIndex].dataset['placement'];

        var f = document.getElementById("target");
        var target = f.options[f.selectedIndex].dataset['name'];

        var array = target.split(',');

        var key =  e.options[e.selectedIndex].id;

        // TODO - move options and filtering
        Sentencer._filterOpts = {
            limit: limit,
            placement: placement,
            vowelPattern: {
                "name": key, // arbitrary name for vowel set
                "vowels": [ phoneme ], // vowel sounds
                "target": array,
                "examples": [  ] // example words for UI
            }
        };

        Sentencer.filterAdjectives();

        if (Sentencer._filteredAdjStack.length > 0) {

            console.log(Sentencer._filterOpts.vowelPattern.target);




            // TODO - configure option on page to control number of sentences to generate

            var randomText = '';
            var backgroundStuff = "";

            // TODO - configure option to control the number of sentences generated

            var randomSentence = Sentencer.make(template);

            randomText += randomSentence;

            document.getElementById("response").innerHTML = randomText;
            document.getElementById("filterOpts").innerHTML = backgroundStuff;

        }

});
