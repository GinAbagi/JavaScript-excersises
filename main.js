//Your age in days

function ageInDays() {
    var birthYear = prompt("What year where you born?");
    var ageInDagen = (2020 - birthYear) * 365;
    var h1 = document.createElement("h1");
    var textAnswer = document.createTextNode("You are " + ageInDagen + " days old");
    h1.setAttribute("id", "ageInDagen");
    h1.appendChild(textAnswer);
    document.getElementById("flex-box-result").appendChild(h1);
}

function reset() {
    document.getElementById("ageInDagen").remove();
}


//gif genegator fetching a gif from link
function generateGif() {
    var image = document.createElement("img");
    var div = document.getElementById("flex-gif-gen");
    image.src = "https://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);
}

//rock,paper,scissors vs computer. 
function rpsGame(yourChoice) {
    console.log(yourChoice);
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randToRpsInt());
    console.log("computerChoice:", botChoice);
    result = decideWinner(humanChoice, botChoice);
    console.log(result);
    message = finalMessage(result);
    console.log(message);
    rpsFrontEnd(yourChoice.id, botChoice, message);
}
//randomiser 
function randToRpsInt() {
    return Math.floor(Math.random() * 3);
}
//choices you can make
function numberToChoice(number) {
    return ["rock", "paper", "scissors"][number];
}
//winner decision
function decideWinner(yourChoice, computerChoice) {
    var rpsDatabase = {
        "rock": {
            "scissors": 1,
            "rock": 0.5,
            "paper": 0
        },
        "paper": {
            "scissors": 0,
            "rock": 1,
            "paper": 0.5
        },
        "scissors": {
            "scissors": 0.5,
            "rock": 0,
            "paper": 1
        }
    }
    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];

    return [yourScore, computerScore];
}
//message pop-up
function finalMessage([yourScore, computerScore]) {
    if (yourScore === 0) {
        return {
            "message": "You lost!",
            "color": "red"
        };
    } else if (yourScore === 0.5) {
        return {
            "message": "You tied!",
            "color": "yellow"
        };
    } else
        return {
            "message": "You won!",
            "color": "green"
        };
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    var imagesDatabase = {
        "rock": document.getElementById("rock").src,
        "paper": document.getElementById("paper").src,
        "scissors": document.getElementById("scissors").src
    }

    document.getElementById("rock").remove();
    document.getElementById("paper").remove();
    document.getElementById("scissors").remove();

    var humanDiv = document.createElement("div");
    var botDiv = document.createElement("div");
    var messageDiv = document.createElement("div");

    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "'height=150 width 150 style='box-shadow: 0px 10px 50px rgba(37,50,233,1);'>"

    messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>"

    botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "'height=150 width 150 style='box-shadow: 0px 10px 50px rgba(253, 23, 23);'>"


    document.getElementById("flex-box-rps-div").appendChild(humanDiv);

    document.getElementById("flex-box-rps-div").appendChild(messageDiv);

    document.getElementById("flex-box-rps-div").appendChild(botDiv);

}