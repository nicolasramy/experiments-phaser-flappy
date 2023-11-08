import { Scene } from 'phaser';

export default class ScoreScene extends Scene {

    score = 0;
    constructor() {

        super({
            key: 'ScoreScene'
        });
    }

    create(): void {

        const score = this.add.text(10, 10, 'Score: 0').setColor('#000000');

        const info = this.add.text(1000, 16, 'Information:', {
            fontSize: '18px',
            padding: { x: 10, y: 5},
            backgroundColor: '#000000'
        });

        const ourGame = this.scene.get('PlaygroundScene');

        ourGame.events.on('resetScore', function (){
            this.score = 0;
            score.setText('Score: 0');
        }, this);

        ourGame.events.on('addScore', function (value = 10){
            this.score += value;
            score.setText(`Score: ${this.score}`);
        }, this);

        ourGame.events.on('updateEnergy', function (value = 10){
            info.setText(`Energy: ${value}`);
        }, this);
    }
}
