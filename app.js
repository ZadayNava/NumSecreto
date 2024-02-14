/*Cuando trabajamos para la web, el navegador ya entrega a JavaScript una representación del elemento que está mostrando en pantalla que se llama el Document Object Model. Cada uno de estos elementos que está en HTML. El Document Object Model lo representa para JavaScript. Entonces podemos acceder a ello. Conectando el HTML con JavaScript a través del Document Object Model (DOM).*/

//Este es un concepto llamado selectores, donde a travez del DOM en js selecciona el elemento convirtiendose en un objeto en javascript
    //Codigo largo
    /*let titulo = document.querySelector('h1');
    titulo.innerHTML ='Juego del numero secreto';

    let parrafo = document.querySelector('p');
    parrafo.innerHTML = 'Escribe un numero del 1 al 10';*/

//Declaracion de variables:
let numeroSecreto = 0;//se le llama alcance de la variable
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

//Declaracion de funcion:
function intentoUsuario(){
    let numeroDelUsuario = parseInt(document.getElementById('valorUsuario').value);
    //console.log(numeroDelUsuario);
    //console.log (typeof(numeroDelUsuario)); // muestra el tipo de dato que retorna
    //console.log(numeroSecreto === numeroDelUsuario);//devuelve true o false de acuerdo a la condicion, si son iguales al numero secreto entre el numero del usuario, el triple igual valida si es del mismo tipo de dato, aparte del valor
    if(numeroSecreto === numeroDelUsuario){
        asignarElementoHTML('p', `Acertaste en ${intentos} ${(intentos === 1) ? 'vez': 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');//el removeattribute quita ciertos atributos que especifiques dentro de las comillas
    }else{
        if(numeroDelUsuario > numeroSecreto){
            asignarElementoHTML('p','El numero secreto es menor');
        }else{
            asignarElementoHTML('p','El numero secreto es mayor');
        }
        clean();
        intentos++;
    }
    return;
}

function generrNumSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarElementoHTML('p','Todos los numeros sorteados posibles fueron usados');
        return;
    }else{
        //si el numero generado esta en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generrNumSecreto();
        }else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function clean(){
    document.querySelector('#valorUsuario').value = '';
}

function condicionesIniciales(){
    intentos = 1;
    asignarElementoHTML('h1','¡Juego del numero secreto!');
    asignarElementoHTML('p',`Escribe un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generrNumSecreto();
    document.getElementById('reiniciar').setAttribute('disabled',true);//son dos valores, coloca esto con tal valor
}

function reinicio(){
    /*Limpiar caja
      borrar numero de intentos
      otro numero secreto
      indicar mensaje de intervalos del inicio
      deshabilitar el boton del nuevo juego
    */
   clean();
   condicionesIniciales();
}

//codigo reducido
function asignarElementoHTML(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

 condicionesIniciales();