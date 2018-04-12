// Enemies our player must avoid
var Enemy = function () {

    // Add height and width to collision
    this.width = 100;
    width = 80
    this.height = 150;
    height = 130;

    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.positionX = -100;

    //random route to enemies create
    this.routeY = [60, 150, 230];
    this.positionY = this.routeY[Math.floor(Math.random() * Math.floor(3))];

    //random speed to enemy
    this.speed = Math.floor(Math.random() * 200) + 1;

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function (dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.positionX += this.speed * dt;

    // condition to recreate enemies
    if (this.positionX > 500) {
        this.positionX = -100;
        this.positionY = this.routeY[Math.floor(Math.random() * Math.floor(3))];
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.positionX, this.positionY, this.width, this.height);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function () {

    // Add height and width to collision
    this.width = 100;
    this.height = 150;

    // Route to create random
    this.routeY = [330, 410];
    this.routeX = [0, 100, 200, 300, 400];

    // Route random
    this.positionY = this.routeY[Math.floor(Math.random() * Math.floor(2))];
    this.positionX = this.routeX[Math.floor(Math.random() * Math.floor(5))];

    // Render character
    this.sprite = 'images/char-boy.png';
};

Player.prototype.update = function () {

    // Checking if won
    if (this.positionY == 0) {
        this.positionX = this.routeX[Math.floor(Math.random() * Math.floor(5))];
        this.positionY = this.routeY[Math.floor(Math.random() * Math.floor(2))];
    }

};

Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.positionX, this.positionY, this.width, this.height);
};

Player.prototype.handleInput = function () {

    var code = event.keyCode;

    //MOVE Left
    if (code == 37 && this.positionX == 200) {
        this.positionX = 100;
    }

    else if (code == 37 && this.positionX == 100) {
        this.positionX = 0;
    };

    //MOVE Back Left
    if (code == 39 && this.positionX == 0) {
        this.positionX = 100;
    }

    else if (code == 39 && this.positionX == 100) {
        this.positionX = 200;
    }

    //MOVE Right
    else if (code == 39 && this.positionX == 200) {
        this.positionX = 300;
    }

    else if (code == 39 && this.positionX == 300) {
        this.positionX = 400;
    }

    //MOVE Back Right
    if (code == 37 && this.positionX == 400) {
        this.positionX = 300;
    }

    else if (code == 37 && this.positionX == 300) {
        this.positionX = 200;
    };

    //MOVE UP
    if (code == 38 && this.positionY == 410) {
        this.positionY = 330;
    }

    else if (code == 38 && this.positionY == 330) {
        this.positionY = 250;
    }

    else if (code == 38 && this.positionY == 250) {
        this.positionY = 160;
    }

    else if (code == 38 && this.positionY == 160) {
        this.positionY = 70;
    }

    else if (code == 38 && this.positionY == 70) {
        this.positionY = 0;
    };

    //MOVE DOWN
    if (code == 40 && this.positionY == 70) {
        this.positionY = 160;
    }

    else if (code == 40 && this.positionY == 160) {
        this.positionY = 250;
    }

    else if (code == 40 && this.positionY == 250) {
        this.positionY = 330;
    }

    else if (code == 40 && this.positionY == 330) {
        this.positionY = 410;
    };
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var allEnemies = [new Enemy(), new Enemy(), new Enemy(), new Enemy(), new Enemy()];
var player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});