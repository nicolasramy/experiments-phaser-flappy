import { Scene } from 'phaser';

export default class Background extends Scene {

  readonly speed: number = 1;

  backgroundKey: string;

  backgroundImages: Array<Phaser.GameObjects.Image> = [];

  wrapper;


  constructor() {
    super({
      key: 'BackgroundScene'
    });

    /**
     * background/empty
     * background/grass
     * background/forest
     * background/fall
     * background/desert
     */
    this.backgroundKey = 'background/desert';
  }

  create(): void {
    this.backgroundImages.push(this.add.image(512, 512, this.backgroundKey));
    this.backgroundImages.push(this.add.image(1536, 512, this.backgroundKey));
  }

  update(time, delta): void {
    Phaser.Actions.IncX(this.backgroundImages, -this.speed);

    if (this.backgroundImages[1].x == 768) {
      this.backgroundImages.push(this.add.image(1792, 512, this.backgroundKey));
    }

    if (this.backgroundImages[0].x <= -512) {
      this.backgroundImages.shift();
    }
  }
}
