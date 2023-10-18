import { Scene } from 'phaser';

export default class Background extends Scene {
  constructor() {
    super({
      key: 'BackgroundScene'
    });
  }

  create(): void {
    const backgroundZone = this.add.zone(400, 300, 800, 600);
    const backgroundImage = this.add.image(0,-100,'background/empty');
    Phaser.Display.Align.In.Center(backgroundImage, backgroundZone);
  }
}
