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
    scene: [SceneMenu,SceneOptions,Scene,SceneUI,SceneOver,SceneEnd]
};
let game = new Phaser.Game(gameConfig);

let langue = {langue:String,texture:Phaser.Textures};
let montremode = false;
let hardcoremode =false;
let mode = false;
let vie = 4;
let initialtime = 10;
