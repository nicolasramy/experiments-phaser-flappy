import 'phaser';
import {Scene} from "phaser";

class Level {

}

export class GrassLevel extends Level {

    private energy: integer = 15;
    constructor() {
        super();
    }
}
export class ForestLevel extends Level {

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
