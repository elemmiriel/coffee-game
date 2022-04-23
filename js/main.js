'use strict';

(function () {
  var step = 1;
  var moneyAmount = 0;
  var upgradeCoffeeCost = 20;
  var statPanel = document.querySelector('.statistic-panel');
  var money = statPanel.querySelector('.money');
  money.textContent = "$ " + moneyAmount;

  var sellCoffee = document.querySelector('.sell-coffee');
  var clickHandler = function () {
    console.log('click +1');
    moneyAmount += step;
    money.textContent = "$ " + moneyAmount;
  };
  sellCoffee.addEventListener('click', clickHandler);

  var upgradeCoffeeButton = document.querySelector('button,.coffee');
  var upgradeCoffee = function () {
    console.log('click upgrade +1');
    if (moneyAmount >= upgradeCoffeeCost){
      moneyAmount -= upgradeCoffeeCost;
      money.textContent = "$ " + moneyAmount;
      step += upgradeCoffeeCost/ 10;
      upgradeCoffeeCost *= 2;
      upgradeCoffeeButton.textContent = "Улучшить сорт кофе. Цена " + upgradeCoffeeCost;
    }
    
  };
  upgradeCoffeeButton.addEventListener('click', upgradeCoffee);







})();
