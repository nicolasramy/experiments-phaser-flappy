import 'phaser';
import BackgroundScene from './scenes/background';
import BootScene from './scenes/boot';
import GameScene from './scenes/game';
import PlaygroundScene from './scenes/playground';
import PreloadScene from './scenes/preload';
import ScoreScene from './scenes/score';

const config: Phaser.Types.Core.GameConfig = {
  title: 'Demo Game',

  scene: [
    BootScene,
    PreloadScene,
    GameScene,
    BackgroundScene,
    PlaygroundScene,
    ScoreScene
  ],
  backgroundColor: '#333',
  scale: {
    mode: Phaser.Scale.FIT,
    parent: 'game-container',
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 800,
    height: 600,
    max: {
      width: 800,
      height: 600
    }
  },
  pixelArt: true
};

window.addEventListener('load', () => {
  window['game'] = new Phaser.Game(config);
});
