import { Scene } from 'phaser';
import {DesertLevel, FallLevel, ForestLevel, GrassLevel} from "../components/level";

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

    this.level = new GrassLevel();

      this.registry.set('bronzeDistance', this.level.bronzeDistance);
      this.registry.set('silverDistance', this.level.bronzeDistance);
      this.registry.set('goldDistance', this.level.goldDistance);
      this.registry.set('fruitDistance', this.level.fruitDistance);
      this.registry.set('fruitRatio', this.level.fruitRatio);

    this.scene.launch('BackgroundScene', {imageKey: this.level.imageKey});
    this.scene.launch('PlaygroundScene', {level: 1, counter: 0, score: 0});
    this.scene.launch('ScoreScene');

    const playground = this.scene.get('PlaygroundScene');

    playground.events.on('changeLevel', function (level, counter) {
      if (level == 2) {
        this.level = new ForestLevel();
      } else if (level == 3) {
        this.level = new FallLevel();
      } else if (level == 4) {
        this.level = new DesertLevel();
      } else {
        this.level = new GrassLevel();
      }

      this.registry.set('bronzeDistance', this.level.bronzeDistance);
      this.registry.set('silverDistance', this.level.bronzeDistance);
      this.registry.set('goldDistance', this.level.goldDistance);
      this.registry.set('fruitDistance', this.level.fruitDistance);
      this.registry.set('fruitRatio', this.level.fruitRatio);

      this.registry.set('imageKey', this.level.imageKey);
      let backgroundScene = this.scene.start('BackgroundScene', {imageKey: this.level.imageKey});
    }, this);
  }

}
