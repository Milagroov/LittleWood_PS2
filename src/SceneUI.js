class SceneUI extends Phaser.Scene {

    constructor() {
        super("UIGame");
    }

    preload(){

    }

    create(){

        if (montremode === false) {
            this.initialTime = 300;
            this.text = this.add.text(32, 32, 'Countdown: ' + this.formatTime(this.initialTime),{fontFamily: 'arial', color: 'black' });
            this.timedEvent = this.time.addEvent({delay: 1000, callback: this.onEvent, callbackScope: this, loop: true});
        }



    formatTime(seconds){
        this.minutes = Math.floor(seconds/60);
        this.partInSeconds = seconds%60;
        this.partInSeconds = this.partInSeconds.toString().padStart(2,'0');
        return `${this.minutes}:${this.partInSeconds}`;
    }


    onEvent ()
    {
        this.initialTime -= 1; // One second
        this.text.setText('Countdown: ' + this.formatTime(this.initialTime));
        console.log(this.initialTime);
    }



}
