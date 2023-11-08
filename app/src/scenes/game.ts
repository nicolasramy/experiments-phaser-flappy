import { Scene } from 'phaser';
import {ForestLevel, GrassLevel} from "../components/level";

export default class GameScene extends Scene {

  level;
  levels;
  score: number = 0;

  constructor() {
    super({
      key: 'GameScene'
    });
  }

  create(): void {

    this.scene.launch('BackgroundScene');
    this.scene.launch('PlaygroundScene');
    this.scene.launch('ScoreScene');

    const ourGame = this.scene.get('PlaygroundScene');

    ourGame.events.on('changeLevel', function (name){
      console.log(name);

      this.level = new ForestLevel();
      this.level.play(this);

    }, this);

    this.start();
  }

  start(): void {
    this.level = new GrassLevel();
    // level.play(this);
  }
}
