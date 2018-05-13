var targetNumber = [];
var winCount = [];
var lossCount = [];
var numberOptions = [];
var counter = 0;
var jazz = $("#jazz");
var images = ["assets/images/Donovan1.jpg", "assets/images/Joe1.jpg", "assets/images/Ricky1.jpg", "assets/images/Rudy1.jpg"];
console.log(numberOptions)


function reset() {
targetNumber = Math.floor(Math.random() * 55) + 22;  
$("#random-number").text("Random Number: " + targetNumber);
numberOptions = [Math.floor((Math.random() * 12) + 1), Math.floor((Math.random() * 12) + 1), Math.floor((Math.random() * 12) + 1), Math.floor((Math.random() * 12) + 1)];
$("#current-score").text("Current Score: " + (counter = 0));
console.log(counter);
} 
targetNumber = Math.floor(Math.random() * 55) + 22;  
$("#random-number").append(" " + targetNumber);
numberOptions = [Math.floor((Math.random() * 12) + 1), Math.floor((Math.random() * 12) + 1), Math.floor((Math.random() * 12) + 1), Math.floor((Math.random() * 12) + 1)];
counter = 0;


for (var i = 0; i < numberOptions.length; i++) {
    var imageJazz = $("<img>");
    imageJazz.addClass("jazz-image"); // EDITED THIS LINE
    imageJazz.attr("src", images[i]); // EDITED THIS LINE
    imageJazz.attr("data-jazzvalue", numberOptions[i]);
    jazz.append(imageJazz);
}

$("#jazz").on("click", ".jazz-image", function () {
    var jazzValue = ($(this).attr("data-jazzvalue"));
    jazzValue = parseInt(jazzValue);
    counter += jazzValue;
    $("#current-score").text("Current Score: " + counter);
    function ifElse() {
    if (counter === targetNumber) {
        winCount++;
        $("#win-count").text("Win Count: " + winCount);
        alert("#TakeNote");
        reset();
    } else if (counter > targetNumber) {
        lossCount++;
        $("#loss-count").text("Loss Count: " + lossCount);
        alert("What a loser!");
        reset();
    }
}
ifElse();
});


