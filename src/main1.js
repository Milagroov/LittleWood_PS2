let gameConfig = {
    type: Phaser.AUTO,
    width: 1080,
    height: 720,
    backgroundColor: '#ffffff',
    parent: 'game',
    physics: {
        default: 'arcade',
        arcade: {
            debug : true,
            gravity: { y: 100 }
        }
    },
    scene: new Scene()
};
let game = new Phaser.Game(gameConfig);
