class SceneOptions extends Phaser.Scene {

    constructor() {
        super("optionsGame");
    }

    preload(){
        this.load.image('fondmenu','assets/fonds/fondmenu.png');
        this.load.image('fondmenumontre','assets/fonds/fondmenumontre.png');
        this.load.image('home', 'assets/ui/home.png');
        this.load.image('homeover', 'assets/ui/home_over.png');
        this.load.image('formuien','assets/ui/controls/form_ui_en.png');
        this.load.image('formuifr','assets/ui/controls/form_ui_fr.png');
        this.load.image('formuijp','assets/ui/controls/form_ui_jp.png');
        this.load.image('jumpuien','assets/ui/controls/jump_ui_en.png');
        this.load.image('jumpuifr','assets/ui/controls/jump_ui_fr.png');
        this.load.image('jumpuijp','assets/ui/controls/jump_ui_jp.png');
        this.load.image('moveuien','assets/ui/controls/move_ui_en.png');
        this.load.image('moveuifr','assets/ui/controls/move_ui_fr.png');
        this.load.image('moveuijp','assets/ui/controls/move_ui_jp.png');
        this.load.image('controlesfr','assets/ui/controls/controles_fr.png');
        this.load.image('controlesen','assets/ui/controls/controles_en.png');
        this.load.image('controlesjp','assets/ui/controls/controles_jp.png');
        this.load.image('montreen','assets/ui/montre/montre_en.png');
        this.load.image('montrefr','assets/ui/montre/montre_fr.png');
        this.load.image('montrejp','assets/ui/montre/montre_jp.png');
        this.load.image('montreoveren','assets/ui/montre/montre_over_en.png');
        this.load.image('montreoverfr','assets/ui/montre/montre_over_fr.png');
        this.load.image('montreoverjp','assets/ui/montre/montre_over_jp.png');
    }

    create(){

        this.emitter = new Phaser.Events.EventEmitter();

        if (montremode === false) {
            this.fondoptionsmontre = this.add.image(960, 540, 'fondmenu');
            this.fondoptionsmontre.setScale(1);
        }
        else {
            this.fondoptionsmontre = this.add.image(960, 540, 'fondmenumontre');
            this.fondoptionsmontre.setScale(1);
        }

        this.homebutton = this.add.image(1800,990,'home');
        this.homebutton.setScale(1);
        this.homebutton.setInteractive();

        this.controles = this.add.image(960,100,'controlesfr');
        this.controles.setScale(1);
        this.controles.setInteractive();

        this.montre = this.add.image(960,800,'montrefr');
        this.montre.setScale(1);
        this.montre.setInteractive();

        this.homebutton.on("pointerover",()=>{
            this.homebutton.setTexture('homeover')
        })

        this.homebutton.on("pointerout",()=>{
            this.homebutton.setTexture('home')
        })

        this.homebutton.on("pointerup",()=>{
            this.homebutton.setTexture('homeover')

            this.scene.start("menuGame")
        })


        this.move = this.add.image(600,300,'moveuifr');
        this.move.setScale(1);

        this.jump = this.add.image(960,300,'jumpuifr');
        this.jump.setScale(1);

        this.form = this.add.image(1320,300,'formuifr');
        this.form.setScale(1);

        if (langue.langue === "en"){
            this.move.setTexture('moveuien');
            this.jump.setTexture('jumpuien');
            this.form.setTexture('formuien');
            this.controles.setTexture('controlesen');
            this.montre.setTexture('montreen')
        }
        else if (langue.langue === "fr"){
            this.move.setTexture('moveuifr');
            this.jump.setTexture('jumpuifr');
            this.form.setTexture('formuifr');
            this.controles.setTexture('controlesfr');
            this.montre.setTexture("montrefr")
        }
        else if (langue.langue === "jp"){
            this.move.setTexture('moveuijp');
            this.jump.setTexture('jumpuijp');
            this.form.setTexture('formuijp');
            this.controles.setTexture('controlesjp');
            this.montre.setTexture("montrejp")
        }

        this.montre.on("pointerover",()=>{
            //console.log("up")
            if (langue.langue === "en"){
                this.montre.setTexture('montreoveren')
            }
            else if (langue.langue === "fr"){
                this.montre.setTexture("montreoverfr")
            }
            else if (langue.langue === "jp"){
                this.montre.setTexture("montreoverjp")
            }
        })

        this.montre.on("pointerout",()=>{
            //console.log("up")
            if (langue.langue === "en"){
                this.montre.setTexture('montreen')
            }
            else if (langue.langue === "fr"){
                this.montre.setTexture("montrefr")
            }
            else if (langue.langue === "jp"){
                this.montre.setTexture("montrejp")
            }
        })

        this.montre.on("pointerup",()=>{
            //console.log("up")
            if (langue.langue === "en"){
                this.montre.setTexture('montreoveren')
            }
            else if (langue.langue === "fr"){
                this.montre.setTexture("montreoverfr")
            }
            else if (langue.langue === "jp"){
                this.montre.setTexture("montreoverjp")
            }

            montremode = !montremode;

            if(montremode === false){
                this.emitter.emit('changefondmode',['fondmenu'])
            }
            else{
                this.emitter.emit('changefondmode',['fondmenumontre'])
            }


        })

        this.emitter.on('changefondmode',this.handleoptions,this)

    }

    handleoptions(data){
        this.fondoptionsmontre.setTexture(data[0])
    }
}