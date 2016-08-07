/// <reference path="products.ts" />


class productFactory {
    static GetProduct(): Pepsi {
        return new Pepsi();
    }
}