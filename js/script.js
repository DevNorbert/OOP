function Phone(brand, price, color, battery) {
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.battery = battery;
}

Phone.prototype.printInfo = function() {
    console.log('The phone brand is ' + this.brand + ', color is ' + this.color + ' and the price is ' + this.price + '.');
    if(this.battery > 3000){
        console.log('The battery should last all day in the ' + this.brand);
    }
}

var iPhone6S = new Phone('Apple', 2250, 'silver', 1715);
var GalaxyS6 = new Phone('Samsung', 1000, 'gold', 2550);
var OnePlus = new Phone('OnePlus', 1800, 'black', 3100);

iPhone6S.printInfo();
GalaxyS6.printInfo();
OnePlus.printInfo();