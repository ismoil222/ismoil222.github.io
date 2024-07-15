var score = 0
var clickerlvltext = document.getElementById('lvlupclicker')
var autolvltext = document.getElementById('AutoClick')
var scoreshow = document.getElementById('scoreshow')
var energybtn = document.getElementById('energybtn')

scoreshow.innerText = "0";

var clickerlvl = 1
var clickcosttest = 50
var clicklvlcost = 50

function clicklvl() {
    if (score > clickcosttest) {
        clickerlvl++
        score = score - clicklvlcost
        clicklvlcost = clicklvlcost + 200
        clickcosttest = clickcosttest + 200
        clickerlvltext.innerText = "Clicker- Lvl " + clickerlvl + " - Cost: " + clicklvlcost;
        scoreshow.innerText = "" + score;
    }
}

var autocosttest = 50
var autocost = 1000
var autolvl = 0

function AutoClick() {
    if (score > autocosttest) {
        autolvl ++
        score = score - autocost
        autocost = autocost + 30
        autocosttest = autocosttest + 30
        autolvltext.innerText = "Auto Click- Lvl " + autolvl + " - Cost: " + autocost;
        scoreshow.innerText = "" + score;
    }
}

    clickerlvltext.innerText = "Clicker- Lvl " + clickerlvl + " - Cost: " + clicklvlcost;

    autolvltext.innerText = "Buy Auto Click -" + " Cost: " + autocost;
function point() {
    score = score + clickerlvl
    var scoreshow = document.getElementById('scoreshow')
    scoreshow.innerText = "" + score;
}

