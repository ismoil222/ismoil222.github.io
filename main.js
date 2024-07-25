
const setCookie = (cname, cvalue, exdays) => {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }


  const getCookie = (cname) => {
    const name = cname + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  document.addEventListener("DOMContentLoaded", function() {
    let clickCount = parseInt(getCookie("clickCountCookie")) || 0;
    let boostActive = false;
    const clickLimit = 5000;
    let clicksRemaining = parseInt(getCookie("clicksRemainingCookie")) || clickLimit;
    const lastExitTime = parseInt(getCookie("lastExitTimeCookie")) || Date.now();
    const currentTime = Date.now();
    const elapsedSeconds = Math.floor((currentTime - lastExitTime) / 1000);
    clicksRemaining = Math.min(clickLimit, clicksRemaining + 2 * elapsedSeconds);
    const clickCountSpan = document.getElementById('clickCount');
    const tapCircle = document.getElementById('tapCircle');
    const progressBar = document.getElementById('progressBar');
    const updateClickCount = (increment) => {
      clickCount += increment;
      clickCountSpan.textContent = clickCount;
      setCookie("clickCountCookie", clickCount, 30);
    };
    const updateProgressBar = () => {
      progressBar.style.width = `${(clicksRemaining / clickLimit)* 100}%`;
      progressBar.textContent = `⚡ ${clicksRemaining} / ${clickLimit}⚡`;
    };
    const resetProgressBar = () => {
      clicksRemaining = clickLimit;
      updateProgressBar();
    };
    tapCircle.addEventListener('click', function() {
      const increment = boostActive ? 15 : 1;
      if (clicksRemaining > 0) {
        clicksRemaining--;
        updateClickCount(increment);
        updateProgressBar();
      }
    });
    setInterval(() => {
      if (!boostActive && clicksRemaining < clickLimit) {
        clicksRemaining += 1;
        if (clicksRemaining > clickLimit) {
          clicksRemaining = clickLimit;
        }
        updateProgressBar();
    }
    }, 1000);
    setInterval(resetProgressBar, 15000); // Reset every 15 seconds
    updateProgressBar();
    updateClickCount(0);
});
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