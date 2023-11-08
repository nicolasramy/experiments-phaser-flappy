import 'phaser';
import {Physics, Scene} from 'phaser';


class Obstacle extends Physics.Arcade.Sprite {
    constructor(scene: Scene, x: number, y: number, texture: string, frame?: string | number) {
        super(scene, x, y, texture, frame);
    }
}


class Fruit extends Physics.Arcade.Sprite {


    obstacleFrame: number = 1;

    obstaclesTop: Array<Phaser.GameObjects.Sprite> = [];
    obstaclesBottom: Array<Phaser.GameObjects.Sprite> = [];
    obstaclesFrames;

    obstaclesSpritesTop = [
        19, 20, 21, 22,
        23, 24, 25, 26
    ];

    obstaclesSpritesGrassBushes = [0, 1, 2, 3];


    obstaclesSpritesForrestBottom = [46, 49, 55, 47];
    obstaclesSpritesFallBottom = [47, 51, 53, 57];
    obstaclesSpritesDesertBottom = [54, 50, 56, 39, 40];
    obstaclesSpritesIcedBottom = [48, 50, 56, 68];

    obstaclesTopOffset: number = 30;

    obstaclesSpritesBottom = this.obstaclesSpritesGrassBushes;

    private sprite: Phaser.Physics.Arcade.Sprite;

    constructor(scene: Scene, x: number, y: number, texture: string, frame?: string | number) {
        super(scene, x, y, texture, frame);

    }

    /*
    spawnObstacles(): void {
        this.obstaclesTop = [];
        this.obstaclesBottom = [];
        for (let i = 0; i <= 8; i++) {
            const spriteTop = this.add.sprite(
                1024,
                200,
                `obstacles`,
                this.obstaclesFrames[this.obstaclesSpritesTop[i]]
            );
            const spriteBottom = this.add.sprite(1024,
                600,
                `obstacles`,
                this.obstaclesFrames[this.obstaclesSpritesBottom[i]]
            );
            spriteTop.postFX.addShadow(0, 0, 0.03, 0.75, 0x333333, 10, 0.8);

            this.obstaclesTop.push(spriteTop);
            this.obstaclesBottom.push(spriteBottom);
        }

        Phaser.Actions.AlignTo(this.obstaclesTop, Phaser.Display.Align.RIGHT_TOP);
        Phaser.Actions.AlignTo(this.obstaclesBottom, Phaser.Display.Align.RIGHT_BOTTOM);
    }

    spanObstacle(): void {
      const startY = Phaser.Math.Between(100, 300);
      const spriteTopId = Phaser.Math.Between(0, 8);
      const spriteBottomId = Phaser.Math.Between(0, 8);
    }
    */
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
