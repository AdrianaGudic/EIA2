/*
Aufgabe: Abschlussaufgabe
Name: Adriana Gudic
Matrikel: 256217
Datum: 23.02.2018
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace Abschlussaufgabe {

    export let crc2: CanvasRenderingContext2D;
    window.addEventListener("load", init);
    let konfettiClass: konfettiInfo[] = [];
    let buttons: string;
    let soundPlay1: SoundPlay;
    let soundPlay2: SoundPlay;
    let soundPlay3: SoundPlay;
    let soundPlay4: SoundPlay;
    let imgData: ImageData;
    let logo: any = new Image();
    let morty: Morty;


    function init(): void {
        alert("Click the buttons and use Morty as your personal speaker!");
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        console.log(canvas);
        
        logo.src = "rm-logo.png";

        console.log("setTimeout");

        //Konfetti
        for (let i: number = 0; i < 200; i++) {
            let s: konfettiInfo = new konfettiInfo(Math.random() * 800, Math.random() * 600);
            konfettiClass[i] = s;
        }

        //New Sound Object
        morty = new Morty();
        soundPlay1 = new SoundPlay(document.getElementById("sound1"));
        soundPlay2 = new SoundPlay(document.getElementById("sound2"));
        soundPlay3 = new SoundPlay(document.getElementById("sound3"));
        soundPlay4 = new SoundPlay(document.getElementById("sound4"));
        //Background
        crc2.fillStyle = "#5858FA";
        crc2.fillRect(0, 0, 800, 600);

        imgData = crc2.getImageData(0, 0, 800, 600);


        yourOption();
        animate();

    }

    function yourOption(): void {
        for (let i: number = 0; i < 4; i++) {
            createBox(i);
        }
    }
    function animate() {
        crc2.clearRect(0, 0, 800, 600);
        for (let i: number = 0; i < 4; i++) {
            document.getElementById("box" + i).style.top = i * (window.innerWidth / 10) + (window.innerWidth / 15) + "px";
        }
        
        crc2.putImageData(imgData, 0, 0);
        crc2.drawImage(logo, 20, 0);
        for (let i: number = 0; i < konfettiClass.length; i++) { //Animation Schnee
            let s: konfettiInfo = konfettiClass[i];

            s.update();
        }

        morty.update();
        soundended();
        window.setTimeout(animate, 20);
    }

    function soundended(): void {
        let soundended1: HTMLAudioElement = <HTMLAudioElement>document.getElementById("sound1");
        let soundended2: HTMLAudioElement = <HTMLAudioElement>document.getElementById("sound2");
        let soundended3: HTMLAudioElement = <HTMLAudioElement>document.getElementById("sound3");
        let soundended4: HTMLAudioElement = <HTMLAudioElement>document.getElementById("sound4");
        if (soundended1.ended == true) {
            morty.sprechen = false;
            soundended1.load();
        }
        if (soundended2.ended == true) {
            morty.sprechen = false;
            soundended2.load();
        }
        if (soundended3.ended == true) {
            morty.sprechen = false;
            soundended3.load();
        }
        if (soundended4.ended == true) {
            morty.sprechen = false;
            soundended4.load();
        }
    }

    //Buttons erzeugen
    function createBox(_button: number): void {

        let div: HTMLDivElement = document.createElement("div");

        div.innerText = "Sound" + _button;
        div.style.display = "block";
        div.style.backgroundColor = "#80FF00";
        div.style.padding = "30px";
        div.style.width = "30px";
        div.style.height = (window.innerWidth / 100) + "px";

        div.style.fontSize = "20px";
        div.style.fontFamily = "Futura";

        div.style.position = "absolute";
        div.style.left = "65%";
        div.style.border = "2px solid black";
        div.style.boxShadow = "3px 3px 3px 1px rgba(0, 0, 0, 0.2)";
        div.style.cursor = "pointer";
        div.style.top = _button * (window.innerWidth / 10) + 80 + "px";
        div.id = "box" + _button;
        div.addEventListener("click", soundPlay);
        div.className = "box";

        document.body.appendChild(div);


    }

    function soundPlay(_event: Event): void {
        let target: HTMLDivElement = <HTMLDivElement>_event.target;
        morty.sprechen = true;
        if (target.id == "box0") {
            soundPlay1.playSound();
        }

        if (target.id == "box1") {
            soundPlay2.playSound();
        }

        if (target.id == "box2") {
            soundPlay3.playSound();
        }

        if (target.id == "box3") {
            soundPlay4.playSound();
        }
    }


}