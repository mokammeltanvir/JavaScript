class Car{
    constructor(brand) {
        this.brand  = brand;
    }

    getInfo = () => {
        return 'This car brand name is ' + this.brand;
    }
}

class CarModel extends Car{
    constructor(brand, model){
        super(brand);
        this.model = model;
    }
    printInfo = () => {
        console.log( this.getInfo() + ' and its model number is ' + this.model);
    }
    static getFullModelName = () => {
        return "This is a Static Method";
    }
}


const mazda = new CarModel('Mazda', 'RX-8');
const lancer = new CarModel('Lancer', 'EVO-9');
const porche = new CarModel('Porche', '911');


mazda.printInfo();
lancer.printInfo();
porche.printInfo();

console.log(CarModel.getFullModelName());

