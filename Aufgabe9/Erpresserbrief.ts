/*
Aufgabe: A9, Erpresserbrief
Name: Adriana Gudic
Matrikel: 256217
Datum: 15.12.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace Aufgabe9 {

    window.addEventListener("load", init);
    //  document.addEventListener("keydown", handleKeydown);  
    let thisLetter: string;
    let alphabet: string [] = []

    function init(): void {

       
        for (let i = 65; i <= 90; i++) {
            alphabet.push(String.fromCharCode(i));
             
        }
        
        for (let i: number = 0; i < alphabet.length; i++) {
            drawBox(alphabet[i]);
            
        }

            drawLetters();
    }

//Letters drawn with div
    function drawBox(_alphabet: string): void {

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

        div.addEventListener("click", handleClick);
        document.body.appendChild(div);

    }

//Letter itself
    function drawLetters(): void {
        
        let letter: HTMLDivElement = document.createElement("div");
        
        letter.style.backgroundColor = "lightgrey";
        letter.style.width = "800px";
        letter.style.height = "1000px";
        letter.style.margin = "20px";
        
        
        letter.addEventListener("click", setLetters);
        document.body.appendChild(letter);
    }
    
    
//Change Color
    function handleClick(_event: MouseEvent): void {

            let click: HTMLDivElement = <HTMLDivElement>_event.target;
            click.style.color = "black";

            thisLetter = click.id;

            let divs: NodeListOf<HTMLDivElement> = <NodeListOf<HTMLDivElement>>document.getElementsByClassName("letters");

            for (let i: number = 0; i < divs.length; i++) {
                if (thisLetter != divs[i].id) {
                    divs[i].style.color = "black";
                }
            }
        }
    
     //Buchstaben in Brief einfügen
    function setLetters(_event: MouseEvent): void {

        let box: HTMLDivElement = document.createElement("div");
        
        box.innerText = thisLetter;
        box.style.color ="white";
        box.style.width = "30px";
        box.style.height = "30px";
        box.style.margin = "1px";
        box.style.fontSize = "20px";
        box.style.textAlign = "center";
        box.style.position="absolute";
        box.style.left = _event.pageX + "px";
        box.style.top= _event.pageY + "px";
        
        box.addEventListener("click", setLetters);
        document.body.appendChild(box);
        
          let clicking: HTMLDivElement = <HTMLDivElement>_event.target;
    }

}