define(["require", "exports", './products'], function (require, exports, products) {
    "use strict";
    function GetProduct() {
        var random = Math.floor(Math.random() * 4);
        switch (random) {
            case 0: return new products.CocaCola();
            case 1: return new products.Pepsi();
            case 2: return new products.MilkyWay();
            case 3: return new products.Hersey();
        }
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = GetProduct;
});
//# sourceMappingURL=productFactory.js.map