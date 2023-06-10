this.valueA = 'a';
console.log(valueA);
valueB = 'b';
console.log(this.valueB);

function checkThis(){
    console.log(this);
}
function checkThis2(){
    "use strict";
    console.log(this);
}
checkThis();
checkThis2();

function Product(name, price){
    this.name = name;
    this.price = price;
}
const product1 = Product('가방',2000);
console.log(window.name);
console.log(window.price);

const product2 = {
    name:'가방2',
    price: 3000,
    getVAT(){
        return this.price / 10;
    }
}
const valueOfProduct2 = product2.getVAT();
console.log(valueOfProduct2);

const calVAT = product2.getVAT;
const VAT2 = calVAT();
console.log(VAT2);
