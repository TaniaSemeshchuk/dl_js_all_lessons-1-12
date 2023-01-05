//вправа 1
let week=[
    'Понеділок', 
    'Вівторок',
    'Середа',
    'Четвер',
    'Пʼятниця',
    'Субота',
    'Неділя'
];
console.log(week);

//вправа 2
console.log(week[5]);

//вправа 3
week[5]='Субота - заняття з JS';
console.log(week);

//вправа 4
let menu=[
    'Чотири сири',
    'Папероні',
    'Маргарита'
];
console.log(menu);
menu[3]='Мʼясна';
console.log(menu);

//вправа 5
let menu1=[
    'Чотири сири', 159, true,
    'Папероні', 179, false,
    'Маргарита', 185, true,
    'мʼясна', 200, true
];
console.log(menu1);

//вправа 6
console.log(menu1[3]);
console.log(menu1[4]);
console.log(menu1[5]);

//вправа 7
let menu2=[
    ['Чотири сири', 159, true],
    ['Папероні', 179, false],
    ['Маргарита', 185, true],
    ['Мʼясна', 200, true]
];
console.log(menu2);

//вправа 8
console.log(menu2[1]);

//вправа 9
console.log(menu2[1][1]);

//вправа 10
console.log(menu.length);

let lastElId=menu.length-1;
console.log(lastElId);

let lastEl=menu[lastElId];
console.log(lastEl);

//вправа 11 (1)
let group1=[
    'Саша',
    'Олег',
    'Жанна'
];
let group2=[
    'Таня',
    'Наташа'
];
let group=group1.concat(group2);
console.log(group);

//вправа 12 (2)
let menuPizzas=[
    'Чотири сири',
    'Маргарита',
    'Папероні'
];
let menuDrinks=['Сік', 'Молочний коктель', 'Чай', 'Кава'];
let menuDesserts=['Чізкейк', 'Сирники', 'Морозиво'];
let menuCaffe=menuPizzas.concat(menuDrinks, menuDesserts);
console.log(menuCaffe);

//вправа 13 (3)
let classGroup=[
    'Іваненко Іван',
    'Петренко Петро',
    'Семенко Семен',
    'Семещук Тетяна'
];
console.log(classGroup);
console.log(classGroup.indexOf('Семещук Тетяна'));
console.log(classGroup.indexOf('тетяна семещук'));
console.log(classGroup.indexOf('Тетяна Семещук'));
console.log(classGroup.indexOf('семещук тетяна'));

//вправа 14 (4)
console.log(classGroup.indexOf('Пʼяточкін Петро'));

//вправа 15 (5)
console.log(classGroup[2]);

//вправа 16 (6)
let myName=['Семещук', 'Таня'];
console.log(myName);
console.log(myName.join());

//вправа 17 (7)
console.log(myName.join(' '));

//вправа 18 (8)
let myNumber=6;
let randomNumber=Math.random()*10;
console.log(randomNumber);
let roundNumber=Math.floor(randomNumber);
console.log(roundNumber);