class Tableau1 extends Phaser.Scene{

    preload() {

        this.load.image('fond1', 'assets/fonds/fond1.png');
        this.load.image('fond2', 'assets/fonds/fond2.png');
        this.load.image('fond3', 'assets/fonds/fond3.png');
        this.load.image('fond4', 'assets/fonds/fond4.png');

        this.load.image('tiles', 'assets/tilesets/tileset.png');
        this.load.image('ronce', 'assets/tilesets/ronces.png');
        this.load.image('ronce', 'assets/tilesets/nuage.png');
        this.load.image('ronce', 'assets/tilesets/nuage_magique.png');


        this.load.spritesheet('player', 'assets/images/player.png', {frameWidth: 48, frameHeight: 48});
        this.load.tilemapTiledJSON('map', 'assets/tilemaps/level1.tmj');

    }

    create() {

        this.bg1 = this.add.image(0, 0, 'fond1').setOrigin(0, 0);

        const map = this.make.tilemap({ key: 'map' });
        const tileset = map.addTilesetImage('tileset', 'tiles');
        const terre = map.createStaticLayer('terre', tileset, 0, 200);
        terre.setCollisionByExclusion(-1, true);

        this.player = this.physics.add.sprite(200, 100, "player")
        this.player.flipX = true;
        this.player.setBounce(0.2);
        this.player.setCollideWorldBounds(true);
        this.player.setDepth(0);

        this.cameras.main.startFollow(this.player);
    }


}