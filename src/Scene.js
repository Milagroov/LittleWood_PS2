class Scene extends Phaser.Scene {

  constructor (){
    super("playGame")
  }

  preload() {

    this.load.image('bg1', 'assets/fonds/fond1.png');
    this.load.image('bg2', 'assets/fonds/fond2.png');
    this.load.image('bg3', 'assets/fonds/fond3.png');
    this.load.image('bg4', 'assets/fonds/fond4.png');

    this.load.image('player', 'assets/images/player.png');

    this.load.image('arbredecor','assets/images/arbre.png');
    this.load.image('panneaudecor','assets/images/panneau.png');
    this.load.image('arbregranddecor','assets/images/arbregrand.png');
    this.load.image('arbremoyendecor','assets/images/arbremoyen.png');
    this.load.image('roche1decor','assets/images/roche1.png');
    this.load.image('roche2decor','assets/images/roche2.png');
    this.load.image('roche3decor','assets/images/roche3.png');



    this.load.image('coeurgele', 'assets/items/coeurgel.png');
    this.load.image('moonplant', 'assets/items/moonplant.png');

    this.load.image('tiles', 'assets/tilesets/tileset.png');
    this.load.image('checkpoint', 'assets/items/chekpoint.png');

    this.load.image('particulecheckpoint', 'assets/particle/particlecheckpoint.png');

    this.load.image('roncebas', 'assets/tilesets/roncesnewtile.png');
    this.load.image('roncehaut', 'assets/tilesets/roncesnewtileHaut.png');
    this.load.image('roncegauche', 'assets/tilesets/roncesnewtileGauche.png');
    this.load.image('roncedroite', 'assets/tilesets/roncesnewtileDroite.png');


    this.load.image('gemuien','assets/ui/controls/gem_ui_en.png');
    this.load.image('gemuifr','assets/ui/controls/gem_ui_fr.png');
    this.load.image('gemuijp','assets/ui/controls/gem_ui_jp.png');

    this.load.image('jumpuien','assets/ui/controls/jump_ui_en.png');
    this.load.image('jumpuifr','assets/ui/controls/jump_ui_fr.png');
    this.load.image('jumpuijp','assets/ui/controls/jump_ui_jp.png');

    this.load.image('moveuien','assets/ui/controls/move_ui_en.png');
    this.load.image('moveuifr','assets/ui/controls/move_ui_fr.png');
    this.load.image('moveuijp','assets/ui/controls/move_ui_jp.png');

    this.load.image('roseuien','assets/ui/controls/rose_ui_en.png');
    this.load.image('roseuifr','assets/ui/controls/rose_ui_fr.png');
    this.load.image('roseuijp','assets/ui/controls/rose_ui_jp.png');

    this.load.image('warningui','assets/ui/controls/warning.png');

    this.load.audio('bgmnormal','assets/sound/normal.mp3');
    this.load.audio('bgmmontre','assets/sound/montre.mp3');
    this.load.audio('bgmhardcore','assets/sound/hard.mp3');
    this.load.audio('gemswitch','assets/sound/gemme.mp3');

    this.load.audio('bip','assets/sound/bip.mp3');
    this.load.audio('biplast','assets/sound/bip_last.mp3');
    this.load.audio('hit','assets/sound/hit.mp3');





    this.load.atlas('atlasanim','assets/anim/anims.png','assets/anim/anims_atlas.json')
    this.load.tilemapTiledJSON('map', 'assets/tilemaps/level.json');
  }

  create() {

    this.scene.launch('UIGame');

    initialtime = 91;

    mode = false;

    if (hardcoremode === true){
      this.ost = this.sound.add('bgmhardcore',{volume:0.5}).play();
    }
    else if (montremode === true){
      this.ost = this.sound.add('bgmmontre',{volume:0.4}).play();
    }
    else{
      this.ost = this.sound.add('bgmnormal',{volume: 0.2}).play();
    }



    //const bg1 = this.add.image(0, 0, 'fond1').setOrigin(0, 0);
    const map = this.make.tilemap({key: 'map'});
    const tileset = map.addTilesetImage('tileset', 'tiles');
    const fond1tile = map.addTilesetImage('fond1', 'bg1');
    const fond2tile = map.addTilesetImage('fond2', 'bg2');
    const fond3tile = map.addTilesetImage('fond3', 'bg3');
    const fond4tile = map.addTilesetImage('fond4', 'bg4');
    /*const arbre = map.addTilesetImage('arbre','arbredecor');
    const panneau = map.addTilesetImage('panneau','panneaudecor');
    const arbregrand = map.addTilesetImage('arbregrand','arbregranddecor');*/


    //calque fonds
    this.fond1 = map.createLayer('fond1t', fond1tile,0,0);
    this.fond2 = map.createLayer('fond2t', fond2tile,0,0);
    this.fond3 = map.createLayer('fond3t', fond3tile,0,0);
    this.fond4 = map.createLayer('fond4t', fond4tile,0,0);

    this.platforms = map.createLayer('terre', tileset,0,0);
    this.platforms.setCollisionByExclusion(-1, true);

    this.jaunelayer = map.createLayer('jaune', tileset,0,0);
    this.bleulayer = map.createLayer('bleu', tileset,0,0);
    this.roselayer = map.createLayer('rose', tileset,0,0);

    this.roselayer.setAlpha(0.2);
    this.bleulayer.setAlpha(0.9);


    //PARALLAXE
    this.fond2.scrollFactorX=0.4;
    this.fond3.scrollFactorX=0.6;
    this.fond4.scrollFactorX=0.8;
    this.platforms.scrollFactorX=1;

    //GROUPE RONCES
    this.roncesgroup= this.physics.add.group({
      allowGravity: false,
      immovable: true
    })
    map.getObjectLayer('roncesbasplan').objects.forEach((roncesgroup) => {
      const roncebas = this.roncesgroup.create(roncesgroup.x, roncesgroup.y - roncesgroup.height, 'roncebas').setOrigin(0);
      roncebas.body.setSize(roncesgroup.width -2, roncesgroup.height - 22).setOffset(2, 22);
    });
    map.getObjectLayer('ronceshautplan').objects.forEach((roncesgroup) => {
      const roncehaut = this.roncesgroup.create(roncesgroup.x, roncesgroup.y - roncesgroup.height, 'roncehaut').setOrigin(0);
      roncehaut.body.setSize(roncesgroup.width -8, roncesgroup.height - 22).setOffset(2, 0);
    });
    map.getObjectLayer('roncesgaucheplan').objects.forEach((roncesgroup) => {
      const roncegauche = this.roncesgroup.create(roncesgroup.x, roncesgroup.y - roncesgroup.height, 'roncegauche').setOrigin(0);
      roncegauche.body.setSize(roncesgroup.width -22, roncesgroup.height - 2).setOffset(0, 2);
    });
    map.getObjectLayer('roncesdroiteplan').objects.forEach((roncesgroup) => {
      const roncedroite = this.roncesgroup.create(roncesgroup.x, roncesgroup.y - roncesgroup.height, 'roncedroite').setOrigin(0);
      roncedroite.body.setSize(roncesgroup.width -22, roncesgroup.height - 2).setOffset(22, 2);
    });

    this.player = new Player(this);
    this.emitter = new Phaser.Events.EventEmitter();


    //GROUPE DECORS

    this.decorgroup= this.physics.add.group({
      allowGravity: false,
      immovable: true
    })
    map.getObjectLayer('arbreplan').objects.forEach((decorgroup) => {
      const decors = this.decorgroup.create(decorgroup.x, decorgroup.y - decorgroup.height, 'arbredecor').setOrigin(0);
    });
    map.getObjectLayer('arbregrandplan').objects.forEach((decorgroup) => {
      const decors = this.decorgroup.create(decorgroup.x, decorgroup.y - decorgroup.height, 'arbregranddecor').setOrigin(0);
    });
    map.getObjectLayer('panneauplan').objects.forEach((decorgroup) => {
      const decors = this.decorgroup.create(decorgroup.x, decorgroup.y - decorgroup.height, 'panneaudecor').setOrigin(0);
    });
    map.getObjectLayer('arbremoyenplan').objects.forEach((decorgroup) => {
      const decors = this.decorgroup.create(decorgroup.x, decorgroup.y - decorgroup.height, 'arbremoyendecor').setOrigin(0);
    });
    map.getObjectLayer('pierre1').objects.forEach((decorgroup) => {
      const decors = this.decorgroup.create(decorgroup.x, decorgroup.y - decorgroup.height, 'roche1decor').setOrigin(0);
    });
    map.getObjectLayer('pierre2').objects.forEach((decorgroup) => {
      const decors = this.decorgroup.create(decorgroup.x, decorgroup.y - decorgroup.height, 'roche2decor').setOrigin(0);
    });
    map.getObjectLayer('pierre3').objects.forEach((decorgroup) => {
      const decors = this.decorgroup.create(decorgroup.x, decorgroup.y - decorgroup.height, 'roche3decor').setOrigin(0);
    });


    //GROUPE CHECKPOINT
    this.checkpointgroup= this.physics.add.group({
      allowGravity: false,
      immovable: true
    })
    map.getObjectLayer('checkpointplan').objects.forEach((checkpointgroup) => {
      const checkpoint = this.checkpointgroup.create(checkpointgroup.x, checkpointgroup.y - checkpointgroup.height, 'checkpoint').setOrigin(0);
    });
    this.physics.add.overlap(this.player.player,this.checkpointgroup,this.savecoordinate,null,this);


    if(langue.langue==='fr'){
      this.sauttuto = this.add.image(1725,715,'jumpuifr');
      this.mouvementtuto = this.add.image(1080,700,'moveuifr');
      this.formetuto = this.add.image(2715,700,'gemuifr');
      this.rosetuto = this.add.image(4000,600,'roseuifr');
    }
    else if(langue.langue==='en'){
      this.sauttuto = this.add.image(1725,715,'jumpuien');
      this.mouvementtuto = this.add.image(1080,700,'moveuien');
      this.formetuto = this.add.image(2715,700,'gemuien');
      this.rosetuto = this.add.image(4000,600,'roseuien');
    }
    else if(langue.langue==='jp'){
      this.sauttuto = this.add.image(1725,715,'jumpuijp');
      this.mouvementtuto = this.add.image(1080,700,'moveuijp');
      this.formetuto = this.add.image(2715,700,'gemuijp');
      this.rosetuto = this.add.image(4000,600,'roseuijp');
    }
    else{
      this.sauttuto = this.add.image(1725,715,'jumpuifr');
      this.mouvementtuto = this.add.image(1080,700,'moveuifr');
      this.formetuto = this.add.image(2715,700,'gemuifr');
      this.rosetuto = this.add.image(4000,600,'roseuifr');
    }

    this.warningtuto = this.add.image(4607.5,725,'warningui');


    this.sauttuto.setScale(0.7);
    //this.sauttuto.setAlpha(0.9);
    this.mouvementtuto.setScale(0.7);
    this.formetuto.setScale(0.7);
    this.rosetuto.setScale(0.7);






    this.decorgroup.setDepth(0);
    this.checkpointgroup.setDepth(1);
    this.roncesgroup.setDepth(3)
    this.bleulayer.setDepth(9);
    this.jaunelayer.setDepth(9);
    this.roselayer.setDepth(9);
    this.platforms.setDepth(10);
    this.sauttuto.setDepth(11);
    this.mouvementtuto.setDepth(11);
    //this.formetuto.setDepth(11);
    //this.rosetuto.setDepth(11);
    this.player.player.setDepth(20);



    this.checkpointgroup.children.iterate((checkpoint)=> {
      const fxcheckpoint = this.add.particles('particulecheckpoint').setDepth(2);
      const checkpointemitter = fxcheckpoint.createEmitter(
        {
          speed: {min: 50, max: 100},
          scale: {start: 0, end: 0.3},
          lifespan: 800,
          blendMode: 'ADD',
          frequency: 0.1,
          quantity: 1,
          rotate: {start: 0, end: 0},
          alpha: {start: 0, end: 0.4},
        });
      checkpointemitter.startFollow(checkpoint,39,55);
    });


    this.createCollectible();



    this.cameras.main.startFollow(this.player.player, true,1, 0,0,260);
    this.cursors = this.input.keyboard.createCursorKeys();

    this.itemnum = 0;

    //this.events.once('finjeu', this.fin,this);

    if (hardcoremode === true){
      vie = 1
    }
    else if (montremode === true){
      vie = 200
    }
    else{
      vie = 4
    }

    this.savedX = 150;
    this.savedY = 1025;

    //console.log(vie);


    this.rosetimer = 4

    this.rosetimedEvent = this.time.addEvent({
      delay: 1000,
      callback: this.roseOnEvent,
      callbackScope: this,
      loop: true
    });


  }

  roseOnEvent ()
  {
    if( this.rosetimer != 0) {
      this.rosetimer -= 1; // One second
    }
    else {
      this.rosetimer = 4;
      if (hardcoremode === false){
        this.sound.play('biplast',{volume:0.3});
      }

      if (this.roselayer.alpha === 1){
        if(hardcoremode===true){
          this.roselayer.setAlpha(0);
        }
        else{
          this.roselayer.setAlpha(0.1);
        }
        this.roselayer.setCollisionByExclusion(-1, false);
      }
      else{
        this.roselayer.setAlpha(1);
        this.roselayer.setCollisionByExclusion(-1, true);
      }
    }

    if (hardcoremode === false && this.rosetimer === 1){
      this.sound.play('bip',{volume:0.1});
    }
    else if (hardcoremode === false && this.rosetimer === 0){
      this.sound.play('bip',{volume:0.1});
    }
    //console.log(this.rosetimer);
  }



  savecoordinate(){
    this.savedX = this.player.player.x;
    this.savedY = this.player.player.y;
  }

  createCollectible(){
    this.coeurG = this.physics.add.sprite(13410, 115, 'coeurgele');
    this.coeurG.setScale(0.15);
    this.coeurG.body.setAllowGravity(false);
    this.physics.add.overlap(this.player.player,this.coeurG,this.collectCG,null,this);

    /*this.plant = this.physics.add.sprite(1000, 800, 'moonplant');
    this.plant.setScale(0.15);
    this.plant.body.setAllowGravity(false);
    this.physics.add.overlap(this.player.player,this.plant,this.collectMP,null,this);*/
  }

  collectCG (player, coeurG)
  {
    this.coeurG.disableBody(true,true);
    this.itemnum++;
  }
  /*collectMP (player, coeurG)
  {
    this.plant.disableBody(true,true);
    this.itemnum++;
  }*/

  /*fin() {

    if (this.itemnum === 2) {
      this.events.emit('finjeu');
    }

    if (vie === 0) {
      this.events.emit('finjeu');
    }

    if (initialtime === 0) {
      this.events.emit('finjeu');
    }
  }*/

  playgem(){
    this.sound.play('gemswitch',{volume:0.1});
  }

  update(){

    if (this.cursors.down.isDown && this.lockmode === false){
      mode = !mode;
      this.playgem();
      this.lockmode = true;
    }

    if (this.cursors.down.isUp){
      this.lockmode = false
    }

    if (this.cursors.space.isDown && this.player.player.body.onFloor() && this.saut === false) {
      this.player.jump()
      //this.player.player.play('jumpanim', true);
      this.saut = true;
    }
    if (this.cursors.space.isUp){
      this.saut = false;
    }

    /*if (this.player.player.velocityY ) {
      this.player.player.play('jumpanim', true);
    }*/


    if (this.cursors.left.isDown ){
      this.player.moveLeft();
    }
    else if (this.cursors.right.isDown) {
      this.player.moveRight();
    }
    else {
      this.player.moveIdle();
    }

    if (mode === true){
      if(this.jaunelayer.alpha != 1){
        if(hardcoremode===true){
          this.bleulayer.setAlpha(0);
        }
        else{
          this.bleulayer.setAlpha(0.2);
        }
        this.jaunelayer.setAlpha(1);
        this.jaunelayer.setCollisionByExclusion(-1, true);
        this.bleulayer.setCollisionByExclusion(-1, false);
      }

    }
    else{
      if(this.bleulayer.alpha != 1){
        if(hardcoremode===true){
          this.jaunelayer.setAlpha(0);
        }
        else{
          this.jaunelayer.setAlpha(0.2);
        }
        this.bleulayer.setAlpha(1);
        this.jaunelayer.setCollisionByExclusion(-1, false);
        this.bleulayer.setCollisionByExclusion(-1, true);
      }
    }

    if (this.itemnum === 1){
      //this.events.emit('finjeu');
      if (hardcoremode === true){
        this.sound.get('bgmhardcore').stop();
        this.scene.start('VictoryGame');
      }
      else if (montremode === true){
        this.sound.get('bgmmontre').stop();
        this.scene.start('VictoryGame');
      }
      else{
        this.sound.get('bgmnormal').stop();
        this.scene.start('VictoryGame');
      }
    }

    if (vie === 0){
      //this.events.emit('finjeu');
      if (hardcoremode === true){
        this.sound.get('bgmhardcore').stop();
        this.scene.start('GameOver');
      }
      else{
        this.sound.get('bgmnormal').stop();
        this.scene.start('GameOver');
      }
    }

    if (initialtime === 0){
      //this.events.emit('finjeu');
      this.sound.get('bgmmontre').stop();
      this.scene.start('GameOver');
    }
  }





}
