import { Scene } from 'phaser';

export default class BackgroundScene extends Scene {

  readonly speed: number = 1;
  scroll: boolean = false;
  imageKey: string = 'background/empty';

  images: Array<Phaser.GameObjects.Image> = [];

  constructor() {
    super({
      key: 'BackgroundScene'
    });
  }
    init (data){
        this.imageKey = data.image ? data.image : this.imageKey;
        this.scroll = data.scroll ? data.scroll : this.scroll;
    }


  create(): void {
    this.images.push(this.add.image(512, 512, this.imageKey));
    this.images.push(this.add.image(1536, 512, this.imageKey));
  }

  update(time, delta): void {
    if (this.scroll) {
      Phaser.Actions.IncX(this.images, -this.speed);

      if (this.images[1].x == 768) {
        this.images.push(this.add.image(1792, 512, this.imageKey));
      }

      if (this.images[0].x <= -512) {
        this.images.shift();
      }
    }
  }
}
