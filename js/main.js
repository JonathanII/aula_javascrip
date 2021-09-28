
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>GRACIAS POR VISITARNOS!</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Gracias por clicar!");
}

function redirecionar(){
    window.open("https://google.com/"); //abre en otra pestaña
    //window.location.href = "https://google.com/"; //abre en la misma pestaña
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Gracias por pasar el mouse!";
    elemento.innerHTML = "Gracias por pasar el mouse!";
    //alert("Cambia el texto");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Pasa el mouse por aqui";
    elemento.innerHTML = "Pasa el mouse por aqui";
}

function load(){
    alert("Pagina cargada!");
}

function funcaochange(elemento){
    console.log(elemento.value);
}

/* function Variaveis

var validar
function validaidade(idade){
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("¿Cuál es tu edad?");
validaidade(idade)
console.log(validar);
//alert(validaidade(idade));



/*
function suma(n1, n2){
    return n1 + n2;
}

alert(suma(8, 19));

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

alert(setReplace("Vamos River", "River", "Argentina"));
*/


/* Data

var d = new Date();
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
//alert(d.getMonth()+1); al mes siempre le ponemos +1 pq cuenta desde 0
//alert(d);
*/

/* //Laços de repetição//


var count;
for(count=0; count <=5; count++){
    alert(count);
};
*/

/*
var count = 0;
while (count <= 5){
    console.log(count);
    //count = count + 1;
    alert(count);
    count++;
};
*/


/* Condicionais

var edad = prompt("¿Cuál es tu edad?"); // Esta variable abre una pregunta para el usuario//
//var edad = 18;
if (edad >= 18){
    alert("Mayor de edad");
}else{
    alert("menor de edad");
};
*/

/* Diccionario

var frutas = [{nombre:"manzana", color:"rojo"}, {nombre:"uva", color:"morado"}]
alert(frutas[1].nombre)
console.log(frutas);

/*
var fruta = {nombre:"manzana", color:"rojo"}
alert(fruta.color)
console.log(fruta.nombre);
console.log(fruta);
*/

/* Array

var lista = ["manzana", "pera", "naranja"];
//lista.pop(); /*retiro un elemento*/
//lista.push("uva");  /*adiciono un elemento*/

//console.log(lista);
//console.log(lista.length) /*Me dice cuantos items hay en la lista*/
//console.log(lista.reverse()) /*lista en orden inverso*/
//console.log(lista.toString());
//console.log(lista.join(" | ")) /*transforma en string pero coloca lo que quieres*/  


/*  Introduccion a listas

var nome = "Jonathan Segundo";
var n1 = 33;
var n2 = 10;
var frase = "Argentina es el mejor equipo del mundo";
// alert(nome + " tiene " + idade + " años");//
//alert(idade + idade2);

console.log(nome);
console.log(n1 * n2);
//console.log(frase.toLowerCase())
//console.log(frase.replace("Argentina","River Plate"));
//alert(frase.replace("Argentina","Somos")*/

