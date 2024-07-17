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
        clicklvlcost = clicklvlcost + 100
        clickcosttest = clickcosttest + 100
        clickerlvltext.innerText = "Multitap Lvl " + clickerlvl + " " + clicklvlcost;
        scoreshow.innerText = "" + score;
    }
}

    clickerlvltext.innerText = "Multitap Lvl " + clickerlvl + " " + clicklvlcost + " T";

function point() {
    score = score + clickerlvl
    var scoreshow = document.getElementById('scoreshow')
    scoreshow.innerText = "" + score;
}
function myfunction() {
    document.getElementById('showButton').addEventListener('click',
        document.getElementById('center').classList.remove('hidden')
    );
}

document.addEventListener("DOMContentLoaded", function(){
    const button = document.getElementById('showButton');
    const element = document.getElementById('div');

    button.addEventListener('click', function () {
        element.classList.add('hidden2')
    });
});

document.addEventListener("DOMContentLoaded", function(){
    const button = document.getElementById('hideButton');
    const element = document.getElementById('div');

    button.addEventListener('click', function () {
        element.classList.remove('hidden2')
    });
});

function myfunction3() {
    document.getElementById('hideButton').addEventListener('click',
        document.getElementById('center').classList.add('hidden'));
}