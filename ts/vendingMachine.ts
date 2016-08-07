/**
 * Created by plastik on 23/7/16.
 */
/// <reference path="coin.ts" />
/// <reference path="products.ts" />
/// <reference path="productFactory.ts" />


enum VendingMachineSize {
    small = 6,
    medium = 9,
    large = 12
}

class Cell {
    constructor(public product: Product) {

    }
    stock = ko.observable(3);
    sold = ko.observable(false);
}

class VendingMachine {
    private paid = ko.observable(0);
    selectedCell = ko.observable(new Cell(new CocaCola()));
    cells = ko.observableArray([]);
    acceptedCoins: Coins.Coin[] = [new Coins.Dime(), new Coins.Quarter(), new Coins.Half(), new Coins.Dollar()];
    canPay = ko.pureComputed(() => this.paid() -
        this.selectedCell().product.price >= 0);

    set size(giveSize: VendingMachineSize) {
        this.cells([]);

        for (var index = 0; index < giveSize; index++) {
            let product = productFactory.GetProduct();
            this.cells.push(new Cell(product));
        }
    }

    select = (cell: Cell): void => {
        cell.sold(false);
        this.selectedCell(cell);
    }

    acceptCoin = (coin: Coins.Quarter): void => {
        let oldTotal = this.paid();
        this.paid(oldTotal + coin.Value);
    }

    pay = (): void => {
        if (this.selectedCell().stock() < 1) {
            alert('out of them!');
            return;
        }
        let currentPaid = this.paid();
        this.paid(Math.round(((currentPaid -
            this.selectedCell().product.price) * 100) / 100));
        let currentStock = this.selectedCell().stock();
        this.selectedCell().stock(currentStock - 1);
        this.selectedCell().sold(true);
    }
}