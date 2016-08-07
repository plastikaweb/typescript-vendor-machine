abstract class ProductCategory {
    protected imgPath = 'img/';
    name: string;
    abstract getImageUrl(): string;
}

class SodaCategory extends ProductCategory {
    name = 'Soda';
    getImageUrl() {
        return this.imgPath + 'sodaCan.png';
    }
}

class CandyBarCategory extends ProductCategory {
    name = 'Candy bar';
    getImageUrl() {
        return this.imgPath + 'candyBar.png';
    }
}

export {
    ProductCategory, SodaCategory, CandyBarCategory as CBCategory
}