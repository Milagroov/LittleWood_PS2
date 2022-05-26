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

        this.load.image('optionsfr', 'assets/ui/options/options_fr.png');
        this.load.image('optionsjp', 'assets/ui/options/options_jp.png');
        this.load.image('optionsen', 'assets/ui/options/options_en.png');
        this.load.image('optionsoverfr', 'assets/ui/options/options_over_fr.png');
        this.load.image('optionsoverjp', 'assets/ui/options/options_over_jp.png');
        this.load.image('optionsoveren', 'assets/ui/options/options_over_en.png');

        this.load.image('signs', 'assets/ui/languagesign.png');
        this.load.image('title', 'assets/ui/littlewoodicon.png');
        this.load.image('fondmenu','assets/fonds/fondmenu.png');
        this.load.image('fondmenumontre','assets/fonds/fondmenumontre.png');

        this.load.image('enf', 'assets/ui/flags/english.png');
        this.load.image('frf', 'assets/ui/flags/france.png');
        this.load.image('jpf', 'assets/ui/flags/japon.png');
        this.load.image('ennbf', 'assets/ui/flags/englishnb.png');
        this.load.image('frnbf', 'assets/ui/flags/francenb.png');
        this.load.image('jpnbf', 'assets/ui/flags/japonnb.png');

    }

    create(){

        this.emitter = new Phaser.Events.EventEmitter();

        if (montremode === false) {
            let fondaccueil = this.add.image(960, 540, 'fondmenu');
            fondaccueil.setScale(1);
        }
        else {
            let fondaccueilmontre = this.add.image(960, 540, 'fondmenumontre');
            fondaccueilmontre.setScale(1);
        }

        let languagesign = this.add.image(225,410,'signs');
        languagesign.setScale(1);

        let titlelogo = this.add.image(1025,380,'title');
        titlelogo.setScale(0.6);



        //BUTTONS
        this.frflag = this.add.image(225,340,'frnbf');
        this.frflag.setScale(0.1);
        this.frflag.setInteractive();

        this.enflag = this.add.image(225,540,'ennbf');
        this.enflag.setScale(0.1);
        this.enflag.setInteractive();

        this.jpflag = this.add.image(225,745,'jpnbf');
        this.jpflag.setScale(0.1);
        this.jpflag.setInteractive();




        if (langue.langue === "en"){
            this.playbutton = this.add.image(1025,700,'playen');
            this.playbutton.setScale(1);
            this.playbutton.setInteractive();
            this.optionbutton = this.add.image(1025,900,'optionsen');
            this.optionbutton.setScale(1);
            this.optionbutton.setInteractive();
        }
        else if (langue.langue === "fr"){
            this.playbutton = this.add.image(1025,700,'playfr');
            this.playbutton.setScale(1);
            this.playbutton.setInteractive();
            this.optionbutton = this.add.image(1025,900,'optionsfr');
            this.optionbutton.setScale(1);
            this.optionbutton.setInteractive();
        }
        else if (langue.langue === "jp"){
            this.playbutton = this.add.image(1025,700,'playjp');
            this.playbutton.setScale(1);
            this.playbutton.setInteractive();
            this.optionbutton = this.add.image(1025,900,'optionsjp');
            this.optionbutton.setScale(1);
            this.optionbutton.setInteractive();
        }
        else{
            this.playbutton = this.add.image(1025,700,'playfr');
            this.playbutton.setScale(1);
            this.playbutton.setInteractive();
            this.optionbutton = this.add.image(1025,900,'optionsfr');
            this.optionbutton.setScale(1);
            this.optionbutton.setInteractive();
        }



        this.frflag.on("pointerup",()=>{
            //console.log("fr")
            this.emitter.emit('changelangue',['fr','playfr',0,'optionsfr'])
        })

        this.enflag.on("pointerup",()=>{
            //console.log("en")
            this.emitter.emit('changelangue',['en','playen',1,'optionsen'])
        })

        this.jpflag.on("pointerup",()=>{
            //console.log("jp")
            this.emitter.emit('changelangue',['jp','playjp',2,'optionsjp'])
        })

        this.playbutton.on("pointerover",()=>{
            //console.log("over")
            if (langue.langue === "en"){
                this.playbutton.setTexture('playoveren')
            }
            else if (langue.langue === "fr"){
                this.playbutton.setTexture("playoverfr")
            }
            else if (langue.langue === "jp"){
                this.playbutton.setTexture("playoverjp")
            }
            else{
                this.playbutton.setTexture("playoverfr")
            }
        })

        this.playbutton.on("pointerout",()=>{
            //console.log("out")
            if (langue.langue === "en"){
                this.playbutton.setTexture('playen')
            }
            else if (langue.langue === "fr"){
                this.playbutton.setTexture("playfr")
            }
            else if (langue.langue === "jp"){
                this.playbutton.setTexture("playjp")
            }
            else{
                this.playbutton.setTexture("playfr")
            }
        })

        this.playbutton.on("pointerup",()=>{
            //console.log("up")
            if (langue.langue === "en"){
                this.playbutton.setTexture('playoveren')
            }
            else if (langue.langue === "fr"){
                this.playbutton.setTexture("playoverfr")
            }
            else if (langue.langue === "jp"){
                this.playbutton.setTexture("playoverjp")
            }

            this.scene.start("playGame")
        })

        this.optionbutton.on("pointerover",()=>{
            //console.log("up")
            if (langue.langue === "en"){
                this.optionbutton.setTexture('optionsoveren')
            }
            else if (langue.langue === "fr"){
                this.optionbutton.setTexture("optionsoverfr")
            }
            else if (langue.langue === "jp"){
                this.optionbutton.setTexture("optionsoverjp")
            }
        })

        this.optionbutton.on("pointerout",()=>{
            //console.log("up")
            if (langue.langue === "en"){
                this.optionbutton.setTexture('optionsen')
            }
            else if (langue.langue === "fr"){
                this.optionbutton.setTexture("optionsfr")
            }
            else if (langue.langue === "jp"){
                this.optionbutton.setTexture("optionsjp")
            }
        })

        this.optionbutton.on("pointerup",()=>{
            //console.log("up")
            if (langue.langue === "en"){
                this.optionbutton.setTexture('optionsoveren')
            }
            else if (langue.langue === "fr"){
                this.optionbutton.setTexture("optionsoverfr")
            }
            else if (langue.langue === "jp"){
                this.optionbutton.setTexture("optionsoverjp")
            }

            this.scene.start("optionsGame")
        })



        this.emitter.on('changelangue',this.handlebutton,this)
    }

    handlebutton(data){
        //console.log(data[0]);
        this.playbutton.setTexture(data[1]);
        this.optionbutton.setTexture(data[3]);
        langue.langue = data[0];
        this.flagselected = data[2];
    }

    update(){
        switch (this.flagselected){
            case 0:
                this.frflag.setTexture('frf');
                this.enflag.setTexture('ennbf');
                this.jpflag.setTexture('jpnbf');
                break;
            case 1:
                this.frflag.setTexture('frnbf');
                this.enflag.setTexture('enf');
                this.jpflag.setTexture('jpnbf');
                break;
            case 2:
                this.frflag.setTexture('frnbf');
                this.enflag.setTexture('ennbf');
                this.jpflag.setTexture('jpf');
                break;
        }
    }

}