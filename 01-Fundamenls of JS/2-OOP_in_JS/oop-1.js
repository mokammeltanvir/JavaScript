// function Person(name, mobile, date_of_birth){   /// Constructor Person
//     this.name = name;
//     this.mobile = mobile;
//     this.birthday = new Date(date_of_birth);
//     this.ageCalculate = () => {
//         const diff = Date.now() - this.birthday.getTime();
//         const age = new Date(diff);
//         return age.getUTCFullYear() - 1970;
//     }
// }

// /* Simple */

// class Car {
//     constructor(name, model, weight, color){
//         this.name = name;
//         this.model = model;
//         this.weight = weight;
//         this.color = color;
//     }

//     getFullModel(){
//         return this.name+' '+ this.model;
//     }
//     setName(newName){
//         this.name = newName; 
//     }
// }

// const mazda = new Car("Mazda", "RX-8", 975, 'red');
// mazda.setName('Lancer');


// const per1 = new Person("Mokammel", "0123456789", "1999-10-10");

// console.log(mazda.getFullModel());
// console.log(per1.ageCalculate());


class Person{
    constructor(firstname,lastname, mobile, date_of_birth, yearly_income){
        this.firstname = firstname;
        this.lastname = lastname;
        this.mobile = mobile;
        this.birthday = new Date(date_of_birth);
        this.yearly_income = yearly_income;
    }
    getFullName = () => {
        return this.firstname+' '+ this.lastname
    }
    getAge = () => {
        const diff = Date.now() - this.birthday.getTime();
        const age  = new Date(diff);
        return age.getUTCFullYear() - 1970;
    }
    getTaxAmount = () => {
        let taxAmount = 0;
        if(this.yearly_income>250000){
            taxAmount=this.yearly_income*0.25
        }else if(this.yearly_income>250000 && this.yearly_income<550000){
            taxAmount = this.yearly_income*0.30
        }else if(this.yearly_income>750000){
            taxAmount = this.yearly_income*0.35
        }else {
            taxAmount = 0;
        }
        return taxAmount;
    }
}


const khan = new Person('Salman', 'Khan', '12345678999', '1975-07-12', 750000);

console.log(khan.getFullName(), khan.getAge(), khan.getTaxAmount());