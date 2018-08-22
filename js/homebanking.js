//Declaración de variables
var saldoCuenta = 10000;
var limiteExtraccion = 1000;
var nombreUsuario = "Alberto Artahona";


//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}


//Funciones que tenes que completar
function cambiarLimiteDeExtraccion( limite) {
     var cantidad = parseInt(prompt("Nuevo Limite:"));
    if(cantidad <= 0){
        alert("Esa cantidad no puede ser el nuevo limite");
    }
    else{
        
        var aux = limiteExtraccion;
        limiteExtraccion = cantidad;
        actualizarLimiteEnPantalla();
        alert("Limite anterior: " + aux + "\nNuevo Limite: " + limiteExtraccion);
    }
}

function sumar(cantidad){
    saldoCuenta += cantidad;
}

function restar(cantidad){
    saldoCuenta -= cantidad;
}

function extraerDinero() {
    var cantidad = parseInt(prompt("Cantidad a retirar"));
    if(cantidad <= 0){
        alert("Esa cantidad no se puede extraer");
    }
    else if(cantidad > saldoCuenta) {
        alert("No hay saldo disponible en tu cuenta para extraer esa cantidad de dinero.");
    }
    else if(cantidad > limiteExtraccion) {
        alert("La cantidad de dinero que deseas extraer es mayor a tu limite de extraccion.");
    }
    else if((cantidad % 100)!=0){
        alert("Este homebanking solo maneja billetes de 100");
    }
    else{
        var aux = saldoCuenta;
        restar(cantidad);
        actualizarSaldoEnPantalla();
        alert("Has retirado: " + cantidad + "\nSaldo Anterior: " + aux + "\nSaldo Actual: " + saldoCuenta); 
    }
    
}

function depositarDinero() {
    var cantidad = parseInt(prompt("Cantidad a depositar:"));
    var aux = saldoCuenta;
    sumar(cantidad);
    actualizarSaldoEnPantalla();
    alert("Has depositado: " + cantidad + "\nSaldo Anterior: " + aux + "\nSaldo Actual: " + saldoCuenta);

}

function pagarServicio() {

}

function transferirDinero() {

}

function iniciarSesion() {

}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}
