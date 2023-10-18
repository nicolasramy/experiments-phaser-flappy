import { Scene } from 'phaser';

export default class GameScene extends Scene {

  constructor() {
    super({
      key: 'GameScene'
    });
  }

  create(): void {
    this.scene.launch('BackgroundScene');
    this.scene.launch('PlaygroundScene');
    this.scene.launch('ScoreScene');
  }

  update(): void { }
}
