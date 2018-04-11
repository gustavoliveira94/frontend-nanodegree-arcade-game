// Enemies our player must avoid
var Enemy = function () {

    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.positionX = -100;

    // add height and width to collision
    this.width = 100;
    this.height = 150;

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
    // Route to create random
    this.routeY = [330, 410];
    this.routeX = [0, 100, 200, 300, 400];

    // Route random
    this.positionY = this.routeY[Math.floor(Math.random() * Math.floor(2))];
    this.positionX = this.routeX[Math.floor(Math.random() * Math.floor(5))];

    // add height and width to collision
    this.width = 100;
    this.height = 150;

    // render character
    this.sprite = 'images/char-boy.png';
};

Player.prototype.update = function () {
    this.winner();
    this.collision();
};

Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.positionX, this.positionY, this.width, this.height);
};

Player.prototype.handleInput = function () {

    var code = event.keyCode;

    //Route Left
    if (code == 37 && this.positionX == 200) {
        this.positionX = 100;
    }

    else if (code == 37 && this.positionX == 100) {
        this.positionX = 0;
    };

    //Route Back Left
    if (code == 39 && this.positionX == 0) {
        this.positionX = 100;
    }

    else if (code == 39 && this.positionX == 100) {
        this.positionX = 200;
    }

    //Route Right
    else if (code == 39 && this.positionX == 200) {
        this.positionX = 300;
    }

    else if (code == 39 && this.positionX == 300) {
        this.positionX = 400;
    }

    //Route Back Right
    if (code == 37 && this.positionX == 400) {
        this.positionX = 300;
    }

    else if (code == 37 && this.positionX == 300) {
        this.positionX = 200;
    };

    //Route Y UP
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

    //Route Y Down
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

// function collision
Player.prototype.collision = function () {

    var height = this.height;
    var width = this.width;
    var positionX = this.positionX;
    var positionY = this.positionY;

    //collision object [0]
    if (positionX + (height && width) > allEnemies[0].positionX &&
        positionX < (height && width) + allEnemies[0].positionX &&
        positionY + (height && width) > allEnemies[0].positionY &&
        positionY < (height && width) + allEnemies[0].positionY) {

        this.positionX = this.routeX[Math.floor(Math.random() * Math.floor(5))];
        this.positionY = this.routeY[Math.floor(Math.random() * Math.floor(2))];

    }

    //collision object [1]
    if (positionX + (height && width) > allEnemies[1].positionX &&
        positionX < (height && width) + allEnemies[1].positionX &&
        positionY + (height && width) > allEnemies[1].positionY &&
        positionY < (height && width) + allEnemies[1].positionY) {

        this.positionX = this.routeX[Math.floor(Math.random() * Math.floor(5))];
        this.positionY = this.routeY[Math.floor(Math.random() * Math.floor(2))];

    }

    //collision object [2]
    if (positionX + (height && width) > allEnemies[2].positionX &&
        positionX < (height && width) + allEnemies[2].positionX &&
        positionY + (height && width) > allEnemies[2].positionY &&
        positionY < (height && width) + allEnemies[2].positionY) {

        this.positionX = this.routeX[Math.floor(Math.random() * Math.floor(5))];
        this.positionY = this.routeY[Math.floor(Math.random() * Math.floor(2))];

    }

    //collision object [3]
    if (positionX + (height && width) > allEnemies[3].positionX &&
        positionX < (height && width) + allEnemies[3].positionX &&
        positionY + (height && width) > allEnemies[3].positionY &&
        positionY < (height && width) + allEnemies[3].positionY) {

        this.positionX = this.routeX[Math.floor(Math.random() * Math.floor(5))];
        this.positionY = this.routeY[Math.floor(Math.random() * Math.floor(2))];

    }

    //collision object [4]
    if (positionX + (height && width) > allEnemies[4].positionX &&
        positionX < (height && width) + allEnemies[4].positionX &&
        positionY + (height && width) > allEnemies[4].positionY &&
        positionY < (height && width) + allEnemies[4].positionY) {

        this.positionX = this.routeX[Math.floor(Math.random() * Math.floor(5))];
        this.positionY = this.routeY[Math.floor(Math.random() * Math.floor(2))];

    }
}

// function winner - if you can get in the water
Player.prototype.winner = function () {
    if (this.positionY == 0) {
        this.positionX = this.routeX[Math.floor(Math.random() * Math.floor(5))];
        this.positionY = this.routeY[Math.floor(Math.random() * Math.floor(2))];
    }
}


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