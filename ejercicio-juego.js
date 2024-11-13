index.js

var jugador1 = prompt ('Inserte: Piedra/Papel/Tijera'); 
var jugador2 = prompt ('Inserte: Piedra/Papel/Tijera');

if ((jugador1 === "Piedra" && jugador2 === "Tijera") 
    || (jugador1 === "Papel" && jugador2 === "Piedra") 
    || (jugador1 === "Tijera" && jugador2 === "Papel"))
    {
        alert ("Gana jugador 1");
    }

if ((jugador2 === "Piedra" && jugador1 === "Tijera") 
    || (jugador2 === "Papel" && jugador1 === "Piedra") 
    || (jugador2 === "Tijera" && jugador1 === "Papel"))
    {
        alert ("Gana jugador 2");
    }

if ((( jugador1 === "Piedra") === (jugador2 === "Piedra")) 
    ||((jugador1 === "Papel") === (jugador2 === "Papel")) 
|| ((jugador1 === "Tijera") === (jugador2 === "Tijera")))
    {
        alert ("Hay empate");
    }

else {
    alert ("Refresque la página");
}