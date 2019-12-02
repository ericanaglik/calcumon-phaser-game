import Phaser from "phaser";
import base from "./assets/Asset5.png";
import crystal from "./assets/Asset6.png";
import map from "./assets/Asset18.png";
import octopuskey from "./assets/octopuskey.png";


const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  /* Sets the width and the height of the game screen */
  width: 1500,
  height: 900,
  backgroundColor: '#1b2543',
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
  this.load.image("key", octopuskey);
}

function create() {
  /* Sets the x and y location of the images */
  const lock = this.add.image(200, 150, "lock");
  const coral = this.add.image(200, 650, "coral");
  const map = this.add.image(950, 200, "map");

  /* This is a mess, theres gotta be a more efficient
  way of doing this but i dont feel like finding it rn */
  const key1 = this.add.image(550, 650, "key");
  const key2 = this.add.image(800, 650, "key");
  const key3 = this.add.image(1050, 650, "key");
  const key4 = this.add.image(1300, 650, "key");

  /* Again, a mess, will refactor later
  This sets the size of the keys and scales the size */
  key1.displayWidth = 300
  key1.scaleY = key1.scaleX;
  key2.displayWidth = 300
  key2.scaleY = key2.scaleX;
  key3.displayWidth = 300
  key3.scaleY = key3.scaleX;
  key4.displayWidth = 300
  key4.scaleY = key4.scaleX;
  
  /* Adds the math problem text and places it on the map */
  this.add.text(900, 170, '12 - 3', { fontSize: '50px', fill: '#000' });

  /* Text for answers */
  this.add.text(600, 565, '24', { fontSize: '50px', fill: '#000' });
  this.add.text(850, 565, '36', { fontSize: '50px', fill: '#000' });
  this.add.text(1100, 565, '42', { fontSize: '50px', fill: '#000' });
  this.add.text(1350, 565, '32', { fontSize: '50px', fill: '#000' });

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
