class SceneVictory extends Phaser.Scene {

    constructor() {
        super("VictoryGame");
    }

    preload(){

        this.load.image('hardcorevictoryfr','assets/fonds/victoire_hardcore_fr.png');
        this.load.image('hardcorevictoryen','assets/fonds/victoire_hardcore_en.png');
        this.load.image('hardcorevictoryjp','assets/fonds/victoire_hardcore_jp.png');
        this.load.image('montrevictoryfr','assets/fonds/victoire_montre_fr.png');
        this.load.image('montrevictoryen','assets/fonds/victoire_montre_en.png');
        this.load.image('montrevictoryjp','assets/fonds/victoire_montre_jp.png');
        this.load.image('normalvictoryfr','assets/fonds/victoire_normal_fr.png');
        this.load.image('normalvictoryen','assets/fonds/victoire_normal_en.png');
        this.load.image('normalvictoryjp','assets/fonds/victoire_normal_jp.png');

        this.load.image('home', 'assets/ui/home.png');
        this.load.image('homeover', 'assets/ui/home_over.png');
        this.load.image('retry', 'assets/ui/retry.png');
        this.load.image('retryover', 'assets/ui/retry_over.png');

        this.load.audio('victorysfx','assets/sound/victory.mp3');
    }

    create(){

        this.scene.stop('UIGame');

        this.sound.play('victorysfx',{volume:0.7});

        if(langue.langue === 'fr'){
            if(hardcoremode === true){
                this.fondvictoire = this.add.image(960,540,'hardcorevictoryfr');
                hardcorebeaten = true;
            }
            else if (montremode === true){
                this.fondvictoire = this.add.image(960,540,'montrevictoryfr');
                montrebeaten = true;
            }
            else{
                this.fondvictoire = this.add.image(960,540,'normalvictoryfr');
                normalbeaten = true;
            }
        }
        else if(langue.langue === 'en'){
            if(hardcoremode === true){
                this.fondvictoire = this.add.image(960,540,'hardcorevictoryen');
                hardcorebeaten = true;
            }
            else if (montremode === true){
                this.fondvictoire = this.add.image(960,540,'montrevictoryen');
                montrebeaten = true;
            }
            else{
                this.fondvictoire = this.add.image(960,540,'normalvictoryen');
                normalbeaten = true;
            }
        }
        else if(langue.langue === 'jp'){
            if(hardcoremode === true){
                this.fondvictoire = this.add.image(960,540,'hardcorevictoryjp');
                hardcorebeaten = true;
            }
            else if (montremode === true){
                this.fondvictoire = this.add.image(960,540,'montrevictoryjp');
                montrebeaten = true;
            }
            else{
                this.fondvictoire = this.add.image(960,540,'normalvictoryjp');
                normalbeaten = true;
            }
        }
        else{
            console.log('oui');
            if(hardcoremode === true){
                this.fondvictoire = this.add.image(960,540,'hardcorevictoryfr');
                hardcorebeaten = true;
            }
            else if (montremode === true){
                this.fondvictoire = this.add.image(960,540,'montrevictoryfr');
                montrebeaten = true;
            }
            else{
                this.fondvictoire = this.add.image(960,540,'normalvictoryfr');
                normalbeaten = true;
            }
        }



        this.homebuttonGO = this.add.image(1130,825,'home');
        this.homebuttonGO.setScale(1);
        this.homebuttonGO.setInteractive();

        this.retrybuttonGO = this.add.image(790,825,'retry');
        this.retrybuttonGO.setScale(1);
        this.retrybuttonGO.setInteractive();


        this.homebuttonGO.on("pointerover",()=>{
            this.homebuttonGO.setTexture('homeover')
            this.sound.play('buttonsfx',{volume:0.4});
        })

        this.homebuttonGO.on("pointerout",()=>{
            this.homebuttonGO.setTexture('home')
        })

        this.homebuttonGO.on("pointerup",()=>{
            this.homebuttonGO.setTexture('homeover')
            this.sound.play('buttonsfx',{volume:0.4});
            this.scene.start("finGame")
        })



        this.retrybuttonGO.on("pointerover",()=>{
            this.retrybuttonGO.setTexture('retryover')
            this.sound.play('buttonsfx',{volume:0.4});
        })

        this.retrybuttonGO.on("pointerout",()=>{
            this.retrybuttonGO.setTexture('retry')
        })

        this.retrybuttonGO.on("pointerup",()=>{
            this.retrybuttonGO.setTexture('retryover')
            this.sound.play('buttonsfx',{volume:0.4});

            this.scene.start("playGame")
        })





    }

}