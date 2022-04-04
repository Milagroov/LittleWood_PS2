class Tableau1 extends Phaser.Scene{

    preload() {

        this.load.image('background', 'assets/images/background.png');
        this.load.spritesheet('player', 'assets/images/player.png', {frameWidth: 48, frameHeight: 48});
    }

    create() {

        this.bg1 = this.add.image(0, 0, 'background').setOrigin(0, 0);

        this.player = this.physics.add.sprite(200, 100, "player")
        this.player.flipX = true;
        this.player.setBounce(0.2);
        this.player.setCollideWorldBounds(true);
        this.player.setDepth(0);

        this.cameras.main.startFollow(this.player);
    }


}