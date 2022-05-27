class Scene extends Phaser.Scene {

  constructor (){
    super("playGame")
  }

  preload() {

    this.load.image('bg1', 'assets/fonds/fond1.png');
    this.load.image('bg2', 'assets/fonds/fond2.png');
    this.load.image('bg3', 'assets/fonds/fond3.png');
    this.load.image('bg4', 'assets/fonds/fond4.png');

    this.load.image('coeurgele', 'assets/items/coeurgel.png');
    this.load.image('moonplant', 'assets/items/moonplant.png');

    this.load.image('tiles', 'assets/tilesets/tileset.png');
    this.load.image('ronce', 'assets/tilesets/ronces.png');
    this.load.image('nuage', 'assets/tilesets/nuage.png');
    this.load.image('nuagemg', 'assets/tilesets/nuage_magique.png');
    this.load.image('checkpoint', 'assets/items/chekpoint.png');

    this.load.spritesheet('player', 'assets/images/player.png', {frameWidth: 48, frameHeight: 48});
    this.load.tilemapTiledJSON('map', 'assets/tilemaps/level.json');
  }

  create() {



    //const bg1 = this.add.image(0, 0, 'fond1').setOrigin(0, 0);
    const map = this.make.tilemap({key: 'map'});
    const tileset = map.addTilesetImage('tileset', 'tiles');
    const fond1tile = map.addTilesetImage('fond1', 'bg1');
    const fond2tile = map.addTilesetImage('fond2', 'bg2');
    const fond3tile = map.addTilesetImage('fond3', 'bg3');
    const fond4tile = map.addTilesetImage('fond4', 'bg4');


    //calque fonds
    this.fond1 = map.createLayer('fond1t', fond1tile,0,0);
    this.fond2 = map.createLayer('fond2t', fond2tile,0,0);
    this.fond3 = map.createLayer('fond3t', fond3tile,0,0);
    this.fond4 = map.createLayer('fond4t', fond4tile,0,0);

    this.platforms = map.createLayer('terre', tileset,0,0);
    this.platforms.setCollisionByExclusion(-1, true);

    //PARALLAXE
    this.fond2.scrollFactorX=0.4;
    this.fond3.scrollFactorX=0.6;
    this.fond4.scrollFactorX=0.8;
    this.platforms.scrollFactorX=1;

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

    //groupe nuages Magique
    this.nuagesMgroup= this.physics.add.group({
      allowGravity: false,
      immovable: true
    })
    map.getObjectLayer('nuagesmplan').objects.forEach((nuagesMgroup) => {
      const test = this.nuagesMgroup.create(nuagesMgroup.x, nuagesMgroup.y - nuagesMgroup.height, 'nuagemg').setOrigin(0);
    });


    this.player = new Player(this);
    this.emitter = new Phaser.Events.EventEmitter();


    this.checkpointgroup= this.physics.add.group({
      allowGravity: false,
      immovable: true
    })
    map.getObjectLayer('checkpointplan').objects.forEach((checkpointgroup) => {
      const checkpoint = this.checkpointgroup.create(checkpointgroup.x, checkpointgroup.y - checkpointgroup.height, 'checkpoint').setOrigin(0);
    });
    this.physics.add.overlap(this.player.player,this.checkpointgroup,this.savecoordinate,null,this);


    this.checkpointgroup.setDepth(1)
    this.platforms.setDepth(2)


    this.checkpointgroup.children.iterate((checkpoint)=> {
      const fxcheckpoint = this.add.particles('red').setDepth(0);
      const checkpointemitter = fxcheckpoint.createEmitter(
        {
          speed: {min: 250, max: 300},
          scale: {start: 1, end: 0.4},
          lifespan: 500,
          blendMode: 'ADD',
          frequency: 1,
          quantity: 1,
          rotate: {start: 45, end: 0},
          alpha: {start: 1, end: 0},
        });
      checkpointemitter.startFollow(checkpoint);
    });


    this.createCollectible();

    this.cameras.main.startFollow(this.player.player, true,1, 0);
    this.cursors = this.input.keyboard.createCursorKeys();

    this.itemnum = 0;

    this.events.once('finjeu', this.fin,this);
  }



  savecoordinate(){
    this.savedX = this.player.player.x;
    this.savedY = this.player.player.y;
    console.log(this.savedX,this.savedY);
  }

  createCollectible(){
    this.coeurG = this.physics.add.sprite(500, 700, 'coeurgele');
    this.coeurG.body.setAllowGravity(false);
    this.plant = this.physics.add.sprite(1000, 700, 'moonplant');
    this.plant.body.setAllowGravity(false);
    this.physics.add.overlap(this.player.player,this.plant,this.collectMP,null,this);
    this.physics.add.overlap(this.player.player,this.coeurG,this.collectCG,null,this);
  }

  collectCG (player, coeurG)
  {
    this.coeurG.disableBody(true,true);
    this.itemnum++;
  }
  collectMP (player, coeurG)
  {
    this.plant.disableBody(true,true);
    this.itemnum++;
  }

  fin(){
    this.scene.start('finGame')
  }



  update(){

    if (this.cursors.down.isDown && this.lockmode === false){
      this.mode = !this.mode
      this.lockmode = true
    }

    if (this.cursors.down.isUp){
      this.lockmode = false
    }

    if (this.cursors.space.isDown && this.player.player.body.onFloor() && this.saut === false) {
      this.player.jump()
      this.saut = true;
    }
    if (this.cursors.space.isUp){
      this.saut = false;
    }

    if (this.cursors.left.isDown ){
      this.player.moveLeft();
    }
    else if (this.cursors.right.isDown){
      this.player.moveRight();
    }
    else {
      this.player.moveIdle();
    }

    if (this.mode === true){
      this.nuagesgroup.setAlpha(1);
      this.nuagesMgroup.setAlpha(0);
    }
    else{
      this.nuagesgroup.setAlpha(0);
      this.nuagesMgroup.setAlpha(1);
    }

    if (this.itemnum === 2){
      this.events.emit('finjeu');
    }

  }





}
