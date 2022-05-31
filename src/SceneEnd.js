class SceneEnd extends Phaser.Scene {

    constructor() {
        super("finGame");
    }

    preload(){
        this.load.image('title', 'assets/ui/littlewoodicon.png');
        this.load.image('fondmenu','assets/fonds/fondmenu.png');
        this.load.image('mercifr','assets/ui/Thanks/merci_fr.png');
        this.load.image('mercien','assets/ui/Thanks/merci_en.png');
        this.load.image('mercijp','assets/ui/Thanks/merci_jp.png');
        this.load.image('home', 'assets/ui/home.png');
        this.load.image('homeover', 'assets/ui/home_over.png');
    }

    create(){

        this.scene.stop('UIGame');

        this.fondacceuilfin = this.add.image(960,540,'fondmenu');
        this.fondacceuilfin.setScale(1);


        this.tittlelogofin = this.add.image(945,300,'title');
        this.tittlelogofin.setScale(0.9);

        this.homebutton = this.add.image(1800,990,'home');
        this.homebutton.setScale(1);
        this.homebutton.setInteractive();

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




        this.thanks = this.add.image(960,700,'mercifr');
        this.thanks.setScale(1);

        if (langue.langue === "en"){
            this.thanks.setTexture('mercien')
        }
        else if (langue.langue === "fr"){
            this.thanks.setTexture("mercifr")
        }
        else if (langue.langue === "jp"){
            this.thanks.setTexture("mercijp")
        }
        else{
            this.thanks.setTexture("mercifr")
        }

    }

}


