const Potion = require('./Potion');
const Character = require('./Character');

class Enemy extends Character {
    constructor(name, weapon) {
        super(name);
    
    this.weapon = weapon;
    this.potion = new Potion();
}

//function for description of enemy
getDescription() {
    return `A ${this.name} holding a ${this.weapon} has appeared!`;
    }
}

module.exports = Enemy;

//old code before changing to ES6 using class and character inhereit
//function for getHealth
// Enemy.prototype.getHealth = function () {
//     return `${this.name}'s health is now ${this.health}!`;
// };

// //function for isAlive
// Enemy.prototype.isAlive = function () {
//     if (this.health === 0) {
//         return false;
//     }
//     return true;
// };

// //function for reduceHealth
// Enemy.prototype.reduceHealth = function(health) {
//     this.health -= health;

//     if (this.health < 0) {
//         this.health = 0;
//     }
// };

// //function for getAttackValue
// Enemy.prototype.getAttackValue = function () {
//     const min = this.strength - 5;
//     const max = this.strength +5;

//     return Math.floor(Math.random() * (max - min) + min);
// };

