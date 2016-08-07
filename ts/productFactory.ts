/// <reference path="products.ts" />


class productFactory {
    static GetProduct(): Product {
        let random = Math.floor(Math.random() * 4);
        switch(random) {
            case 0: return new CocaCola();
            case 1: return new Pepsi();
            case 2: return new MilkyWay();
            case 3: return new Hersey();
        }
    }
}