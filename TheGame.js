// Dom
const canvas = document.getElementById("canvas")
const ctx = canvas.getContext('2d')
canvas.width = 1000;
canvas.height = 500
ctx.clearRect(0, 0, canvas.width, canvas.height);
let x = 50;
let y = 50;
const walkspeed = 7;
const jumpspeed = 5;

// Dom pour le saut



// Personnages/Vilans/Bricks
const Player = new Image();
Player.src = 'Héros.png';

const Vilain1 = new Image();
Vilain1.src = 'Vilain.png'

const Vilain2 = new Image();
Vilain2.src = 'Vilain.png'


const Vilain3 = new Image();
Vilain3.src = 'Vilain.png'


const Vilain4 = new Image();
Vilain4.src = 'Vilain.png'


const Vilain5 = new Image();
Vilain5.src = 'Vilain.png'


const Vilain6 = new Image();
Vilain6.src = 'Vilain.png'


const Star = new Image();
Star.src = 'Superstar.png'

// Onload Personnages/Vilans/Bricks

Player.onload = function(){
    const scale = 0.3;
    drawPlayer(); // appel à la fonction drawPlayer() après le chargement de l'image
  };

  Vilain1.onload = function(){
    const scale = 0.3
    ctx.drawImage(Vilain1, 200 , 395, 200*scale, 334*scale);
    drawPlayer();
};

Vilain2.onload = function(){
    const scale = 0.3
    drawPlayer();
};

Vilain3.onload = function(){
    const scale = 0.3
    drawPlayer();
};


Vilain4.onload = function(){
    const scale = 0.3
    ctx.drawImage(Vilain4, 1 , 125, 200*scale, 334*scale);
    drawPlayer();
};


Vilain5.onload = function(){
    const scale = 0.3
    drawPlayer();
};


Vilain6.onload = function(){
    drawPlayer();
};




// Fonctions et Events
window.addEventListener('keydown', (event) => {
    switch(event.key) {
      case 'ArrowUp': y -= jumpspeed; break;
      case 'ArrowDown': y += jumpspeed; break;
      case 'ArrowLeft': x -= walkspeed; break;
      case 'ArrowRight': x += walkspeed; break;
    }
    drawPlayer();
  });
  
  function drawPlayer() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const scale = 0.3;
    const position = 7.6
    ctx.drawImage(Player, x, y*position, 200*scale, 334*scale);
    ctx.drawImage(Vilain1, 300, 300, 200*scale, 334*scale);
    ctx.drawImage(Vilain2, 400 , 275, 200*scale, 334*scale);
    ctx.drawImage(Vilain3, 500 , 125, 200*scale, 334*scale);
    ctx.drawImage(Vilain4, 1 , 125, 200*scale, 334*scale);
    ctx.drawImage(Vilain5, 100 , 20, 200*scale, 334*scale);;
    ctx.drawImage(Vilain6, 900 , 395, 200*scale, 334*scale);
    ctx.drawImage(Brick1, 300, 355, 180, 40);
    ctx.drawImage(Brick2, 570, 285, 180, 40);
    ctx.drawImage(Brick3, 1, 200, 550, 40);
    ctx.drawImage(Brick4, 820, 355, 180, 40);
    ctx.drawImage(Brick6, 100, 100, 180, 40);
    ctx.drawImage(Star, 10, 10, 225*scale, 225*scale);
    ctx.drawImage(Star, 10, 10, starSize*scale, starSize*scale);

    
    

  }


  function moveHero(e) { // Permet au Héros de pas dépaser le canvas
    switch (e.keyCode) {
      case 37: // left arrow key
        x -= speed;
        if (x < 0) x = 0;
        break;
      case 38: // up arrow key
        y -= speed;
        if (y < 0) y = 0;
        break;
      case 39: // right arrow key
        x += speed;
        if (x > canvas.width - 55 ) x = canvas.width - 55;
        break;
      case 40: // down arrow key
        y += speed;
        if (y > canvas.height - 100) y = canvas.height - 100;
        break;
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(Player, x, y, 100, 100);
  }
  
  document.addEventListener('keydown', moveHero);

  


const Brick1 = new Image();
Brick1.src = 'Brick.png'

Brick1.onload = function(){
    const scale = 0.3
    ctx.drawImage(Brick1, 300, 355, 180, 40);
};

const Brick2 = new Image();
Brick2.src = 'Brick.png'

Brick2.onload = function(){
    ctx.drawImage(Brick2, 570, 285, 180, 40);
};

const Brick3 = new Image();
Brick3.src = 'Brick.png'

Brick3.onload = function(){
    const scale = 0.3
    ctx.drawImage(Brick1, 1, 200, 550, 40);
};

const Brick4 = new Image();
Brick4.src = 'Brick.png'

Brick4.onload = function(){
    ctx.drawImage(Brick1, 820, 355, 180, 40);
};






const Brick6 = new Image();
Brick6.src = 'Brick.png'

Brick6.onload = function(){
    const scale = 0.3
};

