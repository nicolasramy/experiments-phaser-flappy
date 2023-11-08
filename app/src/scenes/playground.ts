import { Scene } from 'phaser';
// import { Apple, Banana, Cherry } from "../components/fruit";
import { Banana } from "../components/fruit";
import { Player } from "../components/player2";

export default class PlaygroundScene extends Scene {

    player: Player;
    // cursors: PhaserPla.CursorKeys;
    cursors;

    counter: number = 0;
    counterStep: number = 10;
    cursorOffsetX: number = 8;
    cursorOffsetY: number = 8;

    keyQ;
    keyW;
    keyR;
    keyS;
    keyT;
    keyD;
    keyF;

    fruit;

    constructor() {
        super({
            key: 'PlaygroundScene'
        });
    }

    create(): void {
        this.cursors = this.input.keyboard.createCursorKeys();

        this.keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.keyQ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
        this.keyT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.T);
        this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);


        this.player = new Player(this, 320, 360)
        this.player.fly();
        this.player.setCollideWorldBounds(true);


        this.fruit = new Banana(this, 600, 600, "items/bananas");
        // this.add.s
    }

    update(time, delta): void {

        if (this.keyR.isDown) {
            this.scene.restart();
        }

        if (this.keyW.isDown) {
            this.player.win();
        }

        if (this.keyD.isDown) {
            this.player.die();
        }

        if (this.keyF.isDown) {
            this.player.fly();
        }

        //  Vertical movement every 100ms
        if (this.input.keyboard.checkDown(this.cursors.up, 100)) {
            this.player.setVelocityY(-this.cursorOffsetY * delta);
        } else if (this.input.keyboard.checkDown(this.cursors.down, 100)) {
            this.player.setVelocityY(this.cursorOffsetY * delta);
        } else if (this.input.keyboard.checkDown(this.cursors.left, 100)) {
            this.player.setVelocityX(-this.cursorOffsetY * delta);
        } else if (this.input.keyboard.checkDown(this.cursors.right, 100)) {
            this.player.setVelocityX(this.cursorOffsetY * delta);
        } else if (this.input.keyboard.checkDown(this.cursors.space, 100)) {

            /**
            this.obstacleFrame = this.obstacleFrame + 1;

            this.obstaclesTop.push(this.add.sprite(0, 0, `obstacles`, this.obstaclesFrames[this.obstacleFrame]));
            Phaser.Actions.AlignTo(this.obstaclesTop, Phaser.Display.Align.RIGHT_TOP);

            this.obstaclesBottom.push(this.add.sprite(0, 0, `obstacles`, this.obstaclesFrames[this.obstacleFrame]));
            Phaser.Actions.AlignTo(this.obstaclesBottom, Phaser.Display.Align.RIGHT_BOTTOM);
             **/
        }

        // Phaser.Actions.IncX(this.obstaclesTop, -Math.trunc(0.2 * delta));
        // Phaser.Actions.IncX(this.obstaclesBottom, -Math.trunc(0.2 * delta));

        // if ()
        // Phaser.Actions.IncY(obstaclesTopOffset);

        // this.counter += 1;
        /*
        if (this.counter % this.counterStep == 0) {
            this.events.emit('addScore');
        }
        */

        if (this.input.keyboard.checkDown(this.cursors.left, 100)) {
            this.player.setVelocityX(-this.cursorOffsetX / 2);
        } else if (this.input.keyboard.checkDown(this.cursors.right, 100)) {
            this.player.setVelocityX(this.cursorOffsetX / 2);
        }

        // console.log(this.fruit.yOffset);
        // console.log(this.fruit.isDeletable());
        // this.fruit.update(time, delta);
        // this.fruit.move();
        if (this.fruit.x < 0) {
            this.fruit = new Banana(this, 200, 25, "items/bananas");
        } else {
            this.fruit.move();
        }
        // console.log(this.fruit.sprite.body.x);
    }
}
