import { Scene } from 'phaser';
// import { Apple, Banana, Cherry } from "../components/fruit";
import { Apple, Banana, Cherry } from "../components/fruit";
import { Player } from "../components/player";

export default class PlaygroundScene extends Scene {

    player: Player;
    // cursors: PhaserPla.CursorKeys;
    cursors;

    counter: number = 0;
    counterStep: number = 10;

    keyQ;
    keyW;
    keyR;
    keyS;
    keyT;
    keyD;
    keyF;

    fruit;
    fruits;

    obstacles;

    constructor() {
        super({
            key: 'PlaygroundScene'
        });
    }

    create(): void {
        // Attach keyboard
        this.cursors = this.input.keyboard.createCursorKeys();

        // Define extra keys
        this.keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.keyQ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
        this.keyT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.T);
        this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);

        // Add player and props
        this.player = new Player(this, 320, 360)
        this.fruit = new Cherry(this, 600, 600);
    }

    update(time, delta): void {
        // Handle extra keys
        if (this.keyR.isDown) {
            this.scene.restart();
            this.events.emit('resetScore');
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


        if (this.input.keyboard.checkDown(this.cursors.space, 100)) {

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

        this.counter += 1;
        // /*
        if (this.counter % this.counterStep == 0) {
            this.events.emit('addScore');
        }
        // */

        this.player.update(time, delta, this.input.keyboard, this.cursors);
        this.fruit.update(time, delta);


        this.events.emit('updateEnergy', this.player.energy);

        // console.log(this.fruit.yOffset);
        // console.log(this.fruit.isDeletable());
        // this.fruit.update(time, delta);
        // this.fruit.move();
        /*
        if (this.fruit.x < 0) {
            this.fruit = new Banana(this, 200, 25);
        } else {
            this.fruit.move();
        }*/
        // console.log(this.fruit.sprite.body.x);
    }
}
