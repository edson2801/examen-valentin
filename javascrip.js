function inicio(){
    document.getElementById("tablaventas").style.display="none"
    document.getElementById("tablaclientes").style.display="none"
    document.getElementById("tablaproductos").style.display="none"
    document.getElementById("primero").style.display = "block"
}
function venta(){
    document.getElementById("tablaclientes").style.display="none"
    document.getElementById("tablaproductos").style.display="none"
    document.getElementById("tablaprimero").style.display="none"
    document.getElementById("tablaventas").style.display = "block"
}
function cliente(){
    document.getElementById("tablaproductos").style.display="none"
    document.getElementById("primero").style.display="none"
    document.getElementById("tablaventas").style.display="none"
    document.getElementById("tablaclientes").style.display = "block"
}
function producto(){
    document.getElementById("tablaclientes").style.display="none"
    document.getElementById("primero").style.display="none"
    document.getElementById("tablaventas").style.display="none"
    document.getElementById("tablaproductos").style.display = "block"
}