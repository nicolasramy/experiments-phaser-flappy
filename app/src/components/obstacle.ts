import 'phaser';
import {Scene} from 'phaser';


export class Obstacle {

    private sprite: Phaser.Physics.Arcade.Sprite;

    constructor(scene: Scene) {}
}

export class Cloud extends Obstacle {

    obstaclesTop: Array<Phaser.GameObjects.Sprite> = [];
    obstaclesBottom: Array<Phaser.GameObjects.Sprite> = [];
    obstaclesFrames;

    obstaclesSpritesTop = [
        19, 20, 21, 22,
        23, 24, 25, 26
    ];

    obstaclesSpritesBushBottom = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    /**
       1. Grass
       2. Forest
       3.
     */

    obstaclesSpritesGrassTrees = [46, 49, 55, 29, 30, 31, 32];
    obstaclesSpritesGrassBushes = [0, 1, 2, 3];


    obstaclesSpritesForrestBottom = [46, 49, 55, 47];
    obstaclesSpritesFallBottom = [47, 51, 53, 57];
    obstaclesSpritesDesertBottom = [54, 50, 56, 39, 40];
    obstaclesSpritesIcedBottom = [48, 50, 56, 68];


}
export class Bush extends Obstacle {}
export class Tree extends Obstacle {}
export class House extends Obstacle {}


export default class Obstacles {
    constructor(scene: Scene) {}
}
