class Player {

  constructor(scene) {
    this.scene = scene
    this.lock=false
    //1100,800 start
    //
    this.player = this.scene.physics.add.sprite(1100, 800, 'player');
    this.player.setBounce(0);
    this.player.setCollideWorldBounds(false);
    this.player.setScale(0.15);


    //COLLIDERS
    this.scene.physics.add.collider(this.player, this.scene.platforms);
    this.scene.physics.add.collider(this.player, this.scene.roncesgroup, playerHit, null, this);
    this.scene.physics.add.collider(this.player, this.scene.jaunelayer);
    this.scene.physics.add.collider(this.player, this.scene.bleulayer);
    this.scene.physics.add.collider(this.player, this.scene.roselayer);

    function playerHit(player) {
      this.player.setVelocity(0, 0);
      this.player.setX(this.scene.savedX);
      this.player.setY(this.scene.savedY);
      //this.player.play('idle', true);
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
  }

  moveRight() {
    this.player.setVelocityX(300);
    this.player.setFlipX(true);
  }

  moveLeft() {
    this.player.setVelocityX(-300);
    this.player.setFlipX(false);
  }

  moveIdle() {
    this.player.setVelocityX(0);
  }
}





