$(document).ready(function() {

    $('#generateBtn').on("click", function() {

        // TODO - set up a slider on the page that allows the user to control refresh rate







        // One step at a time............
        // 7:45pm rage is a lot easier to handle completely 100%





        

        var refreshRate = 10000; // 10000 = 10 seconds.


        setInterval(function() {
            $('#generateBtn').trigger('click'); //
        }, refreshRate);


        // TODO - set up a visualizer that shows decibel level to aid students in utilizing tool.

        // Consider using https://www.npmjs.com/package/websockets-streaming-audio
        // Consider using http://www.storiesinflight.com/jsfft/visualizer/index.html
        // Consdider using https://wiki.mozilla.org/Audio_Data_API
        // Use: https://wiki.mozilla.org/Audio_Data_API#Complete_Example:_Creating_a_Web_Based_Tone_Generator

        // Use Buffers because they are extermely complicated.




    })

});