class scene extends Phaser.Scene {

  preload() {

    this.load.image('fond1', 'assets/fonds/fond1.png');
    this.load.image('fond2', 'assets/fonds/fond2.png');
    this.load.image('fond3', 'assets/fonds/fond3.png');
    this.load.image('fond4', 'assets/fonds/fond4.png');

    this.load.image('tiles', 'assets/tilesets/tileset.png');
    this.load.image('ronce', 'assets/tilesets/ronces.png');
    this.load.image('nuage', 'assets/tilesets/nuage.png');
    this.load.image('nuagemg', 'assets/tilesets/nuage_magique.png');

    this.load.spritesheet('player', 'assets/images/player.png', {frameWidth: 48, frameHeight: 48});
    this.load.tilemapTiledJSON('map', 'assets/tilemaps/level.json');
  }

  create() {

    const bg1 = this.add.image(0, 0, 'fond1').setOrigin(0, 0);

    const map = this.make.tilemap({key: 'map'});
    const tileset = map.addTilesetImage('tileset', 'tiles');

    this.platforms = map.createStaticLayer('terre', tileset);
    this.platforms.setCollisionByExclusion(-1, true);

    //controles
    keygauche = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
    keybas = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
    keydroite = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    keyespace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    //variables
    Vapeur = false;
    Magique = false;


    this.player = new Player(this);

    this.cameras.main.startFollow(this.player, true,0, 0);
  }

  update(){

    this.player.move();


  }





}
