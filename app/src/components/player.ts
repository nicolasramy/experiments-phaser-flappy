import 'phaser';
import {Scene} from "phaser";


export default class Player {

    private frameNumbersFly: Array<integer> = [5, 6, 7, 6];
    private frameNumbersWin: Array<integer> = [2, 1, 3, 2, 3, 2, 3];
    private frameNumbersDie: Array<integer> = [4, 0, 8, 12];

    private frameRate: number = 5;
    private repeat: number = -1;

    private scene: Scene;

    private sprite: Phaser.Physics.Arcade.Sprite;
    private sprite_key: string = 'player/bat';

    constructor(scene: Scene,) {
        this.scene = scene;
        this.attachAnimations()
        this.sprite = this.scene.physics.add.sprite(320, 360, this.sprite_key);
        this.sprite.setScale(2);
        this.sprite.setCollideWorldBounds(true);
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
