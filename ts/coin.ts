/**
 * Created by plastik on 23/7/16.
 */
namespace Coins {

    let imagePath = 'img/';

    export abstract class Coin {
        value: number;
        constructor(value: number) {
            this.value = value;
        }
        abstract getImageUrl(): string
    }
    export class Quarter extends Coin {
        constructor() {
            super(.25);
        }
        get Value() {
            return this.value;
        }
        getImageUrl(): string {
            return imagePath + 'quarter.png';
        }
    }

    export class Dime extends Coin {
        constructor() {
            super(.10);
        }
        get Value() {
            return this.value;
        }
        getImageUrl(): string {
            return imagePath + 'dime.png';
        }
    }

    export class Half extends Coin {
        constructor() {
            super(.50);
        }
        get Value() {
            return this.value;
        }
        getImageUrl(): string {
            return imagePath + 'half.png';
        }
    }

    export class Dollar extends Coin {
        constructor() {
            super(1);
        }
        get Value() {
            return this.value;
        }
        getImageUrl(): string {
            return imagePath + 'dollar.png';
        }
    }
    var coin = new Quarter();
}

