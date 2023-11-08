import { Scene, Physics } from 'phaser';
import { Between } from 'phaser/src/math';
import { Sprite } from 'phaser/src/physics/arcade/components';

export class Fruit extends Physics.Arcade.Sprite {
    energy: number;
    xStart: number = 1200;

    yStartMin: number = 60;
    yStartMax: number = 400;

    shineSpeed: number = 1.5;

    constructor (scene: Scene, x: number, y: number, texture: string, frame?: string | number) {
        super(scene, x, y, texture, frame);

        this.x = this.xStart;
        this.y = Between(this.yStartMin, this.yStartMax);

        this.postFX.addShine(this.shineSpeed);

        scene.add.existing(this);
    }

    update(time, delta) {
        this.x -= delta / 8;
    }
}

export class Apple extends Fruit {
    energy: number = 15;

    constructor(scene: Scene, x: number, y: number) {
        super(scene, x, y, 'items/apple');
    }
}

export class Banana extends Fruit {
    energy: number = 25;

    constructor(scene: Scene, x: number, y: number) {
        super(scene, x, y, 'items/bananas');
    }
}
export class Cherry extends Fruit {
    readonly energy: number = 40;

    constructor(scene: Scene, x: number, y: number) {
        super(scene, x, y, 'items/cherries');
    }
}
