import Phaser from "phaser";
import base from "./assets/Asset5.png";
import crystal from "./assets/Asset6.png";


const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 800,
  height: 900,
  scene: {
    preload: preload,
    create: create
  }
};

const game = new Phaser.Game(config);

function preload() {
  this.load.image("lock", crystal);
  this.load.image("coral", base);
}

function create() {
  const lock = this.add.image(400, 150, "lock");
  const coral = this.add.image(400, 650, "coral");

  this.tweens.add({
    targets: lock,
    y: 250,
    duration: 3000,
    ease: "Power2",
    yoyo: true,
    loop: -1
  });
}
