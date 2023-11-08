import 'phaser';
import {Scene} from "phaser";
import { Sprite } from 'phaser/src/physics/arcade/components';


export default class Player {

    readonly frameNumbersFly: Array<integer> = [5, 6, 7, 6];
    readonly frameNumbersWin: Array<integer> = [2, 1, 3, 2, 3, 2, 3];
    readonly frameNumbersDie: Array<integer> = [4, 0, 8, 12];

    readonly frameRate: number = 5;
    readonly repeat: number = -1;

    scene: Scene;

    sprite: Sprite;
    readonly sprite_key: string = 'player/bat';

    constructor(scene: Scene,) {
        this.scene = scene;
        this.attachAnimations()
        this.sprite = this.scene.physics.add.sprite(320, 360, this.sprite_key);
        this.sprite.setScale(2);
        this.sprite.setCollideWorldBounds(true);

        const keys = ['fly', 'win', 'die'];

        this.sprite.postFX.addShadow(0, 0, 0.006, 2, 0x333333, 10);
    }

    attachAnimations() {
        this.scene.anims.create({
            key: 'fly',
            frames: this.scene.anims.generateFrameNumbers(this.sprite_key, {frames: this.frameNumbersFly}),
            frameRate: this.frameRate,
            repeat: this.repeat
        });

        this.scene.anims.create({
            key: 'win',
            frames: this.scene.anims.generateFrameNumbers(this.sprite_key, {frames: this.frameNumbersWin}),
            frameRate: 5,
        });

        this.scene.anims.create({
            key: 'die',
            frames: this.scene.anims.generateFrameNumbers(this.sprite_key, {frames: this.frameNumbersDie}),
            frameRate: this.frameRate,
            repeat: this.repeat
        });
    }

    win() {
        this.sprite.play('fly');
    }
    die() {
        this.sprite.play('die');
    }

    eat() {}
    resume() {}
    fly() {}

}
