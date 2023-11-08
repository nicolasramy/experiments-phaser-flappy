import { Scene } from 'phaser';
import {GrassLevel} from "../components/level";

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

    this.start();
  }

  update(): void {}

  start(): void {
    let level = new GrassLevel()
    // level.play(this);
  }
  win(): void {}
  loose(): void {}
  stop(): void {}
  pause(): void {}
  resume(): void {}
  menu(): void {}
}
