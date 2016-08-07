/**
 * Created by plastik on 23/7/16.
 */
var Quarter = (function () {
    function Quarter() {
        this.value = .25;
    }
    Object.defineProperty(Quarter.prototype, "Value", {
        get: function () {
            return this.value;
        },
        set: function (newValue) {
            this.value = newValue;
        },
        enumerable: true,
        configurable: true
    });
    Quarter.prototype.getImageUrl = function () {
        return 'img/quarter.png';
    };
    return Quarter;
}());
var coin = new Quarter();
var SodaCategory = (function () {
    function SodaCategory() {
        this.name = 'Soda';
    }
    SodaCategory.prototype.getImageUrl = function () {
        return 'img/sodaCan.png';
    };
    return SodaCategory;
}());
/// <reference path="productCategory.ts" />
var CocaCola = (function () {
    function CocaCola() {
        this.name = 'Coca Cola';
        this.price = 2.30;
        this.category = new SodaCategory();
    }
    CocaCola.prototype.getImageUrl = function () {
        return 'img/cocaCan.png';
    };
    return CocaCola;
}());
var Pepsi = (function () {
    function Pepsi() {
        this.name = 'Pepsi';
        this.price = 2.45;
        this.category = new SodaCategory();
    }
    Pepsi.prototype.getImageUrl = function () {
        return 'img/pepsiCan.png';
    };
    return Pepsi;
}());
/// <reference path="products.ts" />
var productFactory = (function () {
    function productFactory() {
    }
    productFactory.GetProduct = function () {
        return new Pepsi();
    };
    return productFactory;
}());
/**
 * Created by plastik on 23/7/16.
 */
/// <reference path="coin.ts" />
/// <reference path="products.ts" />
/// <reference path="productFactory.ts" />
var VendingMachineSize;
(function (VendingMachineSize) {
    VendingMachineSize[VendingMachineSize["small"] = 6] = "small";
    VendingMachineSize[VendingMachineSize["medium"] = 9] = "medium";
    VendingMachineSize[VendingMachineSize["large"] = 12] = "large";
})(VendingMachineSize || (VendingMachineSize = {}));
var Cell = (function () {
    function Cell(product) {
        this.product = product;
        this.stock = ko.observable(3);
        this.sold = ko.observable(false);
    }
    return Cell;
}());
var VendingMachine = (function () {
    function VendingMachine() {
        var _this = this;
        this.paid = ko.observable(0);
        this.selectedCell = ko.observable(new Cell(new CocaCola()));
        this.cells = ko.observableArray([]);
        this.acceptedCoins = [new Quarter()];
        this.canPay = ko.pureComputed(function () { return _this.paid() -
            _this.selectedCell().product.price >= 0; });
        this.select = function (cell) {
            cell.sold(false);
            _this.selectedCell(cell);
        };
        this.acceptCoin = function (coin) {
            var oldTotal = _this.paid();
            _this.paid(oldTotal + coin.Value);
        };
        this.pay = function () {
            if (_this.selectedCell().stock() < 1) {
                alert('out of them!');
                return;
            }
            var currentPaid = _this.paid();
            _this.paid(Math.round(((currentPaid -
                _this.selectedCell().product.price) * 100) / 100));
            var currentStock = _this.selectedCell().stock();
            _this.selectedCell().stock(currentStock - 1);
            _this.selectedCell().sold(true);
        };
    }
    Object.defineProperty(VendingMachine.prototype, "size", {
        set: function (giveSize) {
            this.cells([]);
            for (var index = 0; index < giveSize; index++) {
                var product = productFactory.GetProduct();
                this.cells.push(new Cell(product));
            }
        },
        enumerable: true,
        configurable: true
    });
    return VendingMachine;
}());
/**
 * Created by plastik on 23/7/16.
 */
/// <reference path="vendingMachine.ts" />
/// <reference path="typings/knockout.d.ts" />
var machine = new VendingMachine();
machine.size = VendingMachineSize.medium;
ko.applyBindings(machine);
//# sourceMappingURL=app.js.map