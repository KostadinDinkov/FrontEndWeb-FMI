function Item(name, discount) {
    this.name = name;
    this.discount = discount;

    this.price = function () {
        return Item.prototype.base() * (1 - this.discount);
    }
}

Item.prototype.base = function() {
    return 1000;
}

var testItem = new Item("soap", 0.97);

console.log(testItem.price());