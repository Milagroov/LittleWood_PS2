class Player {

  constructor(scene) {
    this.scene = scene
    this.cameras = scene

    this.player = this.scene.physics.add.sprite(0, 879, 'player');
    this.player.setBounce(0);
    this.player.setCollideWorldBounds(false);
    this.scene.physics.add.collider(this.player, this.scene.platforms);


  }

  jump() {
    this.player.setVelocityY(-420);
  }

  moveRight() {
    this.player.setVelocityX(300);
    this.player.setFlipX(false);
  }

  moveLeft() {
    this.player.setVelocityX(-300);
    this.player.setFlipX(true);
  }

  moveIdle() {
    this.player.setVelocityX(0);
  }

  move() {
    if (keyespace.isDown && this.player.body.onFloor) {
      this.jump()
    }
    switch (true) {

      case keygauche.isDown:
        this.moveLeft()
        break;

      case keydroite.isDown:
        this.moveRight();
        break;

      case this.player.body.onFloor():
        this.moveIdle();
        break;

    }
  }




}
