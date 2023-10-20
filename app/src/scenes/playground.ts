import {Scene} from 'phaser';

export default class PlaygroundScene extends Scene {

    player: Phaser.Physics.Arcade.Sprite;
    // cursors: Phaser.Input.CursorKeys;
    cursors;

    cursorOffsetY: number = 8;
    obstacleFrame: number = 1;

    obstaclesTop: Array<Phaser.GameObjects.Sprite> = [];
    obstaclesBottom: Array<Phaser.GameObjects.Sprite> = [];
    obstaclesFrames;

    constructor() {
        super({
            key: 'PlaygroundScene'
        });
    }

    create(): void {
        this.cursors = this.input.keyboard.createCursorKeys();

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

        const obstaclesSpritesTop = [
            46, 19, 5, 21,
            24, 25, 26, 27,
            46, 19, 5, 21,
            24, 25, 26, 27,
        ];

        const obstaclesSpritesBottom = [
            46, 57, 5, 30,
            46, 57, 5, 30,
            46, 57, 5, 30,
            46, 57, 5, 30,
        ];

        for (let i = 1; i <= 15; i++) {
            const spritTop = this.add.sprite(1024, 200, `obstacles`, this.obstaclesFrames[obstaclesSpritesTop[i]]);
            spritTop.postFX.addShadow(0, 0, 0.03, 0.75, 0x333333, 10, 0.8);
            this.obstaclesTop.push(spritTop);
            this.obstaclesBottom.push(this.add.sprite(1024, 600, `obstacles`, this.obstaclesFrames[obstaclesSpritesBottom[i]]));
        }

        Phaser.Actions.AlignTo(this.obstaclesTop, Phaser.Display.Align.RIGHT_TOP);
        Phaser.Actions.AlignTo(this.obstaclesBottom, Phaser.Display.Align.RIGHT_BOTTOM);

        const cherry = this.add.sprite(200, 500, 'items/cherries');
        cherry.setScale(1/64, 1/64);
        // cherry.preFX.setPadding(2);
        cherry.postFX.addShine(1.5);

        // this.player.postFX.addShadow();
        this.player.postFX.addShadow(0, 0, 0.006, 2, 0x333333, 10);

        // this.add.sprite(200, 500, 'items/cherries').setScale(1/64, 1/64).blendMode = 'ADD';

    }

    update(time, delta): void {
        //  Vertical movement every 100ms
        if (this.input.keyboard.checkDown(this.cursors.up, 100)) {
            this.player.setVelocityY(-this.cursorOffsetY * delta);
        } else if (this.input.keyboard.checkDown(this.cursors.down, 100)) {
            this.player.setVelocityY(this.cursorOffsetY * delta);
        } else if (this.input.keyboard.checkDown(this.cursors.space, 100)) {
            this.obstacleFrame = this.obstacleFrame + 1;

            this.obstaclesTop.push(this.add.sprite(0, 0, `obstacles`, this.obstaclesFrames[this.obstacleFrame]));
            Phaser.Actions.AlignTo(this.obstaclesTop, Phaser.Display.Align.RIGHT_TOP);

            this.obstaclesBottom.push(this.add.sprite(0, 0, `obstacles`, this.obstaclesFrames[this.obstacleFrame]));
            Phaser.Actions.AlignTo(this.obstaclesBottom, Phaser.Display.Align.RIGHT_BOTTOM);
        }

        Phaser.Actions.IncX(this.obstaclesTop, -Math.trunc(0.2 * delta));
        Phaser.Actions.IncX(this.obstaclesBottom, -Math.trunc(0.2 * delta));

        // if (this.input.keyboard.checkDown(this.cursors.left, 100)) {
        //     this.player.setVelocityX(-this.cursorOffsetX);
        // } else if (this.input.keyboard.checkDown(this.cursors.right, 100)) {
        //     this.player.setVelocityX(this.cursorOffsetX);
        // }
    }
}
