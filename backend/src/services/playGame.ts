const input = require('prompt-sync')({sigint: true});

export default class playGame {

    public playGame(){
        this.play();
    }

    private play(){
        console.log('cheguei!');
        input();
    }
}