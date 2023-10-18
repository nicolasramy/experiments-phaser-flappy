import { Scene } from 'phaser';

export default class PlaygroundScene extends Scene {

  player;
  cursors;

  constructor() {
    super({
      key: 'PlaygroundScene'
    });
  }

  create(): void {
    this.player = this.add.image(0, 0, 'player/bat', '__BASE').setOrigin(0, 0);
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update(): void {
    if (this.input.keyboard.checkDown(this.cursors.left, 250))
        {
            this.player.x -= 32;
        }
        else if (this.input.keyboard.checkDown(this.cursors.right, 250))
        {
            this.player.x += 32;
        }

        //  Vertical movement every 150ms
        if (this.input.keyboard.checkDown(this.cursors.up, 150))
        {
            this.player.y -= 32;
        }
        else if (this.input.keyboard.checkDown(this.cursors.down, 150))
        {
            this.player.y += 32;
        }
  }
}
