import * as products from './products';


export default function GetProduct(): products.Product {
    let random = Math.floor(Math.random() * 4);
    switch (random) {
        case 0: return new products.CocaCola();
        case 1: return new products.Pepsi();
        case 2: return new products.MilkyWay();
        case 3: return new products.Hersey();
    }
}
