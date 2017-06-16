$(document).ready(function() {

        $( "#slider" ).slider({
            classes: {
                "ui-slider": "highlight"
            }});// instantiate jquery ui slider


    // The rage that boils beneath my skin when people won't look up an answer (different than Answer) for themselves.

    /*
    $('#ex1').bootstrap/home/jon/Development/stuttering-toolSlider({
        formatter: function(value) {
            return 'Current value: ' + value;
        }
    });
    */

        $('#generateBtn').on("click", function() {

            // TODO - set up a slider on the page that allows the user to control refresh rate

            // using https://jqueryui.com/slider/

            // One step at a time............
            // 7:45pm "general malaise" is a lot easier to handle completely 100%

            var refreshRate = 10000; // 10000 = 10 seconds.

            (function(){

                setInterval(function() {

                    console.log("hello there"); // TODO You Too :-)

                    // Programming = Fun.
                    // This is fine tuning (think of tuning an engine)

                    // TODO - cool jQuery stuff

                    $('#generateBtn').trigger('click'); // this is a callback loop and also callback hell.

                    clearInterval(refreshRate); // stops after 10 seconds.

                }, 5000); // 5 second delay.

            })(refreshRate);



            // TODO - set up a visualizer that shows decibel level to aid students in utilizing tool.

            // Consider using https://www.npmjs.com/package/websockets-streaming-audio
            // Consider using http://www.storiesinflight.com/jsfft/visualizer/index.html
            // Consdider using https://wiki.mozilla.org/Audio_Data_API
            // Use: https://wiki.mozilla.org/Audio_Data_API#Complete_Example:_Creating_a_Web_Based_Tone_Generator

            // Use Buffers because they are extermely complicated.




        })


});