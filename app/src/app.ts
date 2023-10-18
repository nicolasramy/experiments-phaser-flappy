import Phaser from 'phaser';

class BackgroundScene extends Phaser.Scene {

    constructor() {
         super({ key: 'test', active: false });
    }

    init(data) {}
    preload() {}

    create(data) {
        this.add.image(data.x, data.y, "player");
    }

    update() {}
}

class PlaygroundScene extends Phaser.Scene {

    constructor() {
         super({ key: 'test', active: false });
    }

    init(data) {
        this.gif = data.image;
    }
    preload() {
        console.log(this.png);
        this.load.image('player', 'assets/player/bat.32x32.gif');
    }

    create(data) {
        this.add.image(data.x, data.y, "player");
    }

    update() {}
}

const config = {
    type: Phaser.AUTO,
    parent: 'content',
    width: 800,
    height: 600,
    scene: PlaygroundScene
};

window.onload = () => {
    let simpleGame = new Phaser.Game(config);
    simpleGame.scene.start("test", { image: 'A bat appears', x: 400, y: 300 });
}
