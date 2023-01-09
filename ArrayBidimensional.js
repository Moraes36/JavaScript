var mochila=new Array();

var item1=["corda",1];
var item2=["faca",2];
var item3=["remedio",10];
var item4=["pedra",32];
var item5=["pilha",6];
var item6=["lanterna",1];

mochila[0]=item1;
mochila[1]=item2;
mochila[2]=item3;
mochila[3]=item4;
mochila[4]=item5;
mochila[5]=item6;

document.write(`${mochila[0][0]}: ${mochila[0][1]}<br>`);
document.write(mochila[1][0]+": "+mochila[1][1]+"<br>");
document.write(mochila[2][0]+": "+mochila[2][1]+"<br>");
document.write(mochila[3][0]+": "+mochila[3][1]+"<br>");
document.write(mochila[4][0]+": "+mochila[4][1]+"<br>");
document.write(mochila[5][0]+": "+mochila[5][1]+"<br>");