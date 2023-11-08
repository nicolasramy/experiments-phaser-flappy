import 'phaser';
import {Scene} from "phaser";

import {Player} from "./player"
import {Fruit} from "./fruit"

export abstract class Level {
    name: string = 'empty';
    imageKey: string = 'background/empty';
    scroll: boolean = false;

    scene: Scene;

    play(scene: Scene): void {
        let backgroundBackgroundScene = scene.scene.start(
            'BackgroundScene',
            {
                image: this.imageKey,
                scroll: this.scroll
            }
        );
    }
    pause(): void {}
    resume(): void {}
    stop(): void {}
    finished(): void {
        // if player.distance >=
    }

}

export class GrassLevel extends Level {
    readonly name: string = 'grass';
    readonly imageKey: string = 'background/grass';
    readonly scroll: boolean = true;

    private bronzeDistance: number = 1500;
    private silverDistance: number = 2500;
    private goldDistance: number = 5000;

    private fruitDistance: number = 500;
    private fruitRatio: number = 1;

    constructor() {
        super();
    }

    play(scene: Phaser.Scene) {
        super.play(scene);
    }
}
export class ForestLevel extends Level {
    readonly name: string = 'forest';
    readonly imageKey: string = 'background/forest';

    private bronzeDistance: number = 1500;
    private silverDistance: number = 2500;
    private goldDistance: number = 5000;

    private fruitDistance: number = 500;
    private fruitRatio: number = 2;

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
