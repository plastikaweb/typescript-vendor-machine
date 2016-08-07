var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by plastik on 23/7/16.
 */
var Coins;
(function (Coins) {
    var imagePath = 'img/';
    var Coin = (function () {
        function Coin(value) {
            this.value = value;
        }
        return Coin;
    }());
    Coins.Coin = Coin;
    var Quarter = (function (_super) {
        __extends(Quarter, _super);
        function Quarter() {
            _super.call(this, .25);
        }
        Object.defineProperty(Quarter.prototype, "Value", {
            get: function () {
                return this.value;
            },
            enumerable: true,
            configurable: true
        });
        Quarter.prototype.getImageUrl = function () {
            return imagePath + 'quarter.png';
        };
        return Quarter;
    }(Coin));
    Coins.Quarter = Quarter;
    var Dime = (function (_super) {
        __extends(Dime, _super);
        function Dime() {
            _super.call(this, .10);
        }
        Object.defineProperty(Dime.prototype, "Value", {
            get: function () {
                return this.value;
            },
            enumerable: true,
            configurable: true
        });
        Dime.prototype.getImageUrl = function () {
            return imagePath + 'dime.png';
        };
        return Dime;
    }(Coin));
    Coins.Dime = Dime;
    var Half = (function (_super) {
        __extends(Half, _super);
        function Half() {
            _super.call(this, .50);
        }
        Object.defineProperty(Half.prototype, "Value", {
            get: function () {
                return this.value;
            },
            enumerable: true,
            configurable: true
        });
        Half.prototype.getImageUrl = function () {
            return imagePath + 'half.png';
        };
        return Half;
    }(Coin));
    Coins.Half = Half;
    var Dollar = (function (_super) {
        __extends(Dollar, _super);
        function Dollar() {
            _super.call(this, 1);
        }
        Object.defineProperty(Dollar.prototype, "Value", {
            get: function () {
                return this.value;
            },
            enumerable: true,
            configurable: true
        });
        Dollar.prototype.getImageUrl = function () {
            return 'dollar.png';
        };
        return Dollar;
    }(Coin));
    Coins.Dollar = Dollar;
    var coin = new Quarter();
})(Coins || (Coins = {}));
var ProductCategory = (function () {
    function ProductCategory() {
        this.imgPath = 'img/';
    }
    return ProductCategory;
}());
var SodaCategory = (function (_super) {
    __extends(SodaCategory, _super);
    function SodaCategory() {
        _super.apply(this, arguments);
        this.name = 'Soda';
    }
    SodaCategory.prototype.getImageUrl = function () {
        return this.imgPath + 'sodaCan.png';
    };
    return SodaCategory;
}(ProductCategory));
var CandyBarCategory = (function (_super) {
    __extends(CandyBarCategory, _super);
    function CandyBarCategory() {
        _super.apply(this, arguments);
        this.name = 'Candy bar';
    }
    CandyBarCategory.prototype.getImageUrl = function () {
        return this.imgPath + 'candyBar.png';
    };
    return CandyBarCategory;
}(ProductCategory));
/// <reference path="productCategory.ts" />
var CocaCola = (function () {
    function CocaCola() {
        this.name = 'Coca Cola';
        this.price = 2.30;
        this.category = new SodaCategory();
    }
    return CocaCola;
}());
var Pepsi = (function () {
    function Pepsi() {
        this.name = 'Pepsi';
        this.price = 2.45;
        this.category = new SodaCategory();
    }
    return Pepsi;
}());
var Hersey = (function () {
    function Hersey() {
        this.name = 'Herseys';
        this.price = 1.30;
        this.category = new CandyBarCategory();
    }
    return Hersey;
}());
var MilkyWay = (function () {
    function MilkyWay() {
        this.name = 'Milky Way';
        this.price = 1.80;
        this.category = new CandyBarCategory();
    }
    return MilkyWay;
}());
/// <reference path="products.ts" />
var productFactory = (function () {
    function productFactory() {
    }
    productFactory.GetProduct = function () {
        var random = Math.floor(Math.random() * 4);
        switch (random) {
            case 0: return new CocaCola();
            case 1: return new Pepsi();
            case 2: return new MilkyWay();
            case 3: return new Hersey();
        }
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
        this.acceptedCoins = [new Coins.Dime(), new Coins.Quarter(), new Coins.Half(), new Coins.Dollar()];
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