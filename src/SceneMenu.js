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

        this.emitter = new Phaser.Events.EventEmitter();

        let languagesign = this.add.image(225,410,'signs');
        languagesign.setScale(1);

        let titlelogo = this.add.image(1025,400,'title');
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

        this.playbutton = this.add.image(1025,700,'playfr');
        this.playbutton.setScale(1);
        this.playbutton.setInteractive();

        this.frflag.on("pointerup",()=>{
            //console.log("fr")
            this.emitter.emit('changelangue',['fr','playfr',0])
        })

        this.enflag.on("pointerup",()=>{
            //console.log("en")
            this.emitter.emit('changelangue',['en','playen',1])
        })

        this.jpflag.on("pointerup",()=>{
            //console.log("jp")
            this.emitter.emit('changelangue',['jp','playjp',2])
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

        this.emitter.on('changelangue',this.handlebutton,this)
    }

    handlebutton(data){
        //console.log(data[0]);
        this.playbutton.setTexture(data[1]);
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