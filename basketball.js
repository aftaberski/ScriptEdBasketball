function prompForPlayerName(name){
    var name = prompt("Please enter your name")
    if (name.length > 15){
        alert("Wow, that's a long name!")
    }
    return name
}

function tryTwoPointShot(){
    var rand1 = Math.random();
    var rand2 = Math.random();
    if (rand1 > 0.2 && rand2 > 0.2){
        return true;
    } else {
        return false;
    }
}

function tryThreePointShot(){
    var rand1 = Math.random();
    var rand2 = Math.random();
    if (rand1 <= 0.2 || rand2 >= 0.8){
        return true;
    } else {
        return false;
    }
}

function getShotString(name, points, validity){
    return name + " attempted a " + points + "pointer";
}

function updateScore(succeed, currentPoints, shotPoints){
    if (succeed){
        return currentPoints + shotPoints;
    } else {
        return currentPoints;
    }
}

function isEndOfGame(score, name){
    if (score >= 20){
        alert("This game is over, won");
        return true;
    } else {
        return false;
    }
}