

var targetNumber = Math.floor(Math.random() * 55) + 22;
var winCount = 0;
var lossCount = 0;
var numberOptions = [10, 12, 5, 7];
var counter = 0;
var jazz = $("#jazz");
console.log(numberOptions)

$("#random-number").append(" " + targetNumber);

$("#win-count").append(" " + winCount);

$("#loss-count").append(" " + lossCount);



for (var i = 0; i < numberOptions.length; i++) {
    var imageJazz = $("<img>");
    imageJazz.addClass(".jazz-image");
    imageJazz.attr("src", "assets/images/Donovan1.jpg", "assets/images/Joe1.jpg", "assets/images/Ricky1.jpg", "assets/images/Rudy1");
    imageJazz.attr("data-jazzvalue", numberOptions[i]);
    jazz.append(imageJazz);
}

jazz.on("click", ".jazz-image", function () {
    var jazzValue = ($(this).attr("data-jazzvalue"));
    jazzValue = parseInt(jazzValue);
    counter += jazzValue;
    alert("New Score:" + counter);
    if (counter === targetNumber) {
        winCount++;
    }

    else if (counter >= targetNumber) {
        lossCount++;
    }

});
