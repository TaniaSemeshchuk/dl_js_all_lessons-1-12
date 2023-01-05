//Обʼєкти в js

/*let car='BMW';
console.log(car);

document.getElementById("demo").innerHTML=car;*/

/*const car={name: 'Fiat', model: 500, color: 'білий'};
console.log(car);

document.getElementById("demo").innerHTML='Назва машини '+car.name;*/

// вправа 1

/*const person={
    firsName: 'Таня', 
    lastName: 'Семещук', 
    age: 32, 
    eyeColor: 'карий'
};*/

/*document.getElementById("demo").innerHTML=
person.firsName+' '+person.lastName+' '+person.age+' роки.';*/

// вправа 2

/*document.getElementById("demo").innerHTML=
person.firsName+" "+person.lastName;*/

// вправа 3

/*document.getElementById("demo").innerHTML=
person['firsName']+' '+person['lastName'];*/

// вправа 4
/*const goods={};

goods.name='iPhone 14';
goods.price=799;

document.getElementById("demo").innerHTML=
goods.name+' - '+goods.price;

console.log(goods);*/

//вправа 4
/*const goods=[
    {name: 'iPhone 12', price: 599},
    {name: 'iPhone 13', price: 699},
    {name: 'iPhone 14', price: 799},
    {name: 'iPhone 14 Pro', price: 999}
];*/

//console.log(goods);

//вправа 6
/*document.getElementById('demo').innerHTML=
goods[1].name+' - '+goods[1].price;*/

// вправа 7
/*for(let i=0; i<=3; i++){
    console.log(goods[i].name+' - '+goods[i].price);
}*/

// вправа 8
/*const iPhone12={name: 'iPhone 12', price: 599};
const iPhone13={name: 'iPhone 13', price: 699};
const iPhone14={name: 'iPhone 14', price: 799};
const iPhone14Pro={name: 'iPhone 14 Pro', price: 999};

let goods=[
    iPhone12,
    iPhone13,
    iPhone14,
    iPhone14Pro
];*/

//console.log(goods);

// вправа 9
/*document.getElementById('demo').innerHTML=
goods[2].name+' - '+goods[2].price;*/

// вправа 10

/*let balance=100;

if (balance>=goods[1].price){
    document.getElementById("demo").innerHTML=
    'Операція успішна!';
}
else{
    document.getElementById("demo").innerHTML=
    'Операція неуспішна!';
}*/

//вправа 11

/*let balance=prompt('Введіть баланс вашої карти');

if (balance>=goods[1].price){
    document.getElementById("demo").innerHTML=
    'Операція успішна!';
}
else{
    document.getElementById("demo").innerHTML=
    'Операція неуспішна!';
}*/

// вправа 12
const score={blueColor: 0, yellowColor: 0};

score.blueColor+=1;
score.yellowColor+=2;

let totalScore=score.blueColor+score.yellowColor;

document.getElementById('demo').innerHTML=totalScore;