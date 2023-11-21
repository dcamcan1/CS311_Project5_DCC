function generateMadLib() {
    var firstName = document.getElementById('fname').value;
    if (firstName == "") {
        firstName = 'John';
    }
    var lastName = document.getElementById('lname').value;
    if (lastName == "") {
        lastName = 'Doe';
    }
    var imSoAdj = document.getElementById('imsoadj').value;
    if (imSoAdj == "") {
        imSoAdj = 'excited';
    }
    var fromPlace = document.getElementById('fromplace').value;
    if (fromPlace == "") {
        fromPlace = 'Louisville, KY,';
    }
    var inANoun = document.getElementById('inanoun').value;
    if (inANoun == "") {
        inANoun = 'spaceship';
    }
    var imTheAdj = document.getElementById('imtheadj').value;
    if (imTheAdj == "") {
        imTheAdj = 'wisest';
    }
    var forAAdj = document.getElementById('foraadj').value;
    if (forAAdj == "") {
        forAAdj = 'successful';
    }
    var verbRegularly = document.getElementById('verbregularly').value;
    if (verbRegularly == "") {
        verbRegularly = 'Communicate';
    }
    var sweatTheAdj = document.getElementById('sweattheadj').value;
    if (sweatTheAdj == "") {
        sweatTheAdj = 'small';
    }
    var goOnNoun = document.getElementById('goonnoun').value;
    if (goOnNoun == "") {
        goOnNoun = 'dates';
    }
    var verbToYour = document.getElementById('verbtoyour').value;
    if (verbToYour == "") {
        verbToYour = 'Listen';
    }
    var lotsOfEmotion = document.getElementById('lotsofemotion').value;
    if (lotsOfEmotion == "") {
        lotsOfEmotion = 'love';
    }
    
    var madLib = `I'm so <span>${imSoAdj}</span> to be at your wedding! I traveled all the way from <span>${fromPlace}</span> in a <span>${inANoun}</span> because I love you. Since I'm the <span>${imTheAdj}</span> person you know, here's the most important advice for a <span>${forAAdj}</span> marriage:<br><br>
        - <span>${verbRegularly}</span> regularly.<br>- Don't sweat the <span>${sweatTheAdj}</span> stuff.<br>
        - Go on <span>${goOnNoun}</span> often.<br>- <span>${verbToYour}</span> to your partner.<br><br>
        Lots of <span>${lotsOfEmotion}</span>,<br><span>${firstName}</span> <span>${lastName}</span>`

    console.log(typeof "madLib");

    document.getElementById('madLibOutput').innerHTML = madLib;
    document.getElementById('inputDiv').style.display = 'none';
    document.getElementById('outputDiv').style.display = 'block';
}

function reset() {
    document.getElementById('inputDiv').style.display = 'block';
    document.getElementById('outputDiv').style.display = 'none';
}