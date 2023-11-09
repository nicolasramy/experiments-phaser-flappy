import 'phaser';
import {Physics, Scene} from "phaser";


export class Player extends Physics.Arcade.Sprite {

    readonly spriteKey: string = 'player/bat';

    readonly frameNumbersFly: Array<integer> = [5, 6, 7, 6];
    readonly frameNumbersWin: Array<integer> = [2, 1, 3, 2, 3, 2, 3];
    readonly frameNumbersDie: Array<integer> = [4, 0, 8, 12];

    readonly frameRate: number = 5;
    readonly frameRepeat: number = -1;

    cursorOffsetX: number = 16;
    cursorOffsetY: number = 8;

    energy: number = 100;
    alive: boolean = true;

    constructor (scene: Scene, x: number, y: number, frame?: string | number) {
        super(scene, x, y, 'player/bat', frame);

        // Animation set
        scene.anims.create({
            key: 'fly',
            frames: scene.anims.generateFrameNumbers(
                this.spriteKey,
                {frames: this.frameNumbersFly}
            ),
            frameRate: this.frameRate,
            repeat: this.frameRepeat
        });

        scene.anims.create({
            key: 'win',
            frames: scene.anims.generateFrameNumbers(
                this.spriteKey,
                {frames: this.frameNumbersWin}
            ),
            frameRate: this.frameRate,
        });

        scene.anims.create({
            key: 'die',
            frames: scene.anims.generateFrameNumbers(
                this.spriteKey,
                {frames: this.frameNumbersDie}
            ),
            frameRate: this.frameRate,
            repeat: this.frameRepeat
        });

        this.setScale(2);
        this.postFX.addShadow(0, 0, 0.006, 2, 0x333333, 10);

        //  You can either do this:
        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.setCollideWorldBounds(true);
        this.fly();
    }

    fly() {
        this.play('fly');
        this.alive = true;
        this.setBounce(0);
    }

    win() {
        this.play('win');
        this.alive = true;
    }

    die() {
        if (this.alive) {
            this.play('die');
            this.setBounce(0.7);
            this.alive = false;
        }
    }

    update(time, delta, keyboard, cursors): void {

        //  Handle movements (every 100ms)
        if (keyboard.checkDown(cursors.up, 100)) {
            this.setVelocityY(-this.cursorOffsetY * delta);
            this.energy -= 10 / delta;
        }

        if (keyboard.checkDown(cursors.down, 100)) {
            this.setVelocityY(this.cursorOffsetY * delta);
            this.energy -= 10 / delta;
        }

        if (keyboard.checkDown(cursors.left, 100)) {
            this.setVelocityX(-this.cursorOffsetX * delta);
            this.energy -= 20 / delta;
        }

        if (keyboard.checkDown(cursors.right, 100)) {
            this.setVelocityX(this.cursorOffsetX * delta);
            this.energy -= 20 / delta;
        }

        this.energy -= 1 / delta;  // 1 / delta ~ 35s
        if (this.energy < 0) {
            this.die();
        }
    }
}
