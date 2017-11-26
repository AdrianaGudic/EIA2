/*
Aufgabe: A6, Polymorphe Skipiste
Name: Adriana Gudic
Matrikel: 256217
Datum: 26.11.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe6;
(function (Aufgabe6) {
    window.addEventListener("load", init);
    let superClass = [];
    let imgData;
    function init() {
        let canvas = document.getElementsByTagName("canvas")[0];
        Aufgabe6.crc2 = canvas.getContext("2d");
        console.log(canvas);
        console.log("setTimeout");
        //Himmel
        Aufgabe6.crc2.fillStyle = "#CEECF5";
        Aufgabe6.crc2.fillRect(0, 0, 800, 600);
        //Berg1
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.moveTo(120, 80);
        Aufgabe6.crc2.lineTo(550, 600);
        Aufgabe6.crc2.lineTo(30, 600);
        Aufgabe6.crc2.closePath();
        Aufgabe6.crc2.stroke();
        Aufgabe6.crc2.fillStyle = "#D8D8D8";
        Aufgabe6.crc2.fill();
        //Berg1
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.moveTo(120, 80);
        Aufgabe6.crc2.lineTo(300, 600);
        Aufgabe6.crc2.lineTo(-100, 400);
        Aufgabe6.crc2.closePath();
        Aufgabe6.crc2.stroke();
        Aufgabe6.crc2.fillStyle = "#BDBDBD";
        Aufgabe6.crc2.fill();
        //Berg2
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.moveTo(330, 80);
        Aufgabe6.crc2.lineTo(700, 600);
        Aufgabe6.crc2.lineTo(400, 600);
        Aufgabe6.crc2.closePath();
        Aufgabe6.crc2.stroke();
        Aufgabe6.crc2.fillStyle = "#D8D8D8";
        Aufgabe6.crc2.fill();
        //Berg2
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.moveTo(330, 80);
        Aufgabe6.crc2.lineTo(400, 600);
        Aufgabe6.crc2.lineTo(0, 400);
        Aufgabe6.crc2.closePath();
        Aufgabe6.crc2.stroke();
        Aufgabe6.crc2.fillStyle = "#BDBDBD";
        Aufgabe6.crc2.fill();
        //Piste
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.moveTo(0, 100);
        Aufgabe6.crc2.lineTo(0, 600);
        Aufgabe6.crc2.lineTo(1100, 600);
        Aufgabe6.crc2.closePath();
        Aufgabe6.crc2.stroke();
        Aufgabe6.crc2.fillStyle = "#FFFFFF";
        Aufgabe6.crc2.fill();
        //Sonne
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.arc(700, 70, 60, 0, 2 * Math.PI);
        Aufgabe6.crc2.fillStyle = "#F7BE81";
        Aufgabe6.crc2.fill();
        //Liftseil
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.moveTo(0, 150);
        Aufgabe6.crc2.lineTo(800, 800);
        Aufgabe6.crc2.closePath();
        Aufgabe6.crc2.strokeStyle = "#000000";
        Aufgabe6.crc2.stroke();
        //Liftbefestigung
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.moveTo(150, 270);
        Aufgabe6.crc2.lineTo(160, 280);
        Aufgabe6.crc2.lineTo(160, 300);
        Aufgabe6.crc2.lineTo(150, 300);
        Aufgabe6.crc2.closePath();
        Aufgabe6.crc2.strokeStyle = "#B40404";
        Aufgabe6.crc2.stroke();
        Aufgabe6.crc2.fillStyle = "#B40404";
        Aufgabe6.crc2.fill();
        //Liftgondel
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.moveTo(120, 300);
        Aufgabe6.crc2.lineTo(190, 300);
        Aufgabe6.crc2.lineTo(190, 350);
        Aufgabe6.crc2.lineTo(120, 350);
        Aufgabe6.crc2.closePath();
        Aufgabe6.crc2.strokeStyle = "#B40404";
        Aufgabe6.crc2.stroke();
        Aufgabe6.crc2.fillStyle = "#B40404";
        Aufgabe6.crc2.fill();
        //Gondelfenster
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.moveTo(140, 310);
        Aufgabe6.crc2.lineTo(180, 310);
        Aufgabe6.crc2.lineTo(180, 340);
        Aufgabe6.crc2.lineTo(140, 340);
        Aufgabe6.crc2.closePath();
        Aufgabe6.crc2.strokeStyle = "#A9E2F3";
        Aufgabe6.crc2.stroke();
        Aufgabe6.crc2.fillStyle = "#A9E2F3";
        Aufgabe6.crc2.fill();
        //Bäume zufällig
        for (let i = 0; i < 7; i++) {
            let x = 250 + Math.random() * 500;
            let y = 400 + Math.random() * 100;
            drawTree(x, y, "#0B6138");
        }
        function drawTree(_x, _y, _color) {
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.moveTo(_x, _y);
            Aufgabe6.crc2.lineTo(_x + 20, _y + 60);
            Aufgabe6.crc2.lineTo(_x - 20, _y + 60);
            Aufgabe6.crc2.closePath();
            Aufgabe6.crc2.stroke();
            Aufgabe6.crc2.fillStyle = _color;
            Aufgabe6.crc2.fill();
        }
        //Schnee zufällige Verteilung
        for (let i = 0; i < 200; i++) {
            let s = new Aufgabe6.SnowInfo(Math.random() * 800, Math.random() * 600);
            superClass.push(s);
        }
        //Wolken zufällige Verteilung, zwei Wolken
        for (let i = 0; i < 2; i++) {
            let s = new Aufgabe6.CloudInfo(Math.random() * 800, Math.random() * 150 + 40);
            superClass.push(s);
        }
        //Skifahrer
        for (let i = 0; i < 4; i++) {
            let s = new Aufgabe6.SkierInfo(Math.random() * 150 + 10, Math.random() * 50 + 100, Math.random() * 5, Math.random() * 4, "hsl(" + Math.random() * 360 + ", 90%, 60%)");
            superClass.push(s);
        }
        imgData = Aufgabe6.crc2.getImageData(0, 0, 800, 600); //Hintergrund gespeiche
        animate();
    }
    //--------Animationsfunktion---------   
    function animate() {
        console.log("Timeout");
        Aufgabe6.crc2.putImageData(imgData, 0, 0); //Hitergrund wieder einfügen
        for (let i = 0; i < superClass.length; i++) {
            let s = superClass[i];
            s.update();
        }
        window.setTimeout(animate, 15); //alle 15 Millisekunden
    }
})(Aufgabe6 || (Aufgabe6 = {}));
//# sourceMappingURL=main.js.map