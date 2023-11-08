import 'phaser';
import BackgroundScene from './scenes/background';
import BootScene from './scenes/boot';
import GameScene from './scenes/game';
import PlaygroundScene from './scenes/playground';
import PreloadScene from './scenes/preload';
import ScoreScene from './scenes/score';

const config: Phaser.Types.Core.GameConfig = {
    title: 'Experiments Phaser Flappy',
    type: Phaser.AUTO,
    backgroundColor: '#222',
    pixelArt: true,

    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 8},
            debug: false
        }
    },

    scale: {
        mode: Phaser.Scale.FIT,
        parent: 'game-container',
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1280,
        height: 720,
        max: {
            width: 1280,
            height: 720
        }
    },
    scene: [
        BootScene,
        PreloadScene,
        GameScene,
        BackgroundScene,
        PlaygroundScene,
        ScoreScene
    ]
};

window.addEventListener('load', () => {
    window['game'] = new Phaser.Game(config);
});
