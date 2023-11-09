import { Scene } from 'phaser';
// import { Apple, Banana, Cherry } from "../components/fruit";
import { Apple, Banana, Cherry } from "../components/fruit";
import { Player } from "../components/player";
import {DesertLevel, FallLevel, ForestLevel, GrassLevel, Level} from "../components/level";
import Between = Phaser.Math.Between;

export default class PlaygroundScene extends Scene {

    player: Player;

    // cursors: PhaserPla.CursorKeys;
    cursors;

    level;

    score: number = 0;
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
    fruits = [];

    obstacles;

    constructor() {
        super({
            key: 'PlaygroundScene'
        });
    }
    init (data){
        this.counter = data.counter ? data.counter : 0;
        this.score = data.score ? data.score : 0;
        this.level = data.level ? data.level : 1;
        // score = 0
        // medals = 0
        // energy = 100
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
        this.fruits.push(this.fruit);

        this.physics.add.collider(this.player, this.fruits, this.collectFruit, null, this);
    }

    compressFruits(): void {
        this.fruits = this.fruits.filter(function (el) {
          return el != null;
        });
    }

    addFruit(): void {
        let fruit;
        switch (Between(1, 3)) {
            case 1:
                fruit = new Apple(this, 0, 0);
                break;

            case 2:
                fruit = new Banana(this, 0, 0);
                break;

            case 3:
                fruit = new Cherry(this, 0, 0);
                break;
        }

        this.fruits.push(fruit);
        this.physics.add.collider(this.player, this.fruits, this.collectFruit, null, this);

        this.compressFruits();
    }

    collectFruit(player, fruit) {
        fruit.disableBody(true, true);
        this.events.emit('addScore', fruit.energy);

        this.player.energy += fruit.energy;
        this.player.energy = this.player.energy < 100 ? this.player.energy : 100;


        let found = this.fruits.findIndex((el) => el == fruit);
        fruit.destroy();
        this.fruits[found] = null;

        this.compressFruits();
    }

    updateFruits(time, delta): void {
        for (let i = 0; i < this.fruits.length; i++) {
            let currentFruit = this.fruits[i];

            currentFruit.update(time, delta);

            if (currentFruit.x < 0) {
                currentFruit.destroy();
                this.fruits[i] = null;
            }
        }

        this.compressFruits();
    }

    update(time, delta): void {

        this.player.update(time, delta, this.input.keyboard, this.cursors);

        // Handle extra keys
        if (this.keyR.isDown) {
            this.events.emit('resetScore');
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


        if (this.input.keyboard.checkDown(this.cursors.space, 100)) {

            /**
            this.obstacleFrame = this.obstacleFrame + 1;

            this.obstaclesTop.push(this.add.sprite(0, 0, `obstacles`, this.obstaclesFrames[this.obstacleFrame]));
            Phaser.Actions.AlignTo(this.obstaclesTop, Phaser.Display.Align.RIGHT_TOP);

            this.obstaclesBottom.push(this.add.sprite(0, 0, `obstacles`, this.obstaclesFrames[this.obstacleFrame]));
            Phaser.Actions.AlignTo(this.obstaclesBottom, Phaser.Display.Align.RIGHT_BOTTOM);
             **/
        }

        this.events.emit('updateEnergy', this.player.energy);

        this.counter += 1;

        let fruitDistance = this.registry.get('fruitDistance');
        let fruitRatio = this.registry.get('fruitRatio');

        this.updateFruits(time, delta);



        let bronzeDistance = this.registry.get('bronzeDistance');


        if (this.counter % this.counterStep == 0) {
            this.events.emit('addScore');
        }

        if (this.counter  > bronzeDistance) {
            this.events.emit('changeLevel',3, this.counter);
            this.counter = 0;
        }

        if (this.fruits.length < fruitRatio && this.counter % fruitDistance == 0) {
            this.addFruit();
        }


        // Phaser.Actions.IncX(this.obstaclesTop, -Math.trunc(0.2 * delta));
        // Phaser.Actions.IncX(this.obstaclesBottom, -Math.trunc(0.2 * delta));

        // if ()
        // Phaser.Actions.IncY(obstaclesTopOffset);

    }
}
