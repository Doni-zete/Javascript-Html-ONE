
// let titulo = document.querySelector(".titulo");
// console.log(titulo);
// console.log("titulo.textContent");

let paciente = document.querySelector("#primeiro-paciente");

let tdPeso = paciente.querySelector(".info-peso");
let peso = tdPeso.textContent;

let tdAltura = paciente.querySelector(".info-altura");
let altura =tdAltura.textContent;

let imc = peso / (altura*altura);

console.log(imc);
console.log(tdAltura);
console.log(tdPeso);
console.log(paciente);
