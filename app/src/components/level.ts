import 'phaser';
import {Scene} from "phaser";

import {Player} from "./player"
import {Fruit} from "./fruit"

export abstract class Level {
    hello: number;

    player: Player;
    fruit: Fruit;

    scene: Scene;

    play(scene: Scene): void {
        // scene.launch('ForestBackground');
        let backgroundBackgroundScene = scene.scene.start(
            'BackgroundScene',
            {
                image: 'background/grass',
                scroll: true
            });
    }
    pause(): void {}
    resume(): void {}
    stop(): void {}

}

export class GrassLevel extends Level {

    private bronzeDistance: number = 1500;
    private silverDistance: number = 2500;
    private goldDistance: number = 5000;
    constructor() {
        super();
    }

    play(scene: Scene): void {
        // scene.launch('ForestBackground');
        let backgroundBackgroundScene = scene.scene.start(
            'BackgroundScene',
            {
                image: 'background/grass',
                scroll: true
            });
    }
}
export class ForestLevel extends Level {
    hello: number = 20;

    private energy: integer = 25;
    constructor() {
        super();
    }
}
export class FallLevel extends Level {

    private energy: integer = 40;
    constructor() {
        super();
    }
}

export class WinterLevel extends Level {

    private energy: integer = 40;
    constructor() {
        super();
    }
}
export class DesertLevel extends Level {

    private energy: integer = 40;
    constructor() {
        super();
    }
}
