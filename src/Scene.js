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
    const terre = map.createStaticLayer('terre', tileset, 0, -200);
    terre.setCollisionByExclusion(-1, true);

    this.player = this.physics.add.sprite(0, 879, 'player')
    this.player.setBounce(0.1);
    this.player.setCollideWorldBounds(true);
    this.physics.add.collider(this.player, terre);

    this.cameras.main.startFollow(this.player, true,0, 0);

    this.initKeyboard();
  }

  initKeyboard() {
    let me = this;
    this.input.keyboard.on('keydown', function (kevent) {
      switch (kevent.keyCode) {
        case Phaser.Input.Keyboard.KeyCodes.RIGHT:
          me.player.setVelocityX(200);
          break;
        case Phaser.Input.Keyboard.KeyCodes.LEFT:
          me.player.setVelocityX(-200);
          break;
        case Phaser.Input.Keyboard.KeyCodes.UP:
          break;
        case Phaser.Input.Keyboard.KeyCodes.DOWN:
          break;
      }
    });
    this.input.keyboard.on('keyup', function (kevent) {
      switch (kevent.keyCode) {
        case Phaser.Input.Keyboard.KeyCodes.RIGHT:
          me.player.setVelocityX(0);
          break;
        case Phaser.Input.Keyboard.KeyCodes.LEFT:
          me.player.setVelocityX(0);
          break;
        case Phaser.Input.Keyboard.KeyCodes.UP:
          break;
        case Phaser.Input.Keyboard.KeyCodes.DOWN:
          break;
      }
    });
  }
}
