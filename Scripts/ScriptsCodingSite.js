let numero;
let input;
numero = 9;

//No he encontrado la manera de cambiar el prompt así como cambiamos el alert con un sweetAlert (para que se vea más bonito pues haha)
function preGuntaNumero() {
    input = prompt("Dime uno de los dos números que te dio (no importa el orden) y al darle Enter, te diré el segundo número")

    /* input = swal("Dime uno de los dos números que te dio (no importa el orden) y al darle Enter, te diré el segundo número", {
        content: "input",
    })
    then((value) => {
       swal('${value}');
    }); */

    if (input != 0 && input != 1 && input != 2 && input != 3 && input != 4 && input != 5 && input != 6 && input != 7 && input != 8 && input != 9) {
        swal("¡Espera!", "Necesitamos un número de una cifra para jugar.");
    } else {

        swal({
            title: numero - input,
            text: "¿Es este el otro número?",
            icon: "success",
            button: "¡Genial, no?!"
        });
    }

}