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
        clickerlvltext.innerText = "Clicker- Lvl " + clickerlvl + " - Cost: " + clicklvlcost;
        scoreshow.innerText = "" + score;
    }
}

var autocosttest = 50
var autocost = 100
var autolvl = 1

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

$(document).ready(function(){
    var stars=800;
    var $stars=$(".stars");
    var r=800;
    for(var i=0;i<stars;i++){
        var $star=$("<div/>").addClass("star");
        $stars.append($star);
    }
    $(".star").each(function(){
            var cur=$(this);
            var s=0.2+(Math.random()*1);
            var curR=r+(Math.random()*300);
            cur.css({ 
            transformOrigin:"0 0 "+curR+"px",
            transform:" translate3d(0,0,-"+curR+"px) rotateY("+(Math.random()*360)+"deg) rotateX("+(Math.random()*-50)+"deg) scale("+s+","+s+")" 
        })
    })
})