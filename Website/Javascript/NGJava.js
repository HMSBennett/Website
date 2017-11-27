var HUN = new Array(9);
var DEC = new Array(9);
var UNIT = new Array(19);
var T;
var S;
var X;
var TEMP;

function OnLoad() {
    S = 0;
    X = 0;
    TEMP = 0;
    btnCheck.disabled = "disabled";
    lblNum.innerText = " ";
    lblReply.innerText = " ";
    UNIT[0] = "";
    UNIT[1] = "one";
    UNIT[2] = "two";
    UNIT[3] = "three";
    UNIT[4] = "four";
    UNIT[5] = "five";
    UNIT[6] = "six";
    UNIT[7] = "seven";
    UNIT[8] = "eight";
    UNIT[9] = "nine";
    UNIT[10] = "ten";
    UNIT[11] = "eleven";
    UNIT[12] = "twelve";
    UNIT[13] = "thirteen";
    UNIT[14] = "fourteen";
    UNIT[15] = "fifteen";
    UNIT[16] = "sixteen";
    UNIT[17] = "seventeen";
    UNIT[18] = "eighteen";
    UNIT[19] = "nineteen";
    DEC[0] = "";
    DEC[2] = "twenty";
    DEC[3] = "thirty";
    DEC[4] = "fourty";
    DEC[5] = "fifty";
    DEC[6] = "sixty";
    DEC[7] = "seventy";
    DEC[8] = "eighty";
    DEC[9] = "ninety";
    HUN[1] = "one-hundred";
    HUN[2] = "two-hundred";
    HUN[3] = "three-hundred";
    HUN[4] = "four-hundred";
    HUN[5] = "five-hundred";
    HUN[6] = "six-hundred";
    HUN[7] = "seven-hundred";
    HUN[8] = "eight-hundred";
    HUN[9] = "nine-hundred";
}

function Start() {
    btnCheck.disabled = false;
    btnStart.disabled = true;
    txtAns.disabled = false;
    txtAns.innerText = " ";
    lblReply.innerText = " ";
    random();
    txtAns.value = "";
}

function random() {
    T = 1 + parseInt(Math.random() * 998);
    if (X == T) {
        T = T + 1;
    } else {
        T = T;
    }
    Convert();
}

function Convert() {
    if (T <= 19) {
        lblNum.innerText = "What is " + UNIT[T] + " in digits?";
    } else {
        if (T <= 99) {
            U = String(T).slice(1, 2);
            D = String(T).slice(0, 1);
            lblNum.innerText = "What is " + DEC[D] + " " + UNIT[U] + " in digits?";
        } else {
            U = String(T).slice(2, 3);
            D = String(T).slice(1, 2);
            H = String(T).slice(0, 1);
            if (D == 1) {
                TEMP = D + U;
                U = TEMP
                lblNum.innerText = "What is " + HUN[H] + " and " + UNIT[U] + " in digits?";
            } else {
                lblNum.innerText = "What is " + HUN[H] + " " + DEC[D] + " " + UNIT[U] + " in digits?";
            }
        }
    }
    X = T;
}

function CheckAnswer() {
    if (parseInt(txtAns.value) == T) {
        lblReply.innerText = "Congratulations, Well Done!";
        sndPlayer.src = "Sounds/Wrong.mp3";
        S = S + 1;
        score();
        btnStart.value = "Next";
        btnStart.disabled = false;
        btnCheck.disabled = true;
        txtAns.disabled = true;
    }else{
        lblReply.innerText = "Sorry, Try Again, The Answer Is " + T;
        sndPlayer.src = "Sounds/Wrong.mp3";
        btnStart.value = "Next";
        btnStart.disabled = false;
        btnCheck.disabled = true;
        txtAns.disabled = true;
    }
}

function score() {
    if (S == 1) {
        smileOne.src = "images/Smiley2.png";
    } else {
        if (S == 2) {
            smileTwo.src = "images/Smiley2.png";
        } else {
            if (S == 3) {
                smileThree.src = "images/Smiley2.png";
            } else {
                if (S == 4) {
                    smileFour.src = "images/Smiley2.png";
                } else {
                    if (S == 5) {
                        smileFive.src = "images/Smiley2.png";
                            end();
                    }
                }
            }
        }
    }
}

function end() {
    window.alert("Well Done,\nYou Have Won The Game,\nWould You Like To Play Again?");
    lblReply.innerText = " ";
    lblNum.innerText = " ";
    txtAns.innerText = " ";
    txtAns.disabled = true;
    btnCheck.disabled = true;
    window.location.reload()
}
