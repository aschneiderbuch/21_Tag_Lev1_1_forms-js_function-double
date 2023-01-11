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
        // eingabe von InputNumber in Variable number rein
        // da Input type number kommen Zahlen nicht als String NaN an

const output = document.getElementById("output");
        // varible output damit ins Feld output geschrieben werden kann

const buttonSubmit = document.getElementById("buttonSubmit");
        // varible button submit damit wir EventListener füttern können


buttonSubmit.addEventListener("click", malZwei);
        // moderner als onclick    / braucht Ereignis bzw. Event hier click, 
                                 // damit er dann function ausführt


// * oder mal test() rein, dann geht es mit onclick in submit
function malZwei () {
    const ergebnis = (number.value * 2);
            // hier Wert von Variable number auslesen mit .value
    console.log(number.value);
    console.log(ergebnis);

    output.innerHTML = ergebnis;
            // hier neuer Wert von ergebnis in die 
            // Variable output geschrieben  
}

