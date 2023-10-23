class Fruit {
    private energy: number;

    constructor(energy: number) {
        this.energy = energy;
    }
}

export class Apple extends Fruit {
    constructor() {
        super(15);
    }
}
export class Banana extends Fruit {
    constructor() {
        super(25);
    }
}
export class Cherry extends Fruit {
    constructor() {
        super(40);
    }
}
