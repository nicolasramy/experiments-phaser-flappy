import {Scene} from 'phaser';

export default class PlaygroundScene extends Scene {

    player: Phaser.Physics.Arcade.Sprite;
    // cursors: Phaser.Input.CursorKeys;
    cursors;

    cursorOffsetX: number = 75;
    cursorOffsetY: number = 150;

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

        const playgroundZone = this.add.zone(640, 360, 1280, 720);

        this.player = this.physics.add.sprite(150, 300, 'player/bat');
        this.player.play('fly');
        this.player.setScale(2);
        this.player.setCollideWorldBounds(true);


        const atlasTexture = this.textures.get('obstacles');
        const frames = atlasTexture.getFrameNames();

        console.log(frames);

        let obstacle1 = this.add.image(600, 400, 'obstacles', frames[46]);
        let obstacle2 = this.add.image(300, 400, 'obstacles', frames[57]);
        let obstacle3 = this.add.image(300, 400, 'obstacles', frames[5]);
        let obstacle4 = this.add.image(500, 400, 'obstacles', frames[30]);
        this.add.image(800, 200, 'obstacles', frames[19]);
        this.add.image(700, 500, 'obstacles', frames[21]);

        Phaser.Display.Align.In.BottomCenter(obstacle1, playgroundZone);

    }

    update(): void {
        //  Vertical movement every 100ms
        if (this.input.keyboard.checkDown(this.cursors.up, 100)) {
            this.player.setVelocityY(-this.cursorOffsetY);
        } else if (this.input.keyboard.checkDown(this.cursors.down, 100)) {
            this.player.setVelocityY(this.cursorOffsetY);
        }

        if (this.input.keyboard.checkDown(this.cursors.left, 100)) {
            this.player.setVelocityX(-this.cursorOffsetX);
        } else if (this.input.keyboard.checkDown(this.cursors.right, 100)) {
            this.player.setVelocityX(this.cursorOffsetX);
        }
    }
}
