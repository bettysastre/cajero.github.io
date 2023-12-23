var cuentas = [
  { nombre: "Persona 1", saldo: 200 },
  { nombre: "Persona 2", saldo: 290 },
  { nombre: "Persona 3", saldo: 67 }
];

var cuentaSeleccionada = 0;
var limiteSuperior = 990;
var passwordCorrecto = "1234"; //para todos los usuarios


function seleccionarCuenta() {
  cuentaSeleccionada = document.getElementById("cuentas").value;
  document.getElementById("interaccion").style.display = "block";
}

function verificarPassword() {
  var passwordIngresado = document.getElementById("password").value;
  if (passwordIngresado === passwordCorrecto) {
    document.getElementById("opciones").style.display = "block";
  } else {
    mostrarResultado("Contraseña incorrecta. Inténtelo nuevamente.");
  }
}

function consultarSaldo() {
  var saldoActual = cuentas[cuentaSeleccionada].saldo;
  mostrarResultado("Saldo actual: $" + saldoActual);
}

function ingresarMonto() {
  var montoIngresado = parseFloat(prompt("Ingrese el monto a depositar:"));
  if (!isNaN(montoIngresado) && montoIngresado > 0) {
    if (cuentas[cuentaSeleccionada].saldo + montoIngresado > limiteSuperior) {
      mostrarResultado("El monto ingresado excede el límite de $" + limiteSuperior + ". No se puede realizar la operación.");
    } else {
      cuentas[cuentaSeleccionada].saldo += montoIngresado;
      mostrarResultado("Monto ingresado: $" + montoIngresado + "<br>Saldo actual: $" + cuentas[cuentaSeleccionada].saldo);
    }
  } else {
    mostrarResultado("Ingrese un monto válido.");
  }
}

function retirarMonto() {
  var montoRetirar = parseFloat(prompt("Ingrese el monto a retirar:"));
  if (!isNaN(montoRetirar) && montoRetirar > 0 && cuentas[cuentaSeleccionada].saldo - montoRetirar >= 10 && cuentas[cuentaSeleccionada].saldo - montoRetirar <= 990) {
    cuentas[cuentaSeleccionada].saldo -= montoRetirar;
    mostrarResultado("Monto retirado: $" + montoRetirar + "<br>Saldo actual: $" + cuentas[cuentaSeleccionada].saldo);
  } else {
    mostrarResultado("Monto inválido, no se puede tener menos de $10.");
  }
}

function mostrarResultado(mensaje) {
  document.getElementById("resultado").innerHTML = mensaje;
  document.getElementById("resultado").style.display = "block";
}
