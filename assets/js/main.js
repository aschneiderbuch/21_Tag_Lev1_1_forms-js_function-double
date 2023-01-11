console.log("hallo")

/*  Was
zahl in Number rein
        value speichern
dann auf submit drücken
        function die 
            click auslesen
            value holen    in neue var packen
dann * 2
            ausrechnen lassen
            dann mit innerHTML in input number reinschreiben

dann ergebnis ausgeben

            dann noch function () 
*/

const number = document.getElementById("number");

const output = document.getElementById("output");

const buttonSubmit = document.getElementById("buttonSubmit");


buttonSubmit.addEventListener("click", malZwei);




function malZwei () {
    const ergebnis = (number.value * 2);
    
    console.log(number.value);
    console.log(ergebnis);

    output.innerHTML = ergebnis;
}

