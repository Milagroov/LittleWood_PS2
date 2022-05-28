class SceneUI extends Phaser.Scene {

    constructor() {
        super("UIGame");
    }

    preload(){

        this.load.image('uijaune', 'assets/ui/ingame/HUDjaune.png');
        this.load.image('uibleu', 'assets/ui/ingame/HUDbleu.png');
        this.load.image('filtrebleu','assets/particle/filtre.png');
        this.load.image('filtrejaune','assets/particle/filtre2.png');
    }

    create() {


        
        this.UI = this.add.image(954, 1020, 'uibleu');
        this.UI.setScale(0.5);

        this.filtre = this.add.image(0,0,'filtrebleu');
        this.filtre.scale = 2;
        this.filtre.scrollFactorX= 0;
        this.filtre.alpha = 1;

        if (montremode === false) {
            this.initialTime = 301;
            this.text = this.add.text(914, 20, this.formatTime(this.initialTime), {
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
        if(this.initialTime<301) {
            return `${this.minutes}:${this.partInSeconds}`;
        }
    }


    onEvent ()
    {
        this.initialTime -= 1; // One second
        this.text.setText(this.formatTime(this.initialTime));
        console.log(this.initialTime);
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

    }

}
