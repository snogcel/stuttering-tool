
var Sentencer = require('Sentencer');

Sentencer.configure({

    actions: {
        number: function() {
            return Math.floor( Math.random() * 10 ) + 1;
        }
    }

});

document.getElementById("generateBtn").addEventListener("click", function(){

    var randomSentence = Sentencer.make("This sentence has {{ a_noun }} and a {{ an_adjective }} {{ noun }} in it, including a random {{ number }}.");

    document.getElementById("response").innerHTML = randomSentence;

});
