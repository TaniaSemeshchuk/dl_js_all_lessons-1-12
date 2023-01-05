//Цикл while

// вправа 1
// виводить числа від 1 до 10
let number=1;

while(number<=10){
    console.log(number);
    number++; // число number буде з кожним запуском циклу збільшуватися на 1
}

// виводить числа від 10 до 1
let number1=10;

while(number1>=1){
    console.log(number1);
    number1--; // число number1 буде з кожним запуском циклу зменшуватися на 1
}


// Цикл for

//вправа 2
// виводить числа від 1 до 10
for(let numberFor=1; numberFor<=10; numberFor++){
    console.log(numberFor);
}

// виводить числа від 10 до 1
for(let numberFor10To1=10; numberFor10To1>=1; numberFor10To1--){
    console.log(numberFor10To1);
}

//вправа 3
let password=[
    '123456',
    '1234567',
    '12345678',
    '123456789'
];

for(let i=0; i<password.length; i++){
    if(password[i].length>=8){
        console.log(password[i]+' - це надійний пароль');
    }
    else{
        console.log(password[i]+' - це ненадійний пароль');
    }
}

//Функції

//вправа 4
/*let myName=function(){
    alert('Таня');
}
myName();*/

//вправа 5
//додавання
let add=function(numberFirst, numberSecond){
    console.log(numberFirst+numberSecond);
}
add(2,3);

//віднімання
let minus=function(numberFirst, numberSecond){
    console.log(numberFirst-numberSecond);
}
minus(3,2);

//множення
let multi=function(numberFirst, numberSecond){
    console.log(numberFirst*numberSecond);
}
multi(2,2);

//ділення
let div=function(numberFirst, numberSecond){
    console.log(numberFirst/numberSecond);
}
div(30,5);



// return - повернення результату

// додавання з return
let add2=function(numberFirst, numberSecond){
    return numberFirst+numberSecond;
}
console.log(add2(10, 5));

//віднімання
let minus2=function(numberFirst, numberSecond){
    return numberFirst-numberSecond;
}
console.log(minus2(10, 5));

//множення
let multi2=function(numberFirst, numberSecond){
    return numberFirst*numberSecond;
}
console.log(multi2(10, 5));

//ділення
let div2=function(numberFirst, numberSecond){
    return numberFirst/numberSecond;
}
console.log(div2(10, 5));

let vyr=multi2(2, 5)+div2(10, 10);
console.log(vyr);




//вправа 6

let myNameLangth=function(name){
    return name.length;
}
console.log('У моєму імені '+myNameLangth('Таня')+' букв.');


//вправа 7
let code='123';

let discount=function(myCode){
    if(myCode==code){
        return 'Ваша знижка 30%';
    }
    else{
        return 'У вас немає знижки';
    }
}

console.log(discount('1234'));

//вправа 7 перероблена через вікна
let code2='123';

let discount2=function(myCode){
   if(myCode==code){
        return 'Ваша знижка 30%';
    }
    else{
        return 'У вас немає знижки';
    } 
}

let myCodeEnter=prompt('Введи свою знижку?');

alert(discount2(myCodeEnter));