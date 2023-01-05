/*Логічні оператори 
Булевий тип даних   Boolean
true правда істина 1
false неправда хиба 0*/

console.log(true);
console.log(false);

/*&&  означає і*/
console.log(true && true);
console.log(false && true);
console.log(false && false);
console.log(true && false);

/*вправа 1 */
let hadShwer=false;
let hadBag=false;
console.log(hadShwer && hadBag);

/*|| означає або */
console.log(true || true);
console.log(false || true);
console.log(true || false);
console.log (false || false);

/*вправа 2 */
let hasApple=false;
let hasOrange=false;
console.log(hasApple || hasOrange);

/*! означає ні, тобто заперечення */
/*вправа 3 */
let goJS=false;
console.log(!goJS);

/*вправа 4 */
let myAge=32;
let ageVarify=18;
let verify=myAge > ageVarify;
console.log(verify);

/*вправа 5 */
let myAge1=18;
let ageVarify1=18;
let verify1=myAge1 >= ageVarify1;
console.log(verify1);

/*вправа 6*/
let age=12;
let ageVarify2=12;
let varify2=age <= ageVarify2;
console.log(varify2);

// == означає дорівнює або рівне
let ageTania=12;
let ageSasha=11;
let varifyAge=ageTania == ageSasha;
console.log(varifyAge);

//вправа 9
let ageMy=10;
let adult=true;
let varifyFilm=(ageMy>=12) || (ageMy < 12 && adult==true);
console.log(varifyFilm);

// умовний оператор
// вправа 10
let myName='Тетяна';

if (myName.length >= 6){
    console.log('Довге');
}
if (myName.length < 6){
    console.log('Коротке');
}

//вправа 12
let MyAge1=11;
let adult1=true;

if (MyAge1==12 || (MyAge1!==12 && adult1)){
    console.log('Можна йти на фільм');
}
else{
    console.log('На фільм йти не можна');
}

//вправа 13
let password='1234567890';

if (password=='123456789'){
    console.log('пароль правильний');
}
else{
    console.log('пароль неправильний');
}

//вправа 15
let myPassword='123456789';
let myLogin='Tania';

if (myPassword=='123456789' && myLogin=='Tania'){
    console.log('Login and password is OK');
}
else if(myPassword!=='123456789' && myLogin=='Tania'){
    console.log('Password is not OK');
}
else if(myPassword=='123456789' && myLogin!=='Tania'){
    console.log('Login is not OK');
}
else{
    console.log('Login and password is not OK');
}