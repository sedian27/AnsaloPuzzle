const letras = document.getElementById("letras");
const numeros = document.getElementById("numeros");

const btn0 = document.getElementById("0");
const btn1 = document.getElementById("1");
const btn2 = document.getElementById("2");
const btn3 = document.getElementById("3");
const btn4 = document.getElementById("4");
const btn5 = document.getElementById("5");
const btn6 = document.getElementById("6");
const btn7 = document.getElementById("7");
const btn8 = document.getElementById("8");
const btn9 = document.getElementById("9");

// Codigo Antiguo
// let cantidadLetras = 0;
// let cantidadNumeros = 0;

// let validoLetras = false;
// let validoNumeros = false;

// let i = 1;

// mensaje por defecto

// // funcion que escribira en el h2 vacio
// const llenarCampo = (letra, numero) => {
//   // cambio de mensaje
//   if (cantidadLetras == 10 && cantidadNumeros == 10) {
//     mensaje = "Completado!";
//     validoNumeros = false;
//   } else if (cantidadLetras == 10) {
//     mensaje = "faltan numeros";
//     validoLetras = false;
//   }

//   // empezamos con las letras
//   if (validoLetras && i == numero) {
//     letras.innerHTML += letra;
//     i++;
//     cantidadLetras++;
//     if (i == 10) {
//       i = 0;
//     }
//   }
//   // Seguimos con los numeros
//   else if (validoNumeros && i == numero) {
//     numeros.innerHTML += numero;
//     i++;
//     cantidadNumeros++;
//     if (i == 10) {
//       i = 0;
//     }
//   } else {
//     alert(mensaje);
//   }
// };

const letrasJ = {
  1: "A",
  2: "B",
  3: "C",
  4: "D",
  5: "E",
  6: "F",
  7: "G",
  8: "H",
  9: "I",
  0: "J",
};

let apuntador = 1;
let max = 10;
let mensaje = "faltan letras";

let letrasCompletas = false;
let numerosCompletos = false;

const estaCompleto = (campo) => {
  if (campo === "letras") {
    return letras.innerHTML.length === max ? true : false;
  } else {
    return numeros.innerHTML.length === max ? true : false;
  }
};

const moverApuntador = () => {
  apuntador++;
  if (apuntador === max) {
    apuntador = 0;
  }
};

const mostrarMensaje = () => {
  if (letrasCompletas && numerosCompletos) {
    mensaje = "Completado!";
  } else if (letrasCompletas) {
    mensaje = "faltan numeros";
  }
  alert(mensaje);
};

const llenarCampoLetras = (letra) => {
  if (!letrasCompletas)
    if (letrasJ[apuntador] === letra) {
      letras.innerHTML += letra;
      moverApuntador();
    } else {
      mostrarMensaje();
    }
  letrasCompletas = estaCompleto("letras");
};

const llenarCampoNumero = (numero) => {
  if (!numerosCompletos && letrasCompletas)
    if (apuntador === numero) {
      numeros.innerHTML += numero;
      moverApuntador();
    } else {
      mostrarMensaje();
    }
  numerosCompletos = estaCompleto("numeros");
};

const llenarCampo = (letra, numero) => {
  if (!letrasCompletas) {
    llenarCampoLetras(letra);
  } else {
    llenarCampoNumero(numero);
  }

  if (letrasCompletas && numerosCompletos) {
    mostrarMensaje();
  }
};

btn1.onclick = () => {
  llenarCampo("A", 1);
};

btn2.onclick = () => {
  llenarCampo("B", 2);
};

btn3.onclick = () => {
  llenarCampo("C", 3);
};

btn4.onclick = () => {
  llenarCampo("D", 4);
};

btn5.onclick = () => {
  llenarCampo("E", 5);
};

btn6.onclick = () => {
  llenarCampo("F", 6);
};
btn7.onclick = () => {
  llenarCampo("G", 7);
};
btn8.onclick = () => {
  llenarCampo("H", 8);
};
btn9.onclick = () => {
  llenarCampo("I", 9);
};
btn0.onclick = () => {
  llenarCampo("J", 0);
};
