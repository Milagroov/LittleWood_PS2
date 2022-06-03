class Player {

  constructor(scene) {
    this.scene = scene
    this.lock=false
    //1100,800 start
    //
    this.player = this.scene.physics.add.sprite(1100, 800, 'atlasanim');
    this.player.setBounce(0);
    this.player.setCollideWorldBounds(false);
    this.player.setScale(0.15);


    //COLLIDERS
    this.scene.physics.add.collider(this.player, this.scene.platforms);
    this.scene.physics.add.collider(this.player, this.scene.roncesgroup, playerHit, null, this);
    this.scene.physics.add.collider(this.player, this.scene.jaunelayer);
    this.scene.physics.add.collider(this.player, this.scene.bleulayer);
    this.scene.physics.add.collider(this.player, this.scene.roselayer);

    this.scene.anims.create({
      key: 'jumpanim',
      frames: this.scene.anims.generateFrameNames('atlasanim',{
        prefix:'jump',
        start: 1,
        end: 4,
      }),
      frameRate: 8,
      repeat: -1,
    });

    this.scene.anims.create({
      key: 'idleanim',
      frames: this.scene.anims.generateFrameNames('atlasanim',{
        prefix:'idle',
        start: 1,
        end: 20,
      }),
      frameRate: 10,
      repeat: -1,
    });

    this.scene.anims.create({
      key: 'moveanim',
      frames: this.scene.anims.generateFrameNames('atlasanim',{
        prefix:'run',
        start: 1,
        end: 3,
      }),
      frameRate: 8,
      repeat: -1,
    });


    function playerHit(player) {
      this.scene.sound.play('hit',{volume:0.2 });
      this.player.setVelocity(0, 0);
      this.player.setX(this.scene.savedX);
      this.player.setY(this.scene.savedY);
      this.player.play('idleanim', true);
      this.player.setAlpha(0);
      let tw = this.scene.tweens.add({
        targets: this.player,
        alpha: 1,
        duration: 100,
        ease: 'Linear',
        repeat: 5,
      });
      vie = vie-1;

    }
  }

  create(){
    this.saut = false;
    this.lockmode = false;
  }


  jump() {
    this.player.setVelocityY(-600);

    //this.player.play('jumpanim', true);
  }

  moveRight() {
    this.player.setVelocityX(300);
    this.player.setFlipX(true);
    if (this.player.body.onFloor()) {
      this.player.play('moveanim', true);
    }
  }

  moveLeft() {
    this.player.setVelocityX(-300);
    this.player.setFlipX(false);
    if (this.player.body.onFloor()) {
      this.player.play('moveanim', true);
    }
  }

  moveIdle() {
    this.player.setVelocityX(0);
    if (this.player.body.onFloor()) {
      this.player.play('idleanim', true);
    }
  }

}







