// Primero, obtén todos los botones y el elemento del contador.
var botones = document.querySelectorAll(".contador");
var valorContador = document.getElementById("valorContador");

// Inicializa el contador a 0.
var contador = 0;

// Para cada botón, añade un event listener que incrementa, decrementa, o resetea el contador.
botones.forEach(function(boton) {
    boton.addEventListener("click", function(e) {
        var accion = e.currentTarget.id;

        if (accion == "incrementar") {
            contador++;
        } else if (accion == "decrementar") {
            contador--;
        } else if (accion == "resetear") {
            contador = 0;
        }

        valorContador.textContent = contador;
    });
});

//Este código JS primero obtiene todos los botones y el elemento que muestra el valor del contador. Luego, inicializa el contador a 0.

//Para cada botón, añade un event listener que se activa cuando se hace clic en el botón. El event listener obtiene la acción que se va a realizar a partir del ID del botón, y luego incrementa, decrementa, o resetea el contador en consecuencia.

//Finalmente, actualiza el valor mostrado en la página al nuevo valor del contador.