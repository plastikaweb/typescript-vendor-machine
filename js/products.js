define(["require", "exports", './productCategory'], function (require, exports, categories) {
    "use strict";
    var CocaCola = (function () {
        function CocaCola() {
            this.name = 'Coca Cola';
            this.price = 2.30;
            this.category = new categories.SodaCategory();
        }
        return CocaCola;
    }());
    exports.CocaCola = CocaCola;
    var Pepsi = (function () {
        function Pepsi() {
            this.name = 'Pepsi';
            this.price = 2.45;
            this.category = new categories.SodaCategory();
        }
        return Pepsi;
    }());
    exports.Pepsi = Pepsi;
    var Hersey = (function () {
        function Hersey() {
            this.name = 'Herseys';
            this.price = 1.30;
            this.category = new categories.CBCategory();
        }
        return Hersey;
    }());
    exports.Hersey = Hersey;
    var MilkyWay = (function () {
        function MilkyWay() {
            this.name = 'Milky Way';
            this.price = 1.80;
            this.category = new categories.CBCategory();
        }
        return MilkyWay;
    }());
    exports.MilkyWay = MilkyWay;
});
//# sourceMappingURL=products.js.map