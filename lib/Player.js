const Potion = require("./Potion");
const Character = require('./Character');

class Player extends Character {
    constructor(name = '') {
        super(name);
    
    this.inventory = [new Potion('health'), new Potion()];
}

//function for getStats
getStats() {
    return {
        potions: this.inventory.length,
        health: this.health,
        strength: this.strength,
        agility: this.agility
        };
    }

//function for getInventory
getInventory() {
    if (this.inventory.length) {
        return this.inventory;
    }
    return false;
};

//function for addPotion
addPotion (potion) {
    this.inventory.push(potion);
};

//function for usePotion
usePotion(index) {
    const potion = this.inventory.splice(index, 1)[0];

    switch (potion.name) {
        case 'agility':
            this.agility += potion.value;
            break;
        case 'health':
            this.health += potion.value;
            break;
        case ' strength':
            this.strength += potion.value;
            break;
        }
    }
};

module.exports = Player;

//old code before changing to ES6 using class and character inhereit
//function for getHealth
// Player.prototype.getHealth = function () {
//     return `${this.name}'s health is now ${this.health}!`;
// };

// //function for isAlive
// Player.prototype.isAlive = function () {
//     if (this.health === 0) {
//         return false;
//     }
//     return true;
// };

//function for reduceHealth
// Player.prototype.reduceHealth = function(health) {
//     this.health -= health;

//     if (this.health < 0) {
//         this.health = 0;
//     }
// };

//function for getAttackValue
// Player.prototype.getAttackValue = function () {
//     const min = this.strength - 5;
//     const max = this.strength +5;

//     return Math.floor(Math.random() * (max - min) + min);
// };

