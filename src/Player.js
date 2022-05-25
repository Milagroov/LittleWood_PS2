class Player {

  constructor(scene) {
    this.scene = scene
    this.cameras = scene
    this.lock=false
    this.player = this.scene.physics.add.sprite(0, 700, 'player');
    this.player.setBounce(0);
    this.player.setCollideWorldBounds(false);


    //COLLIDERS
    this.scene.physics.add.collider(this.player, this.scene.platforms);
    this.scene.physics.add.collider(this.player, this.scene.roncesgroup, playerHit, null, this);

    function playerHit(player, ronces) {
      this.player.setVelocity(0, 0);
      this.player.setX(50);
      this.player.setY(850);
      //this.player.play('idle', true);
      this.player.setAlpha(0);
      let tw = this.scene.tweens.add({
        targets: this.player,
        alpha: 1,
        duration: 100,
        ease: 'Linear',
        repeat: 5,
      });
    }


  }


  create(){
    this.saut = false;
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





