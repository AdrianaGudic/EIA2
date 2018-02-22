/*
Aufgabe: Abschlussaufgabe
Name: Adriana Gudic
Matrikel: 256217
Datum: -
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    window.addEventListener("load", init);
    let buttons;
    let soundPlay1;
    let soundPlay2;
    let soundPlay3;
    let soundPlay4;
    let imgData;
    let morty;
    function init() {
        let canvas = document.getElementsByTagName("canvas")[0];
        Abschlussaufgabe.crc2 = canvas.getContext("2d");
        console.log(canvas);
        console.log("setTimeout");
        //New Sound Object
        morty = new Abschlussaufgabe.Morty();
        soundPlay1 = new Abschlussaufgabe.SoundPlay(document.getElementById("sound1"));
        soundPlay2 = new Abschlussaufgabe.SoundPlay(document.getElementById("sound2"));
        soundPlay3 = new Abschlussaufgabe.SoundPlay(document.getElementById("sound3"));
        soundPlay4 = new Abschlussaufgabe.SoundPlay(document.getElementById("sound4"));
        //Background
        Abschlussaufgabe.crc2.fillStyle = "#5858FA";
        Abschlussaufgabe.crc2.fillRect(0, 0, 800, 600);
        imgData = Abschlussaufgabe.crc2.getImageData(0, 0, 800, 600);
        yourOption();
        animate();
    }
    function yourOption() {
        for (let i = 0; i < 4; i++) {
            createBox(i);
        }
    }
    function animate() {
        Abschlussaufgabe.crc2.clearRect(0, 0, 800, 600);
        for (let i = 0; i < 4; i++) {
            document.getElementById("box" + i).style.top = i * (window.innerWidth / 10) + (window.innerWidth / 15) + "px";
        }
        Abschlussaufgabe.crc2.putImageData(imgData, 0, 0);
        morty.update();
        soundended();
        window.setTimeout(animate, 20);
    }
    function soundended() {
        let soundended1 = document.getElementById("sound1");
        let soundended2 = document.getElementById("sound2");
        let soundended3 = document.getElementById("sound3");
        let soundended4 = document.getElementById("sound4");
        if (soundended1.ended == true) {
            morty.sprechen = false;
        }
        if (soundended2.ended == true) {
            morty.sprechen = false;
        }
        if (soundended3.ended == true) {
            morty.sprechen = false;
        }
        if (soundended4.ended == true) {
            morty.sprechen = false;
        }
    }
    //Buttons erzeugen
    function createBox(_button) {
        let div = document.createElement("div");
        div.innerText = "Sound" + _button;
        div.style.backgroundColor = "#80FF00";
        div.style.padding = "30px";
        div.style.width = "30px";
        div.style.height = (window.innerWidth / 100) + "px";
        div.style.margin = "9.5px";
        div.style.fontSize = "20px";
        div.style.textAlign = "center";
        div.style.fontFamily = "Futura";
        div.style.display = "inline";
        div.style.textAlign = "center";
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
    function soundPlay(_event) {
        let target = _event.target;
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
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=main.js.map