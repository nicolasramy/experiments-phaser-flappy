import {Scene} from 'phaser';

export default class PlaygroundScene extends Scene {

    player: Phaser.Physics.Arcade.Sprite;
    // cursors: Phaser.Input.CursorKeys;
    cursors;

    counter: number = 0;
    counterStep: number = 10;
    cursorOffsetX: number = 8;
    cursorOffsetY: number = 8;
    obstacleFrame: number = 1;

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

    obstaclesTopOffset: number = 30;

    obstaclesSpritesBottom = this.obstaclesSpritesGrassBushes;

    keyQ;
    keyR;
    keyS;
    keyT;
    keyD;

    constructor() {
        super({
            key: 'PlaygroundScene'
        });
    }

    create(): void {
        this.cursors = this.input.keyboard.createCursorKeys();

        this.keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        this.keyQ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
        this.keyT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.T);
        this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

        // this.add.image(0, 0, 'player/bat', '__BASE').setOrigin(0, 0);

        // Animation set
        this.anims.create({
            key: 'fly',
            frames: this.anims.generateFrameNumbers('player/bat', {frames: [5, 6, 7, 6]}),
            frameRate: 5,
            repeat: -1
        });

        this.anims.create({
            key: 'win',
            frames: this.anims.generateFrameNumbers('player/bat', {frames: [2, 1, 3, 2, 3, 2, 3]}),
            frameRate: 5,
        });

        this.anims.create({
            key: 'die',
            frames: this.anims.generateFrameNumbers('player/bat', {frames: [4, 0, 8, 12]}),
            frameRate: 5,
            repeat: -1
        });

        const keys = ['fly', 'win', 'die'];

        // const playgroundZone = this.add.zone(640, 360, 1280, 720);

        this.player = this.physics.add.sprite(320, 360, 'player/bat');
        this.player.play('fly');
        this.player.setScale(2);
        this.player.setCollideWorldBounds(true);


        const atlasTexture = this.textures.get('obstacles');
        this.obstaclesFrames = atlasTexture.getFrameNames();

        // console.log(frames);
        this.spawnObstacles();


        const cherry = this.add.sprite(200, 500, 'items/cherries');
        // cherry.setScale(1/64, 1/64);
        // cherry.preFX.setPadding(2);
        cherry.postFX.addShine(1.5);
        // cherry.postFX.addBloom();

        // this.player.postFX.addShadow();
        this.player.postFX.addShadow(0, 0, 0.006, 2, 0x333333, 10);

        // this.add.sprite(200, 500, 'items/cherries').setScale(1/64, 1/64).blendMode = 'ADD';

    }

    update(time, delta): void {

        if (this.keyR.isDown) {
            this.scene.restart();
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
            this.obstacleFrame = this.obstacleFrame + 1;

            this.obstaclesTop.push(this.add.sprite(0, 0, `obstacles`, this.obstaclesFrames[this.obstacleFrame]));
            Phaser.Actions.AlignTo(this.obstaclesTop, Phaser.Display.Align.RIGHT_TOP);

            this.obstaclesBottom.push(this.add.sprite(0, 0, `obstacles`, this.obstaclesFrames[this.obstacleFrame]));
            Phaser.Actions.AlignTo(this.obstaclesBottom, Phaser.Display.Align.RIGHT_BOTTOM);
        }

        Phaser.Actions.IncX(this.obstaclesTop, -Math.trunc(0.2 * delta));
        Phaser.Actions.IncX(this.obstaclesBottom, -Math.trunc(0.2 * delta));

        // if ()
        // Phaser.Actions.IncY(obstaclesTopOffset);

        this.counter += 1;
        if (this.counter % this.counterStep == 0) {
            this.events.emit('addScore');
        }

        if (this.input.keyboard.checkDown(this.cursors.left, 100)) {
            this.player.setVelocityX(-this.cursorOffsetX / 2);
        } else if (this.input.keyboard.checkDown(this.cursors.right, 100)) {
            this.player.setVelocityX(this.cursorOffsetX / 2);
        }
    }

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
}
