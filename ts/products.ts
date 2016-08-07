import * as categories from './productCategory';

export interface Product {
    name: string;
    price: number;
    category?: categories.ProductCategory;
}

export class CocaCola implements Product {
    name = 'Coca Cola';
    price = 2.30;
    category = new categories.SodaCategory();
}
export class Pepsi implements Product{
    name = 'Pepsi';
    price = 2.45;
    category = new categories.SodaCategory();
}

export class Hersey implements Product {
    name = 'Herseys';
    price = 1.30;
    category = new categories.CBCategory();
}

export class MilkyWay implements Product {
    name = 'Milky Way';
    price = 1.80;
    category = new categories.CBCategory();
}