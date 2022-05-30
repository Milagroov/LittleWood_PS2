let gameConfig = {
    type: Phaser.AUTO,
    width: 1920,
    height: 1080,
    /*scale: {
      mode: Phaser.Scale.RESIZE,
      autoCenter: Phaser.Scale.CENTER_BOTH,
      min: {
        width: 720,
        height: 680
      },
      max: {
        width: 1280,
        height: 720,
      }},*/
    backgroundColor: '#ffffff',
    parent: 'game',
    physics: {
        default: 'arcade',
        arcade: {
            debug : true,fps:60,
            gravity: { y: 1000 },
        }
    },
    scene: [SceneMenu,SceneOptions,Scene,SceneUI,SceneOver,SceneVictory,SceneEnd]
};
let game = new Phaser.Game(gameConfig);

let langue = {langue:String,texture:Phaser.Textures};
let montremode = false;
let hardcoremode =false;
let mode = false;
let vie = 4;
let initialtime = 10;
let normalbeaten = false;
let montrebeaten = false;
let hardcorebeaten = false;
