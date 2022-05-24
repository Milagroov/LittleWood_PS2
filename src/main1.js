let gameConfig = {
    type: Phaser.AUTO,
    width: 1920,
    height: 1080,
    backgroundColor: '#ffffff',
    parent: 'game',
    physics: {
        default: 'arcade',
        arcade: {
            debug : true,
            gravity: { y: 1000 }
        }
    },
    scene: new scene()
};
let game = new Phaser.Game(gameConfig);

let keygauche;
let keybas;
let keydroite;
let keyespace;
let mode;
