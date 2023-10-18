import { Scene } from 'phaser';

export default class Background extends Scene {
  constructor() {
    super({
      key: 'BackgroundScene'
    });
  }

  create(): void {
    // const backgroundZone = this.add.zone(400, 300, 1280, 720);
    const backgroundImage = this.add.image(0,512,'background/forest');
    const backgroundImage2 = this.add.image(1024,512,'background/forest');
    // Phaser.Display.Align.In.Center(backgroundImage, backgroundZone);
    // Phaser.Display.Align.In.RightCenter(backgroundImage2, backgroundZone);
  }
}
