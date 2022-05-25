class SceneMenu extends Phaser.Scene {

    constructor() {
        super("menuGame");
    }

    preload(){
        this.load.image('playfr', 'assets/ui/play/play_fr.png');
        this.load.image('playen', 'assets/ui/play/play_en.png');
        this.load.image('playjp', 'assets/ui/play/play_jp.png');
        this.load.image('playoverfr', 'assets/ui/play/play_over_fr.png');
        this.load.image('playoveren', 'assets/ui/play/play_over_en.png');
        this.load.image('playoverjp', 'assets/ui/play/play_over_jp.png');

        this.load.image('signs', 'assets/ui/languagesign.png');
        this.load.image('title', 'assets/ui/littlewoodicon.png');

        this.load.image('enf', 'assets/ui/flags/english.png');
        this.load.image('frf', 'assets/ui/flags/france.png');
        this.load.image('jpf', 'assets/ui/flags/japon.png');
        this.load.image('ennbf', 'assets/ui/flags/englishnb.png');
        this.load.image('frnbf', 'assets/ui/flags/francenb.png');
        this.load.image('jpnbf', 'assets/ui/flags/japonnb.png');

    }

    create(){

        let languagesign = this.add.image(225,410,'signs');
        languagesign.setScale(1);

        let titlelogo = this.add.image(1025,400,'title');
        titlelogo.setScale(0.6);



        //BUTTONS
        let frflag = this.add.image(225,340,'frnbf');
        frflag.setScale(0.1);
        frflag.setInteractive();

        let enflag = this.add.image(225,540,'ennbf');
        enflag.setScale(0.1);
        enflag.setInteractive();

        let jpflag = this.add.image(225,745,'jpnbf');
        jpflag.setScale(0.1);
        jpflag.setInteractive();

        let playbutton = this.add.image(1025,700,'playfr');
        playbutton.setScale(1);
        playbutton.setInteractive();


        //CHANGEMENT TEXTURES & LANGUES

        frflag.on("pointerover",()=>{
            //console.log("over")
            frflag.setTexture('frf')
        })

        frflag.on("pointerout",()=>{
            //console.log("out")
            frflag.setTexture('frnbf')
        })

        frflag.on("pointerup",()=>{
            //console.log("fr")
            langue = 'fr'
            frflag.setTexture('frf')
        })

        enflag.on("pointerover",()=>{
            //console.log("over")
            enflag.setTexture('enf')
        })

        enflag.on("pointerout",()=>{
            //console.log("out")
            enflag.setTexture('ennbf')
        })

        enflag.on("pointerup",()=>{
            //console.log("en")
            langue = 'en'
            enflag.setTexture('enf')
        })

        jpflag.on("pointerover",()=>{
            //console.log("over")
            jpflag.setTexture('jpf')
        })

        jpflag.on("pointerout",()=>{
            //console.log("out")
            jpflag.setTexture('jpnbf')
        })

        jpflag.on("pointerup",()=>{
            //console.log("jp")
            langue = 'jp'
            jpflag.setTexture('jpf')
        })


        //LANGUES
        if (langue === "en"){
            playbutton.setTexture('playen')
            enflag.setTexture('enf')
        }
        else if (langue === "fr"){
            playbutton.setTexture("playfr")
            frflag.setTexture('frf')
        }
        else {
            playbutton.setTexture("playjp")
            jpflag.setTexture('jpf')
        }


        playbutton.on("pointerover",()=>{
            //console.log("over")
            if (langue === "en"){
                playbutton.setTexture('playoveren')
            }
            else if (langue === "fr"){
                playbutton.setTexture("playoverfr")
            }
            else {
                playbutton.setTexture("playoverjp")
            }
        })

        playbutton.on("pointerout",()=>{
            //console.log("out")
            if (langue === "en"){
                playbutton.setTexture('playen')
            }
            else if (langue === "fr"){
                playbutton.setTexture("playfr")
            }
            else {
                playbutton.setTexture("playjp")
            }
        })

        playbutton.on("pointerup",()=>{
            //console.log("up")
            if (langue === "en"){
                playbutton.setTexture('playoveren')
            }
            else if (langue === "fr"){
                playbutton.setTexture("playoverfr")
            }
            else {
                playbutton.setTexture("playoverjp")
            }

            this.scene.start("playGame")
        })


    }



}