// script.js
document.addEventListener("DOMContentLoaded", function() {
    let clicks = parseInt(localStorage.getItem('clicks')) || 0;
    let energy = parseInt(localStorage.getItem('energy')) || 500;
    let upgradeLevel = parseInt(localStorage.getItem('upgradeLevel')) || 1;
    let upgradeCost = parseInt(localStorage.getItem('upgradeCost')) || 10;
    
    const clicksElement = document.getElementById('clicks');
    const energyElement = document.getElementById('energy');
    const upgradeInfoElement = document.getElementById('upgrade-info');
    const upgradeCostElement = document.getElementById('upgradeCost');
    const clickerButton = document.getElementById('clicker');
    const upgradeButton = document.getElementById('upgrade');
    
    clicksElement.textContent = clicks;
    energyElement.textContent = energy;
    upgradeCostElement.textContent = upgradeCost;
    
    clickerButton.addEventListener('click', function() {
        if (energy > 0) {
            clicks += upgradeLevel;
            energy--;
            clicksElement.textContent = clicks;
            energyElement.textContent = energy;
            showUpgradeInfo(`+${upgradeLevel} `);
            saveGame();
        }
    });
    
    function showUpgradeInfo(text) {
        upgradeInfoElement.textContent = text;
        setTimeout(() => {
            upgradeInfoElement.textContent = '';
        }, 1000);
    }

    upgradeButton.addEventListener('click', function() {
        if (clicks >= upgradeCost) {
            clicks -= upgradeCost;
            upgradeLevel++;
            upgradeCost = (upgradeLevel + 1) * 10;
            energy = 100; // Восстановление энергии
            clicksElement.textContent = clicks;
            energyElement.textContent = energy;
            upgradeCostElement.textContent = upgradeCost;
            upgradeMessage.textContent = `+(левел: ${upgradeLevel})`;
            saveGame();
            setTimeout(() => upgradeMessage.textContent = '', 2000); // Скрыть сообщение через 2 секунды
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

    // Восстановление энергии
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
    const element1 = document.getElementById('upgrade');
    const element2 = document.getElementById('mains');
  
    button.addEventListener('click', function () {
        element1.classList.remove('hidden2')
        element2.classList.add('hidden2')
    });
  });
  
  document.addEventListener("DOMContentLoaded", function(){
    const button = document.getElementById('hideButton');
    const element1 = document.getElementById('upgrade');
    const element2 = document.getElementById('mains');
  
    button.addEventListener('click', function () {
        element1.classList.add('hidden2')
        element2.classList.remove('hidden2')
    });
  });