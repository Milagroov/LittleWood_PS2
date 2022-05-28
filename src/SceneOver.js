class SceneOver extends Phaser.Scene {

    constructor() {
        super("GameOver");
    }

    preload(){
        this.load.image('gameovernormal','assets/fonds/gameover.png');
        this.load.image('gameovermontre','assets/fonds/gameover_montre.png');
        this.load.image('home', 'assets/ui/home.png');
        this.load.image('homeover', 'assets/ui/home_over.png');
        this.load.image('retry', 'assets/ui/retry.png');
        this.load.image('retryover', 'assets/ui/retry_over.png');
    }

    create(){

        this.scene.stop('UIGame');

        if(montremode === true){
            this.fondGOmontre = this.add.image(960,540,'gameovermontre');
            this.fondGOmontre.setScale(1);
        }
        else{
            this.fondGO = this.add.image(960,540,'gameovernormal');
            this.fondGO.setScale(1);
        }


        this.homebuttonGO = this.add.image(1130,825,'home');
        this.homebuttonGO.setScale(1);
        this.homebuttonGO.setInteractive();

        this.retrybuttonGO = this.add.image(790,825,'retry');
        this.retrybuttonGO.setScale(1);
        this.retrybuttonGO.setInteractive();


        this.homebuttonGO.on("pointerover",()=>{
            this.homebuttonGO.setTexture('homeover')
        })

        this.homebuttonGO.on("pointerout",()=>{
            this.homebuttonGO.setTexture('home')
        })

        this.homebuttonGO.on("pointerup",()=>{
            this.homebuttonGO.setTexture('homeover')

            this.scene.start("menuGame")
        })



        this.retrybuttonGO.on("pointerover",()=>{
            this.retrybuttonGO.setTexture('retryover')
        })

        this.retrybuttonGO.on("pointerout",()=>{
            this.retrybuttonGO.setTexture('retry')
        })

        this.retrybuttonGO.on("pointerup",()=>{
            this.retrybuttonGO.setTexture('retryover')

            this.scene.start("playGame")
        })





    }

}


