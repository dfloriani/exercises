let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = []
let level = 0;
let started = false;

function nextSequence() {
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);
    let randomNum = Math.floor(Math.random() * 3 + 1)
    let randomChosenColour = buttonColours[randomNum];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);
    
}

$(".btn").click(function() { 
    let userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    //2. Call checkAnswer() after a user has clicked and chosen their answer, passing in the index of the last answer in the user's sequence.
    checkAnswer(userClickedPattern.length-1);
})

function playSound(name) {
    let audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");

    setTimeout(function () {
        $("#" + currentColour).removeClass("pressed");
       }, 100);
}

$(document).keydown(function() {
    if (started == false) {
        $("#level-title").text = ("Level " + level); 
        nextSequence();
        started = true;
    }      
}) 

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log("success");
    if (userClickedPattern.length === gamePattern.length){
    
    setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } else {
      playSound("wrong");
      
      $(document.body).addClass("game-over");
      setTimeout(function () {
        $(document.body).removeClass("game-over");
      }, 200);

      $("#level-title").text("Game Over, press any key to restart");

      startOver();
    }
}

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}




    
