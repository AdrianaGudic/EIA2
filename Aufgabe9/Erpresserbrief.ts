/*
Aufgabe: A9, Erpresserbrief
Name: Adriana Gudic
Matrikel: 256217
Datum: 15.12.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace Aufgabe9 {

    window.addEventListener("load", init);
    document.addEventListener("keydown", handleKeyDown);
    let thisLetter: string;
    let alphabet: string;

    function init(): void {


        for (let i = 65; i <= 90; i++) {
            createLetterSelectionBox(String.fromCharCode(i));
        }

        createLetter();
    }



    //Letters drawn with div
    function createLetterSelectionBox(_alphabet: string): void {

        let div: HTMLDivElement = document.createElement("div");

        div.innerText = _alphabet;
        div.style.backgroundColor = "cccccc";
        div.style.width = "30px";
        div.style.height = "30px";
        div.style.margin = "9.5px";
        div.style.fontSize = "20px";
        div.style.display = "inline";
        div.style.textAlign = "center";
        div.id = _alphabet;
        div.className = "letter";

        div.addEventListener("click", handleMousedown);
        document.body.appendChild(div);

    }

    //Letter itself
    function createLetter(): void {

        let letter: HTMLDivElement = document.createElement("div");

        letter.style.backgroundColor = "lightgrey";
        letter.style.width = "800px";
        letter.style.height = "1000px";
        letter.style.margin = "20px";


        letter.addEventListener("click", setLetters);
        document.body.appendChild(letter);
    }


    //MouseEvent
    function handleMousedown(_event: MouseEvent): void {

        let click: HTMLDivElement = <HTMLDivElement>_event.target;
        click.style.color = "black";

        thisLetter = click.id;

        let divs: NodeListOf<HTMLDivElement> = <NodeListOf<HTMLDivElement>>document.getElementsByClassName("letter");

        for (let i: number = 0; i < divs.length; i++) {
            if (thisLetter != divs[i].id) {
                divs[i].style.color = "black";
            }
        }
    }

    //KeyEvent
    function handleKeyDown(_event: KeyboardEvent): void {

        if (_event.keyCode > 64 && _event.keyCode < 91 || _event.keyCode == 16 || _event.keyCode == 20) {
            thisLetter = String.fromCharCode(_event.keyCode);
        } else {
            alert("Ein guter Erpresser verwendet nur Buchstaben!");
        }
    }

    //Buchstaben
    function setLetters(_event: MouseEvent): void {

        let box: HTMLDivElement = document.createElement("div");

        box.innerText = thisLetter;
        box.style.color = "white";
        box.style.fontSize = "40px";
        box.style.border = "2px solid white";
        box.style.padding = "2px";
        box.style.textAlign = "center";
        box.style.position = "absolute";
        box.style.left = _event.pageX + "px";
        box.style.top = _event.pageY + "px";

        box.addEventListener("click", setLetters);
        document.body.appendChild(box);

        let clicking: HTMLDivElement = <HTMLDivElement>_event.target;
    }


    function removeLetterbyAlt(_event: MouseEvent): void {
        if (_event.altKey == false)
            return;

        else {
            let remove: HTMLDivElement = <HTMLDivElement>_event.target;
            document.body.removeChild(remove);
        }
    }
}