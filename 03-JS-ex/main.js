//Initial array
var a = new Array(10, 5, 13, 18, 51);

function ex1(){
    for (var i = 0; i < a.length; i++){
        console.log(a[i]);
    }
}

function ex2(){
    function double(input){
        return input * 2;
    }

    var b = new Array();
    a.forEach(element => {
        b.push(element * 2);
    });

    return(b);
}

function ex3(){
    function checkEven(num){
        return !(num % 2);
    }
    var c = new Array();
    c = a.filter(checkEven);

    return(c);
}

function ex4(inputArray){
    inputArray.forEach(element => {
        if (element < 10) return true;
    });
    return false;
}

function ex5(){
    var d = a.filter(function(a) {return a % 3 == 0} );
    return(d);
}

function ex6(){
    var sum = a.reduce(function (acc, val) {return acc + val} );
    return(sum);
}

function ex7(){
    var e = a.slice(a.length - 2, a.length);
    return(e);
}

function ex8(){
    var datesArray = new Array();
    datesArray.push(new Date());
    datesArray.push(new Date(2018, 11, 08));
    datesArray[1].setHours(21);

    var monthDays = datesArray.map(function(el) {
        var tempdate = new Date(el)
        tempdate.setDate(0)
        return [tempdate.getDate(), el.getDay()];
    } )

    var combined = new Array();
    var stringedDays = new Array ("Неделя", "Понеделник", "Вторник", "Сряда", "Четвъртък", "Петък", "Събота");

    for(var i = 0; i < datesArray.length; i++){
        combined.push(  "Дата: " + (datesArray[i].getDate() < 10 ? "0" + datesArray[i].getDate() : datesArray[i].getDate()) + "." + 
                        (datesArray[i].getMonth() + 1) + "." +
                        datesArray[i].getFullYear() +
                        ", Час: " + (datesArray[i].getHours() < 10 ? "0" + datesArray[i].getHours() : datesArray[i].getHours()) + ":" +
                        (datesArray[i].getMinutes() < 10 ? "0" + datesArray[i].getMinutes() : datesArray[i].getMinutes()) + ":" +
                        (datesArray[i].getSeconds() < 10 ? "0" + datesArray[i].getSeconds() : datesArray[i].getSeconds()) +
                        ", " + stringedDays[monthDays[i][1]] +
                        ", " + monthDays[i][0] + " дни");
    }

    return(combined);
}

console.log("Задача 1: ");
ex1();
console.log("Задача 2: ");
console.log(ex2());
console.log("Задача 3: ");
console.log(ex3());
console.log("Задача 4: ");
console.log(ex4(a));
console.log("Задача 5: ");
console.log(ex5());
console.log("Задача 6: ");
console.log(ex6());
console.log("Задача 7: ");
console.log(ex7());
console.log("Задача 8: ");
console.log(ex8());