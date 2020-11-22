class PrivatePerson {
    getSecretSalaryInfo = function (){
        const _salary = 1000;
        return _salary;
    }
};

var person = new PrivatePerson();

var stoleSalaryInfo = person.getSecretSalaryInfo();

console.log(person.getSecretSalaryInfo());
console.log(stoleSalaryInfo);