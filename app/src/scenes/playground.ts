import {Scene} from 'phaser';

export default class PlaygroundScene extends Scene {

    player;
    // cursors: Phaser.input.CursorKeys;
    cursors;

    cursorOffset: number = 16;

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

        this.player = this.add.sprite(150, 300, 'player/bat');
        this.player.play('fly');
        this.player.setScale(2);


        const atlasTexture = this.textures.get('obstacles');
        const frames = atlasTexture.getFrameNames();

        console.log(frames);

        this.add.image(600, 400, 'obstacles', frames[49]);
        this.add.image(300, 400, 'obstacles', frames[57]);

    }

    update(): void {
        //  Vertical movement every 100ms
        if (this.input.keyboard.checkDown(this.cursors.up, 100)) {
            this.player.y -= this.cursorOffset;
        } else if (this.input.keyboard.checkDown(this.cursors.down, 100)) {
            this.player.y += this.cursorOffset;
        }

        if (this.input.keyboard.checkDown(this.cursors.left, 250))
        {
            this.player.play('die');
        }
        else if (this.input.keyboard.checkDown(this.cursors.right, 250))
        {
            this.player.play('win');
        }
    }
}
