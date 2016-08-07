/// <reference path="productCategory.ts" />

class CocaCola {
    name = 'Coca Cola';
    price = 2.30;
    category = new SodaCategory();
    getImageUrl() {
        return 'img/cocaCan.png';
    }
}
class Pepsi {
    name = 'Pepsi';
    price = 2.45;
    category = new SodaCategory();
    getImageUrl() {
        return 'img/pepsiCan.png';
    }
}