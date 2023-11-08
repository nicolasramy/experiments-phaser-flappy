import 'phaser';
import {Scene} from "phaser";

abstract class Level {
    hello: number;
}

export class GrassLevel extends Level {

    private bronzeDistance: number = 1500;
    private silverDistance: number = 2500;
    private goldDistance: number = 5000;
    constructor() {
        super();
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
