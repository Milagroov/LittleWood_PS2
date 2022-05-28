class SceneUI extends Phaser.Scene {

    constructor() {
        super("UIGame");
    }

    preload(){

        this.load.image('uijaune', 'assets/ui/ingame/HUDjaune.png');
        this.load.image('uibleu', 'assets/ui/ingame/HUDbleu.png');
        this.load.image('filtrebleu','assets/particle/filtre.png');
        this.load.image('filtrejaune','assets/particle/filtre2.png');
        this.load.image('coeur','assets/ui/ingame/coeur.png');
        this.load.image('crane','assets/ui/ingame/crane.png');
    }

    create() {

        this.UI = this.add.image(954, 1020, 'uibleu');
        this.UI.setScale(0.5);

        this.filtre = this.add.image(0,0,'filtrebleu');
        this.filtre.scale = 2;
        this.filtre.scrollFactorX= 0;
        this.filtre.alpha = 1;

        this.crane1 = this.add.image(843,1022,'crane');
        this.crane2 = this.add.image(885,1022,'crane');
        this.crane4 = this.add.image(1075,1022,'crane');
        this.crane1.setScale(0.18);
        this.crane2.setScale(0.18);
        this.crane4.setScale(0.18);
        this.crane1.setAlpha(0);
        this.crane2.setAlpha(0);
        this.crane4.setAlpha(0);

        this.coeur3 = this.add.image(1035,1020,'coeur');
        this.coeur1 = this.add.image(843,1020,'coeur');
        this.coeur2 = this.add.image(885,1020,'coeur');
        this.coeur4 = this.add.image(1075,1020,'coeur');
        this.coeur1.setScale(0.5);
        this.coeur2.setScale(0.5);
        this.coeur4.setScale(0.5);
        this.coeur3.setScale(0.5);

        if(hardcoremode === true){
            this.crane1.setAlpha(1);
            this.crane2.setAlpha(1);
            this.crane4.setAlpha(1);
        }



        if (montremode === true) {
            initialtime = 10;
            this.text = this.add.text(914, 20, this.formatTime(initialtime), {
                fontFamily: 'TheNextFont',
                color: 'black',
                fontSize: 60,

            });
            this.timedEvent = this.time.addEvent({
                delay: 1000,
                callback: this.onEvent,
                callbackScope: this,
                loop: true
            });
        }

        this.uiswitchjaune = 0;
        this.uiswitchbleu = 0;

    }



    formatTime(seconds){
        this.minutes = Math.floor(seconds/60);
        this.partInSeconds = seconds%60;
        this.partInSeconds = this.partInSeconds.toString().padStart(2,'0');
        if(initialtime<301) {
            return `${this.minutes}:${this.partInSeconds}`;
        }
    }


    onEvent ()
    {
        initialtime -= 1; // One second
        this.text.setText(this.formatTime(initialtime));
        console.log(initialtime);
    }

    update(){

        if (mode === true && this.uiswitchjaune === 0){
            this.UI.setTexture('uijaune');
            this.filtre.setTexture('filtrejaune');
            this.uiswitchbleu = 0
            this.uiswitchjaune = 1
        }
        else if(mode === false && this.uiswitchbleu === 0){
            this.UI.setTexture('uibleu');
            this.filtre.setTexture('filtrebleu');
            this.uiswitchbleu = 1
            this.uiswitchjaune = 0
        }

        if(vie === 3 && this.coeur1.alpha === 1){
            this.coeur1.setAlpha(0);
        }
        else if(vie === 2 && this.coeur4.alpha === 1){
            this.coeur4.setAlpha(0);
        }
        else if(vie === 1 && this.coeur2.alpha === 1){
            this.coeur1.setAlpha(0);
            this.coeur2.setAlpha(0);
            this.coeur4.setAlpha(0);
        }

    }

}
