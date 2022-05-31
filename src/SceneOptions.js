class SceneOptions extends Phaser.Scene {

    constructor() {
        super("optionsGame");
    }

    preload(){
        this.load.image('fondmenu','assets/fonds/fondmenu.png');
        this.load.image('fondmenuhardcore','assets/fonds/fondmenumontre.png');
        this.load.image('fondmenumontre','assets/fonds/fondmenufin.png');
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
        this.load.image('hardcoreen','assets/ui/hardcore/hardcore_en.png');
        this.load.image('hardcorefr','assets/ui/hardcore/hardcore_fr.png');
        this.load.image('hardcorejp','assets/ui/hardcore/hardcore_jp.png');
        this.load.image('hardcoreoveren','assets/ui/hardcore/hardcore_over_en.png');
        this.load.image('hardcoreoverfr','assets/ui/hardcore/hardcore_over_fr.png');
        this.load.image('hardcoreoverjp','assets/ui/hardcore/hardcore_over_jp.png');


    }

    create(){

        this.emitter = new Phaser.Events.EventEmitter();

        if (montremode === true) {
            this.fondoptions = this.add.image(960, 540, 'fondmenumontre');
            this.fondoptions.setScale(1);
        }
        else if (hardcoremode === true) {
            this.fondoptions = this.add.image(960, 540, 'fondmenuhardcore');
            this.fondoptions.setScale(1);
        }
        else {
            this.fondoptions = this.add.image(960, 540, 'fondmenu');
            this.fondoptions.setScale(1);
        }

        this.homebutton = this.add.image(1800,990,'home');
        this.homebutton.setScale(1);
        this.homebutton.setInteractive();

        this.controles = this.add.image(960,100,'controlesfr');
        this.controles.setScale(1);
        this.controles.setInteractive();

        this.montre = this.add.image(960,875,'montrefr');
        this.montre.setScale(0.8);
        this.montre.setInteractive();

        this.hardcorebutton = this.add.image(960,600,'hardcorefr');
        this.hardcorebutton.setScale(0.8);
        this.hardcorebutton.setInteractive();

        this.homebutton.on("pointerover",()=>{
            this.homebutton.setTexture('homeover')
            this.sound.play('buttonsfx',{volume:0.4});
        })

        this.homebutton.on("pointerout",()=>{
            this.homebutton.setTexture('home')
        })

        this.homebutton.on("pointerup",()=>{
            this.homebutton.setTexture('homeover')
            this.sound.play('buttonsfx',{volume:0.4});
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
            this.montre.setTexture('montreen');
            this.hardcorebutton.setTexture('hardcoreen');
        }
        else if (langue.langue === "fr"){
            this.move.setTexture('moveuifr');
            this.jump.setTexture('jumpuifr');
            this.form.setTexture('formuifr');
            this.controles.setTexture('controlesfr');
            this.montre.setTexture("montrefr");
            this.hardcorebutton.setTexture('hardcorefr');
        }
        else if (langue.langue === "jp"){
            this.move.setTexture('moveuijp');
            this.jump.setTexture('jumpuijp');
            this.form.setTexture('formuijp');
            this.controles.setTexture('controlesjp');
            this.hardcorebutton.setTexture('hardcorejp');
        }

        this.montre.on("pointerover",()=>{
            //console.log("up")
            if (langue.langue === "en"){
                this.montre.setTexture('montreoveren')
                this.sound.play('buttonsfx',{volume:0.4});
            }
            else if (langue.langue === "fr"){
                this.montre.setTexture("montreoverfr")
                this.sound.play('buttonsfx',{volume:0.4});
            }
            else if (langue.langue === "jp"){
                this.montre.setTexture("montreoverjp")
                this.sound.play('buttonsfx',{volume:0.4});
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
                this.sound.play('buttonsfx',{volume:0.4});
            }
            else if (langue.langue === "fr"){
                this.montre.setTexture("montreoverfr")
                this.sound.play('buttonsfx',{volume:0.4});
            }
            else if (langue.langue === "jp"){
                this.montre.setTexture("montreoverjp")
                this.sound.play('buttonsfx',{volume:0.4});
            }

            montremode = !montremode;
            hardcoremode = false;

            if(montremode === false){
                this.emitter.emit('changefondmode',['fondmenu'])
            }
            else{
                this.emitter.emit('changefondmode',['fondmenumontre'])
            }

            })




            this.hardcorebutton.on("pointerover",()=>{
                //console.log("up")
                if (langue.langue === "en"){
                    this.hardcorebutton.setTexture('hardcoreoveren')
                    this.sound.play('buttonsfx',{volume:0.4});
                }
                else if (langue.langue === "fr"){
                    this.hardcorebutton.setTexture("hardcoreoverfr")
                    this.sound.play('buttonsfx',{volume:0.4});
                }
                else if (langue.langue === "jp"){
                    this.hardcorebutton.setTexture("hardcoreoverjp")
                    this.sound.play('buttonsfx',{volume:0.4});
                }
            })

            this.hardcorebutton.on("pointerout",()=>{
                //console.log("up")
                if (langue.langue === "en"){
                    this.hardcorebutton.setTexture('hardcoreen')
                }
                else if (langue.langue === "fr"){
                    this.hardcorebutton.setTexture("hardcorefr")
                }
                else if (langue.langue === "jp"){
                    this.hardcorebutton.setTexture("hardcorejp")
                }
            })

            this.hardcorebutton.on("pointerup",()=>{
                //console.log("up")
                if (langue.langue === "en"){
                    this.hardcorebutton.setTexture('hardcoreoveren')
                    this.sound.play('buttonsfx',{volume:0.4});
                }
                else if (langue.langue === "fr"){
                    this.hardcorebutton.setTexture("hardcoreoverfr")
                    this.sound.play('buttonsfx',{volume:0.4});
                }
                else if (langue.langue === "jp"){
                    this.hardcorebutton.setTexture("hardcoreoverjp")
                    this.sound.play('buttonsfx',{volume:0.4});
                }

                montremode = false;
                hardcoremode = !hardcoremode;

                if(hardcoremode === false){
                    this.emitter.emit('changefondmode',['fondmenu'])
                }
                else{
                    this.emitter.emit('changefondmode',['fondmenuhardcore'])
                }

            })

        this.emitter.on('changefondmode',this.handleoptions,this);

    }

    handleoptions(data){
        this.fondoptions.setTexture(data[0])
    }
}