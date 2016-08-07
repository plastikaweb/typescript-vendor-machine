/// <reference path="productCategory.ts" />

interface Product {
    name: string;
    price: number;
    category?: ProductCategory;
}

class CocaCola implements Product {
    name = 'Coca Cola';
    price = 2.30;
    category = new SodaCategory();
}
class Pepsi implements Product{
    name = 'Pepsi';
    price = 2.45;
    category = new SodaCategory();
}

class Hersey implements Product {
    name = 'Herseys';
    price = 1.30;
    category = new CandyBarCategory();
}

class MilkyWay implements Product {
    name = 'Milky Way';
    price = 1.80;
    category = new CandyBarCategory();
}