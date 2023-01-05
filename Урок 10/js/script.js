window.onload=function(){
    var canvas1=document.getElementById('myCanvas1');
    var ctx1=canvas1.getContext("2d");
    var img1=document.getElementById("photo1");
    ctx1.drawImage(img1, 10, 10, 80, 91.38);

    var canvas2=document.getElementById('myCanvas2');
    var ctx2=canvas2.getContext("2d");
    var img2=document.getElementById("photo2");
    ctx2.drawImage(img2, 10, 10, 80, 80);

    var canvas3=document.getElementById('myCanvas3');
    var ctx3=canvas3.getContext("2d");
    var img3=document.getElementById("photo2");
    ctx3.drawImage(img3, 10, 10, 80, 80);

    var canvas4=document.getElementById('myCanvas4');
    var ctx4=canvas4.getContext("2d");
    var img4=document.getElementById("photo2");
    ctx4.drawImage(img4, 10, 10, 80, 80);
};

var canvas1=document.getElementById('myCanvas1');
var ctx1=canvas1.getContext("2d");
ctx1.font="30px Tahoma";
ctx1.fillText("Тетяна", 110, 50);
ctx1.font="22px Tahoma";
ctx1.fillText("вчителька", 110, 80);



var canvas2=document.getElementById('myCanvas2');
var ctx2=canvas2.getContext("2d");
ctx2.fillStyle="#dcdcdc";
ctx2.fillRect(0, 0, 300, 110);
ctx2.fillStyle="#000000";
ctx2.font="30px Tahoma";
ctx2.fillText("Аркадій", 110, 65);

var canvas3=document.getElementById('myCanvas3');
var ctx3=canvas3.getContext("2d");
ctx3.fillStyle="#dcdcdc";
ctx3.fillRect(0, 0, 300, 110);
ctx3.fillStyle="#000000";
ctx3.font="30px Tahoma";
ctx3.fillText("Владислав", 110, 65);

var canvas4=document.getElementById('myCanvas4');
var ctx4=canvas4.getContext("2d");
ctx4.fillStyle="#dcdcdc";
ctx4.fillRect(0, 0, 300, 110);
ctx4.fillStyle="#000000";
ctx4.font="30px Tahoma";
ctx4.fillText("Остап", 110, 65);


$("h1").slideDown(1000);
$("#myCanvas1").delay(1200);
$("#myCanvas1").slideDown(1500);

$("#myCanvas2").delay(2300);
$("#myCanvas2").slideDown(1500);

$("#myCanvas3").delay(2300);
$("#myCanvas3").slideDown(1500);

$("#myCanvas4").delay(2300);
$("#myCanvas4").slideDown(1500);