import { Scene, Physics } from 'phaser';
import { Between } from 'phaser/src/math';
import { Sprite } from 'phaser/src/physics/arcade/components';

class Fruit extends Physics.Arcade.Sprite {
    energy: number;
    xOffset: number = 800;
    yOffset: number;
    yOffsetMin: number = 0;
    yOffsetMax: number = 720;

    constructor (scene: Scene, x: number, y: number, texture: string, frame?: string | number) {
        super(scene, x, y, texture, frame);

        //  You can either do this:
        scene.add.existing(this);
        // scene.physics.add.existing(this);
        // scene.physics.add.existing(this);
        this.postFX.addShine(1.5);
    }

    move() {
        this.x -= 3;
    }
}

export class Apple extends Fruit {
    energy: number = 15;
    sprite_key: string = 'items/apple';
}

export class Banana extends Fruit {
    energy: number = 25;
    sprite_key: string = 'items/bananas';
}
export class Cherry extends Fruit {
    readonly energy: number = 40;
    readonly sprite_key: string = 'items/cherries';
}
