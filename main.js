var mochila=new Array();

mochila.push("corda");
mochila.push("faca");
mochila.push("arame");
mochila.push("lanterna");
mochila.push("pedra");

mochila.splice(2,1);
mochila.sort();
document.write("Qtde  itens mochila: " + mochila.length + "<br>");

document.write(mochila[0]+"<br>");
document.write(mochila[1]+"<br>");
document.write(mochila[2]+"<br>");
document.write(mochila[3]+"<br>");