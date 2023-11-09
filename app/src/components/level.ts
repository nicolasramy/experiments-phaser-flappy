import 'phaser';
import {Scene} from "phaser";

export abstract class Level {
    name: string = 'empty';
    imageKey: string = 'background/empty';

    scene: Scene;
}

export class GrassLevel extends Level {
    readonly name: string = 'grass';
    readonly imageKey: string = 'background/grass';

    private bronzeDistance: number = 1500;
    private silverDistance: number = 2500;
    private goldDistance: number = 5000;

    private fruitDistance: number = 100;
    private fruitRatio: number = 5;

    constructor() {
        super();
    }
}
export class ForestLevel extends Level {
    readonly name: string = 'forest';
    readonly imageKey: string = 'background/forest';

    private bronzeDistance: number = 1500;
    private silverDistance: number = 2500;
    private goldDistance: number = 5000;

    private fruitDistance: number = 500;
    private fruitRatio: number = 5;

    constructor() {
        super();
    }
}
export class FallLevel extends Level {
    readonly name: string = 'fall';
    readonly imageKey: string = 'background/fall';

    private bronzeDistance: number = 1500;
    private silverDistance: number = 2500;
    private goldDistance: number = 5000;

    private fruitDistance: number = 50;
    private fruitRatio: number = 4;

    constructor() {
        super();
    }
}
export class DesertLevel extends Level {

    readonly name: string = 'desert';
    readonly imageKey: string = 'background/desert';

    private bronzeDistance: number = 1500;
    private silverDistance: number = 2500;
    private goldDistance: number = 5000;

    private fruitDistance: number = 500;
    private fruitRatio: number = 8;

    constructor() {
        super();
    }
}

export class WinterLevel extends Level {

    readonly name: string = 'winter';
    readonly imageKey: string = 'background/winter';

    private bronzeDistance: number = 1500;
    private silverDistance: number = 2500;
    private goldDistance: number = 5000;

    private fruitDistance: number = 500;
    private fruitRatio: number = 16;

    constructor() {
        super();
    }
}
