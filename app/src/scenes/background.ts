import { Scene } from 'phaser';

export default class Background extends Scene {

  backgroundImages = [];
  constructor() {
    super({
      key: 'BackgroundScene'
    });
  }

  create(): void {
    this.backgroundImages.push(this.add.image(512, 512, 'background/forest'));
    this.backgroundImages.push(this.add.image(1536, 512, 'background/forest'));
  }

  update(): void {
    this.backgroundImages.map((x) => x.x -=1);

    if (this.backgroundImages[0].x <= -512) {
      this.backgroundImages.shift();
    }

    if (this.backgroundImages[1].x == 768) {
      this.backgroundImages.push(this.add.image(1792, 512, 'background/forest'));
    }
  }
}
