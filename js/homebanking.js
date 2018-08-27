//Declaración de variables
var saldoCuenta = 10000;
var limiteExtraccion = 1000;
var nombreUsuario = "Alberto Artahona";
var precioAgua = 350;
var precioTelefono = 425;
var precioLuz = 210;
var precioInternet = 570;
var cuentaAmiga1 = 1234567;
var cuentaAmiga2 = 7654321;
var codigoVerificacion = 1234;

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
   
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla(); 
    iniciarSesion();
}

//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
    var cantidad = parseInt(prompt("Nuevo Limite:"));
    if(cantidad <= 0 || isNaN(cantidad)){
        alert("Esa cantidad no puede ser el nuevo limite");
    }
    else{
        
        var aux = limiteExtraccion;
        limiteExtraccion = cantidad;
        actualizarLimiteEnPantalla();
        alert("Limite anterior: " + aux + "\nNuevo Limite: " + limiteExtraccion);
    }
}

function cambiarCodigoVerificacion() {
    var codigoaux = parseInt(prompt("Por seguridad introduzca el codigo de verificacion actual"));
    if(codigoaux != codigoVerificacion){
        alert("Codigo Incorrecto");
    }
    else{
        codigoaux = parseInt(prompt("Introduzca el nuevo codigo deseado"));
        if(codigoaux <= 0 || isNaN(codigoaux)){
            alert("Ese numero no puede ser autorizado");
        }
        else {
            codigoVerificacion = codigoaux;
            alert("Nuevo codigo: " + codigoVerificacion);
        }
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
    if(cantidad <= 0 || isNaN(cantidad)){
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
    if(cantidad <= 0 || isNaN(cantidad)){
        alert("Esa cantidad no se puede depositar");
    }
    else{
        var aux = saldoCuenta;
        sumar(cantidad);
        actualizarSaldoEnPantalla();
        alert("Has depositado: " + cantidad + "\nSaldo Anterior: " + aux + "\nSaldo Actual: " + saldoCuenta);
    }
}

function pagarServicio() {
    var opcion = parseInt(prompt("Ingrese el número que corresponda con el servicio que quiere pagar \n1 - Agua \n2 - Luz \n3 - Internet \n4 - Teléfono"));
        switch(opcion) {
            case 1:
                if (confirm("El precio del servicio AGUA es de:\n" + precioAgua + "\n\nDesea continuar?")) {
                    if(precioAgua<=saldoCuenta){
                        var aux = saldoCuenta;
                        restar(precioAgua);
                        actualizarSaldoEnPantalla();
                        alert("Has pagado: " + precioAgua + "\nSaldo Anterior: " + aux + "\nSaldo Actual: " + saldoCuenta); 
                    }
                    else{
                        alert("No hay suficiente saldo para pagar este servicio"); 
                    }
                } 
                break;
            case 2:
                if (confirm("El precio del servicio LUZ es de:\n" + precioLuz + "\n\nDesea continuar?")) {
                    if(precioLuz<=saldoCuenta){
                        var aux = saldoCuenta;
                        restar(precioLuz);
                        actualizarSaldoEnPantalla();
                        alert("Has pagado: " + precioLuz + "\nSaldo Anterior: " + aux + "\nSaldo Actual: " + saldoCuenta); 
                    }
                    else{
                        alert("No hay suficiente saldo para pagar este servicio"); 
                    }
                } 
                break;
            case 3:
                if (confirm("El precio del servicio INTERNET es de:\n" + precioInternet + "\n\nDesea continuar?")) {
                    if(precioInternet<=saldoCuenta){
                        var aux = saldoCuenta;
                        restar(precioInternet);
                        actualizarSaldoEnPantalla();
                        alert("Has pagado: " + precioInternet + "\nSaldo Anterior: " + aux + "\nSaldo Actual: " + saldoCuenta); 
                    }
                    else{
                        alert("No hay suficiente saldo para pagar este servicio"); 
                    }
                }
                break; 
            case 4:                
            if (confirm("El precio del servicio TELEFONO es de:\n" + precioTelefono + "\n\nDesea continuar?")) {
                    if(precioTelefono<=saldoCuenta){
                        var aux = saldoCuenta;
                        restar(precioTelefono);
                        actualizarSaldoEnPantalla();
                        alert("Has pagado: " + precioTelefono + "\nSaldo Anterior: " + aux + "\nSaldo Actual: " + saldoCuenta); 
                    }
                    else{
                        alert("No hay suficiente saldo para pagar este servicio"); 
                    }
                } 
                break;
            default:
                alert("Opción no válida");
                break;
        }
}

function transferirDinero() {
    var cantidad = parseInt(prompt("Monto a transferir:"));
    if(cantidad <= 0 || isNaN(cantidad)){
        alert("Esa cantidad es valida");
    }
    else if(cantidad > saldoCuenta) {
        alert("No hay suficiente saldo en la cuenta para transferir ese monto");
    }

    else{
        var numeroCuenta = parseInt(prompt("Ingrese el numero de cuenta a donde desea transferir"));
        if(!verificarCuenta(numeroCuenta)){
            alert("Esa cuenta no se encuentra en la agenda");
        }
        else{
            var aux = saldoCuenta;
            restar(cantidad);
            actualizarSaldoEnPantalla();
            alert("Transferencia a la cuenta: " + numeroCuenta + "\nMonto: " + cantidad + "\nSaldo Anterior: " + aux + "\nSaldo Actual: " + saldoCuenta); 
        }     
    }
}

function iniciarSesion() {
    nombreUsuario = prompt("Ingrese su nombre:");
    cargarNombreEnPantalla();
    var aux = prompt("Ingrese el codigo de verificacion");
    if(aux != codigoVerificacion){
        alert("Codigo Incorrecto. Tu dinero ha sido retenido por cuestiones de seguridad.");
        saldoCuenta = 0;
        limiteExtraccion = 0;
        actualizarSaldoEnPantalla();
        actualizarLimiteEnPantalla()
    }
    else{
        alert("Bienvenido/a " + nombreUsuario + " ya puede comenzar a realizar operaciones");
    }
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

function verificarCuenta(cuenta) {
    switch(cuenta){
        case cuentaAmiga1:
            return true;
            
        case cuentaAmiga2:
            return true;
            
        default:
            return false;
    }
}
