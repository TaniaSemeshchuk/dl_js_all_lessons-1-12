// вправа 9
/*let message=function(){
    alert('Навчатися з Digital Learning - це круто!');
}

setTimeout(message, 5000);*/

//вправа 10
/*let message=function(){
    alert('Навчатися з Digital Learning - це круто!');
}

let timeoutID=setTimeout(message, 3000);

clearTimeout(timeoutID);*/

// вправа 11
let counter=0;
let printMessage=function(){
    console.log('Ти дивишся сюди уже '+counter+' сек.!');
    counter++;
}

setInterval(printMessage, 1000);