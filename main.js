// script.js
document.addEventListener("DOMContentLoaded", function() {
    let clicks = parseInt(localStorage.getItem('clicks')) || 0;
    let energy = parseInt(localStorage.getItem('energy')) || 100;
    let upgradeLevel = parseInt(localStorage.getItem('upgradeLevel')) || 1;
    let upgradeCost = parseInt(localStorage.getItem('upgradeCost')) || 10;
    
    const clicksElement = document.getElementById('clicks');
    const energyElement = document.getElementById('energy');
    const upgradeCostElement = document.getElementById('upgradeCost');
    const clickerButton = document.getElementById('clicker');
    const upgradeButton = document.getElementById('upgrade');
    
    clicksElement.textContent = clicks;
    energyElement.textContent = energy;
    upgradeCostElement.textContent = upgradeCost;
    
    clickerButton.addEventListener('click', function() {
        if (energy > 0) {
            clicks += upgradeLevel;
            energy-=upgradeLevel;
            clicksElement.textContent = clicks;
            energyElement.textContent = energy;
            saveGame();
        }
    });
    
    

    upgradeButton.addEventListener('click', function() {
        if (clicks >= upgradeCost) {
            clicks -= upgradeCost;
            upgradeLevel++;
            upgradeCost = (upgradeLevel + 1) * 10;
            energy = 100; // Восстановление энергии
            clicksElement.textContent = clicks;
            energyElement.textContent = energy;
            upgradeCostElement.textContent = upgradeCost;
            saveGame();
        }
    });

    upgradeButton.addEventListener('click', function() {
        if (clicks >= upgradeCost) {
            clicks -= upgradeCost;
            upgradeCost += 10;
            energy = 100;
            updateUI();
            saveGame();
        }
    });

    document.getElementById('clicker').addEventListener('click', () => {
        const clickResult = document.getElementById('click-result');
        clickResult.textContent = `+${upgradeLevel}`;
        clickResult.classList.add('show');
        
        setTimeout(() => {
            clickResult.classList.remove('show');
        }, 1000);
    });
    


    function updateUI() {
        clicksElement.textContent = clicks;
        energyElement.textContent = energy;
        upgradeCostElement.textContent = upgradeCost;
        upgradeButton.classList.toggle('disabled', clicks < upgradeCost);
    }

    function saveGame() {
        localStorage.setItem('clicks', clicks);
        localStorage.setItem('energy', energy);
        localStorage.setItem('upgradeCost', upgradeCost);
    }

    setInterval(function() {
        if (energy < 100) {
            energy++;
            updateUI();
            saveGame();
        }
    }, 1000);

    updateUI();
});

document.addEventListener("DOMContentLoaded", function(){
    const button = document.getElementById('showButton');
    const element1 = document.getElementById('upgrade1');
    const element2 = document.getElementById('mains');

    button.addEventListener('click', function () {
        element1.classList.remove('hidden2')
        element2.classList.add('hidden2')
    });
});

document.addEventListener("DOMContentLoaded", function(){
    const button = document.getElementById('hideButton');
    const element1 = document.getElementById('upgrade1');
    const element2 = document.getElementById('mains');

    button.addEventListener('click', function () {
        element1.classList.add('hidden2')
        element2.classList.remove('hidden2')
    });
});

document.addEventListener("DOMContentLoaded", function(){
    const button = document.getElementById('clicker');
    const element12 = document.getElementById('clicker');

    button.addEventListener('click', function () {
        element12.classList.add('tapp')
    });
});

document.addEventListener("DOMContentLoaded", function(){
    const button2 = document.getElementById('showButton');
    const button3 = document.getElementById('showButton');

    button2.addEventListener('click', function () {
        button3.classList.add('clicked')
    });
});