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

    //const bg1 = this.add.image(0, 0, 'fond1').setOrigin(0, 0);

    const map = this.make.tilemap({key: 'map'});
    const tileset = map.addTilesetImage('tileset', 'tiles');
    const fond1tile = map.addTilesetImage('tilesetf1', 'fond1');
    const fond2tile = map.addTilesetImage('tilesetf2', 'fond2');
    const fond3tile = map.addTilesetImage('tilesetf3', 'fond3');
    const fond4tile = map.addTilesetImage('tilesetf4', 'fond4');


    //calque terre
    this.platforms = map.createStaticLayer('terre', tileset,0,0/*-200*/);
    this.platforms.setCollisionByExclusion(-1, true);

    //calque fond1
    this.fond1 = map.createStaticLayer('fond1t', fond1tile,0,0);

    //groupe ronces
    this.roncesgroup= this.physics.add.group({
      allowGravity: false,
      immovable: true
    })
    map.getObjectLayer('roncesplan').objects.forEach((roncesgroup) => {
      const test = this.roncesgroup.create(roncesgroup.x, roncesgroup.y - roncesgroup.height, 'ronce').setOrigin(0);
    });

    //groupe nuages
    this.nuagesgroup= this.physics.add.group({
      allowGravity: false,
      immovable: true,
    })
    map.getObjectLayer('nuagesplan').objects.forEach((nuagesgroup) => {
      const test = this.nuagesgroup.create(nuagesgroup.x, nuagesgroup.y /*-200*/ - nuagesgroup.height, 'nuage').setOrigin(0);
    });
    this.nuagesgroup.setAlpha(0);

    //groupe nuages Magique
    this.nuagesMgroup= this.physics.add.group({
      allowGravity: false,
      immovable: true
    })
    map.getObjectLayer('nuagesmplan').objects.forEach((nuagesMgroup) => {
      const test = this.nuagesMgroup.create(nuagesMgroup.x, nuagesMgroup.y - nuagesMgroup.height, 'nuagemg').setOrigin(0);
    });
    this.nuagesMgroup.setAlpha(0);

    //controles
    keygauche = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
    keybas = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
    keydroite = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    keyespace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    //variables
    mode = false;


    this.player = new Player(this);

    this.cameras.main.startFollow(this.player.player, true,1, 0);
    this.inputManager();

  }

  update(){
    this.player.move();
    this.player.modeswitch();
  }





}
