const Potion = require("./Potion");

function Player(name = '') {
    this.name = name;

    this.health = Math.floor(Math.random() * 10 + 95);
    this.strength = Math.floor(Math.random() * 5 + 7);
    this.agility = Math.floor(Math.random() * 5 + 7);

    this.inventory = [new Potion('health'), new Potion()];
}

//function for getStats
Player.prototype.getStats = function () {
    return {
        potions: this.inventory.length,
        health: this.health,
        strength: this.strength,
        agility: this.agility
    };
};

//function for getInventory
Player.prototype.getInventory = function () {
    if (this.inventory.length) {
        return this.inventory;
    }
    return false;
};

//function for getHealth
Player.prototype.getHealth = function () {
    return `${this.name}'s health is now ${this.health}!`;
};

//function for isAlive
Player.prototype.isAlive = function () {
    if (this.health === 0) {
        return false;
    }
    return true;
};

//function for reduceHealth
Player.prototype.reduceHealth = function(health) {
    this.health -= health;

    if (this.health < 0) {
        this.health = 0;
    }
};

//function for getAttackValue
Player.prototype.getAttackValue = function () {
    const min = this.strength - 5;
    const max = this.strength +5;

    return Math.floor(Math.random() * (max - min) + min);
};

//function for addPotion
Player.prototype.addPotion = function(potion) {
    this.inventory.push(potion);
};

//function for usePotion
Player.prototype.usePotion = function(index) {
    const potion = this.getInventory().splice(index, 1)[0];

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
};

module.exports = Player;