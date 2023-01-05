var valueA=2022;
console.log(valueA);
valueA='Таня';
console.log(valueA);

let valueB=15;
console.log(valueB);
valueB='жовтень';
console.log(valueB);

const valueC=2022;
console.log(valueC);
/* таке робити неможна
valueC=2023;
console.log(valueC);
*/

//number - числа
console.log(5);
let numberA=99*456;
console.log(numberA);

//String - рядкі
console.log('I am a string');
let stringA='I am a long string'.slice(0, 4);
console.log(stringA);

let multiType=numberA*stringA;
console.log(multiType);

//Вправа 2
let numberB=12345;
let numberC=6789;

//додавання
let addNumbers=numberB+numberC;
console.log(addNumbers);

//віднімання
let vidnimNumbers=numberB-numberC;
console.log(vidnimNumbers);

//множення
let multiNumbers=numberB*numberC;
console.log(multiNumbers);

//ділення
let dilNumbers=numberB/numberC;
console.log(dilNumbers);

let manyNumbers=1234+56*7-89/10;
console.log(manyNumbers);

//Вправа 7
let stringB='My name is';
let stringC='Tania';

let text=stringB+' '+stringC;
console.log(text);

document.write(text);

console.log(text.length);

let java='Java';
let script='Script';

let javaLength=java.length;
console.log(javaLength);

let scriptLength=script.length;
console.log(scriptLength);

let javaScript=java+script;
console.log(javaScript);
console.log(javaScript.length);

document.write(javaScript);

let myName='Tania';
console.log(myName[0]); //T
console.log(myName[1]); //a
console.log(myName[2]); //n
console.log(myName[3]); //i
console.log(myName[4]); //a

let stringText='I am a long string';
console.log(stringText);

let sliceString=stringText.slice(7, 11);
console.log(sliceString);
console.log(stringText.slice(7));

let upperText=javaScript.toUpperCase();
console.log(upperText);

let lowerText=javaScript.toLowerCase();
console.log(lowerText);

//Вправа 10
let myString='mY NAmE IS taniA';
console.log(myString);

//1
let allString=myString.toLowerCase();
console.log(allString);

//2
let endString=allString.slice(1,11);
console.log(endString);

let nameString=allString.slice(11);
console.log(nameString);

let firstLetter=allString[0].toUpperCase();
console.log(firstLetter);

let bigLetterName=nameString[0].toUpperCase();
console.log(bigLetterName);

let endNameString=nameString.slice(1);
console.log(endNameString);

let newString=firstLetter+endString+bigLetterName+endNameString;
console.log(newString);



