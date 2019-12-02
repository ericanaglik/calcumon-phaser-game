import Phaser from "phaser";
import base from "./assets/Asset5.png";
import crystal from "./assets/Asset6.png";
import map from "./assets/Asset18.png";


const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  /* Sets the width and the height of the game screen */
  width: 1500,
  height: 900,
  scene: {
    preload: preload,
    create: create
  }
};

const game = new Phaser.Game(config);

function preload() {
  /* Loads the images into the game */
  this.load.image("lock", crystal);
  this.load.image("coral", base);
  this.load.image("map", map);
}

function create() {
  /* Sets the x and y location of the images */
  const lock = this.add.image(400, 150, "lock");
  const coral = this.add.image(400, 650, "coral");
  const map = this.add.image(900, 400, "map");
  
  /* Adds the math problem text and places it on the map */
  this.add.text(850, 370, '82 - 36', { fontSize: '50px', fill: '#000' });

  /* Creates the hover effect for the crystal ball 
  Documentation: https://phaser.io/examples/v3/view/tweens/yoyo-tween */
  this.tweens.add({
    targets: lock,
    y: 250,
    duration: 3000,
    ease: "Power2",
    yoyo: true,
    loop: -1
  });
}
