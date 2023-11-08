import { Scene } from 'phaser';

export default class ScoreScene extends Scene {

    score = 0;

  constructor() {
    super({
      key: 'ScoreScene'
    });
  }

  preload(): void {
    //
  }

  create(): void {
    const score = this.add.text(10, 10, 'Score: 0').setColor('#000000');
    const ourGame = this.scene.get('PlaygroundScene');

    ourGame.events.on('addScore', function (){
        this.score += 10;
        score.setText(`Score: ${this.score}`);
    }, this);

    const info = this.add.text(1000, 16, 'Information:', {
        fontSize: '18px',
        padding: { x: 10, y: 5},
        backgroundColor: '#000000'
    });
  }

  update(): void {
    //
  }
}
