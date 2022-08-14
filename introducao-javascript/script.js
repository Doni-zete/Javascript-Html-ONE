
// let titulo = document.querySelector(".titulo");
// console.log(titulo);
// console.log("titulo.textContent");

let pacientes = document.querySelectorAll(".paciente");
console.log(pacientes.length);

for (let i = 0; i < pacientes.length; i++) {
	let paciente = pacientes[i];
	let tdPeso = paciente.querySelector(".info-peso");
	let peso = tdPeso.textContent;

	let tdAltura = paciente.querySelector(".info-altura");
	let altura = tdAltura.textContent;

	let tdImc = paciente.querySelector(".info-imc");

	let pesoEhvalido = true;
	let alturaEhValida = true;


	if (peso < 0 || peso > 1000) {
		console.log("Peso invalido")
		pesoEhvalido = false;
		tdImc.textContent = "Peso inválido";
	}

	if (altura < 0 || altura > 3.00) {
		console.log("altura invalida")
		alturaEhValida = false;
		tdAltura.textContent = "Altura inválida";
	}



	if (alturaEhValida && pesoEhvalido) {
		let imc = peso / (altura * altura);
		tdImc.textContent = imc.toFixed(2);

	}

}





