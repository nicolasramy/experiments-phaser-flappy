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
    const info = this.add.text(10, 10, 'Score: 0').setColor('#000000');

        //  Grab a reference to the Game Scene
        const ourGame = this.scene.get('PlaygroundScene');

        //  Listen for events from it
        ourGame.events.on('addScore', function ()
        {

            this.score += 10;

            info.setText(`Score: ${this.score}`);

        }, this);
  }

  updae(): void {
    //
  }
}
