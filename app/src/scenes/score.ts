import { Scene } from 'phaser';

export default class ScoreScene extends Scene {
  constructor() {
    super({
      key: 'ScoreScene'
    });
  }

  preload(): void {
    //
  }

  create(): void {
    const info = this.add.text(10, 10, 'Score: 0');

        //  Grab a reference to the Game Scene
        const ourGame = this.scene.get('GameScene');

        //  Listen for events from it
        ourGame.events.on('addScore', function ()
        {

            this.score += 10;

            info.setText(`Score: ${this.score}`);

        }, this);
  }
}
