
var datosbasicos = [];
var arrayconvertido = []; 



var leerinformacion = function(){
    arrayconvertido = JSON.parse(localStorage.getItem('datos'))
    datosbasicos = arrayconvertido
    console.log(arrayconvertido)
    document.getElementById('resultado').innerHTML = ''


   for (let a = 0; a < arrayconvertido.length; a++) {
    document.getElementById('resultado').innerHTML += '<tr><td>' + arrayconvertido [a].nombre +'</td><td>' +
    arrayconvertido [a].apellido +'</td><td>' + arrayconvertido [a].direccion +'</td><td onclick="eliminar('+ a +')">Eliminar</td></tr>' 
    
    }

}

var guardar = function(){
var nombre = document.getElementById("ingresanombre").value 
var apellido = document.getElementById("ingresaapellido").value
var direccion = document.getElementById('ingresadireccion').value  
datosbasicos.push({'nombre':nombre, 'apellido':apellido, 'direccion':direccion})
localStorage.setItem('datos', JSON.stringify(datosbasicos))
leerinformacion()
}

var eliminar = function(indice){
    console.log(indice)
    datosbasicos.splice(indice,1)
    localStorage.setItem('datos', JSON.stringify(datosbasicos))
    leerinformacion()
}


leerinformacion()




