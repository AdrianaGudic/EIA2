/*
Aufgabe: A8, RandomBoxes
Name: Adriana Gudic
Matrikel: 256217
Datum: 08.12.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/


namespace Aufgabe8 {
    window.addEventListener("load", init);


    function init(): void {

        var Number: string = prompt("Zahl zwischen 10 und 100 angeben");
        var AddNumber: number = parseInt(Number); //Umwandlung von String in Zahl

        if (AddNumber >= 10 && AddNumber <= 100) { //Ist Zahl zwischen 10 und 100?
            for (var i: number = 0; i < AddNumber; i++) {
                drawRect(Math.random() * 800, Math.random() * 600, "hsl(" + Math.random() * 360 + ", 100%, 50%)", 40, 40);
            }

        } else {
            window.alert("Die Eingabe ist falsch");
            init();

        }

    }

//Funktion für Kästchen
    
    function drawRect (_x: number, _y: number, _color: string, _width: number, _height: number): void {
        
        let div: HTMLDivElement = document.createElement("div");
       
        div.style.width = _width + "px";
        
        div.style.height = _height + "px";
        div.style.marginLeft = _x + "px";
        div.style.marginTop = _y + "px";
        div.style.backgroundColor = _color;
        document.body.appendChild(div);
       
        }

}
