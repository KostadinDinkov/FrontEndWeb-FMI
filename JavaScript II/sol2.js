class Person {
    constructor(name) {
        this.name = name;
    }

    static planet = "Земя";

    print() {
        console.log("Здравей " + this.name + " от планетата " + Person.planet);
    }
}

var pesho = new Person("Пешо");
var gosho = new Person("Гошо");
var tosho = new Person("Тошо");
pesho.print();
gosho.print();
tosho.print();