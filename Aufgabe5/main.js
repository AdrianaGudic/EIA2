/*
Aufgabe: A5, Objektorientierte Skipiste
Name: Adriana Gudic
Matrikel: 256217
Datum: 17.11.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe5;
(function (Aufgabe5) {
    window.addEventListener("load", init);
    let snowClass = [];
    let cloudClass = [];
    let skierClass = [];
    let imgData;
    function init() {
        let canvas = document.getElementsByTagName("canvas")[0];
        Aufgabe5.crc2 = canvas.getContext("2d");
        console.log(canvas);
        console.log("setTimeout");
        //Himmel
        Aufgabe5.crc2.fillStyle = "#CEECF5";
        Aufgabe5.crc2.fillRect(0, 0, 800, 600);
        //Berg1
        Aufgabe5.crc2.beginPath();
        Aufgabe5.crc2.moveTo(120, 80);
        Aufgabe5.crc2.lineTo(550, 600);
        Aufgabe5.crc2.lineTo(30, 600);
        Aufgabe5.crc2.closePath();
        Aufgabe5.crc2.stroke();
        Aufgabe5.crc2.fillStyle = "#D8D8D8";
        Aufgabe5.crc2.fill();
        //Berg1
        Aufgabe5.crc2.beginPath();
        Aufgabe5.crc2.moveTo(120, 80);
        Aufgabe5.crc2.lineTo(300, 600);
        Aufgabe5.crc2.lineTo(-100, 400);
        Aufgabe5.crc2.closePath();
        Aufgabe5.crc2.stroke();
        Aufgabe5.crc2.fillStyle = "#BDBDBD";
        Aufgabe5.crc2.fill();
        //Berg2
        Aufgabe5.crc2.beginPath();
        Aufgabe5.crc2.moveTo(330, 80);
        Aufgabe5.crc2.lineTo(700, 600);
        Aufgabe5.crc2.lineTo(400, 600);
        Aufgabe5.crc2.closePath();
        Aufgabe5.crc2.stroke();
        Aufgabe5.crc2.fillStyle = "#D8D8D8";
        Aufgabe5.crc2.fill();
        //Berg2
        Aufgabe5.crc2.beginPath();
        Aufgabe5.crc2.moveTo(330, 80);
        Aufgabe5.crc2.lineTo(400, 600);
        Aufgabe5.crc2.lineTo(0, 400);
        Aufgabe5.crc2.closePath();
        Aufgabe5.crc2.stroke();
        Aufgabe5.crc2.fillStyle = "#BDBDBD";
        Aufgabe5.crc2.fill();
        //Piste
        Aufgabe5.crc2.beginPath();
        Aufgabe5.crc2.moveTo(0, 100);
        Aufgabe5.crc2.lineTo(0, 600);
        Aufgabe5.crc2.lineTo(1100, 600);
        Aufgabe5.crc2.closePath();
        Aufgabe5.crc2.stroke();
        Aufgabe5.crc2.fillStyle = "#FFFFFF";
        Aufgabe5.crc2.fill();
        //Sonne
        Aufgabe5.crc2.beginPath();
        Aufgabe5.crc2.arc(700, 70, 60, 0, 2 * Math.PI);
        Aufgabe5.crc2.fillStyle = "#F7BE81";
        Aufgabe5.crc2.fill();
        //Liftseil
        Aufgabe5.crc2.beginPath();
        Aufgabe5.crc2.moveTo(0, 150);
        Aufgabe5.crc2.lineTo(800, 800);
        Aufgabe5.crc2.closePath();
        Aufgabe5.crc2.strokeStyle = "#000000";
        Aufgabe5.crc2.stroke();
        //Liftbefestigung
        Aufgabe5.crc2.beginPath();
        Aufgabe5.crc2.moveTo(150, 270);
        Aufgabe5.crc2.lineTo(160, 280);
        Aufgabe5.crc2.lineTo(160, 300);
        Aufgabe5.crc2.lineTo(150, 300);
        Aufgabe5.crc2.closePath();
        Aufgabe5.crc2.strokeStyle = "#B40404";
        Aufgabe5.crc2.stroke();
        Aufgabe5.crc2.fillStyle = "#B40404";
        Aufgabe5.crc2.fill();
        //Liftgondel
        Aufgabe5.crc2.beginPath();
        Aufgabe5.crc2.moveTo(120, 300);
        Aufgabe5.crc2.lineTo(190, 300);
        Aufgabe5.crc2.lineTo(190, 350);
        Aufgabe5.crc2.lineTo(120, 350);
        Aufgabe5.crc2.closePath();
        Aufgabe5.crc2.strokeStyle = "#B40404";
        Aufgabe5.crc2.stroke();
        Aufgabe5.crc2.fillStyle = "#B40404";
        Aufgabe5.crc2.fill();
        //Gondelfenster
        Aufgabe5.crc2.beginPath();
        Aufgabe5.crc2.moveTo(140, 310);
        Aufgabe5.crc2.lineTo(180, 310);
        Aufgabe5.crc2.lineTo(180, 340);
        Aufgabe5.crc2.lineTo(140, 340);
        Aufgabe5.crc2.closePath();
        Aufgabe5.crc2.strokeStyle = "#A9E2F3";
        Aufgabe5.crc2.stroke();
        Aufgabe5.crc2.fillStyle = "#A9E2F3";
        Aufgabe5.crc2.fill();
        //Bäume zufällig
        for (let i = 0; i < 7; i++) {
            let x = 250 + Math.random() * 500;
            let y = 400 + Math.random() * 100;
            drawTree(x, y, "#0B6138");
        }
        function drawTree(_x, _y, _color) {
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.moveTo(_x, _y);
            Aufgabe5.crc2.lineTo(_x + 20, _y + 60);
            Aufgabe5.crc2.lineTo(_x - 20, _y + 60);
            Aufgabe5.crc2.closePath();
            Aufgabe5.crc2.stroke();
            Aufgabe5.crc2.fillStyle = _color;
            Aufgabe5.crc2.fill();
        }
        //Schnee zufällige Verteilung
        for (let i = 0; i < 200; i++) {
            let s = new Aufgabe5.SnowInfo(Math.random() * 800, Math.random() * 600);
            snowClass[i] = s;
        }
        //Wolken zufällige Verteilung, zwei Wolken
        for (let i = 0; i < 2; i++) {
            let s = new Aufgabe5.CloudInfo(Math.random() * 800, Math.random() * 150 + 40);
            cloudClass[i] = s;
        }
        //Skifahrer
        for (let i = 0; i < 4; i++) {
            let s = new Aufgabe5.SkierInfo(Math.random() * 150 + 10, Math.random() * 50 + 100, Math.random() * 5, Math.random() * 4, "hsl(" + Math.random() * 360 + ", 90%, 60%)");
            skierClass[i] = s;
        }
        imgData = Aufgabe5.crc2.getImageData(0, 0, 800, 600); //Hintergrund gespeiche
        animate();
    }
    //--------Animationsfunktion---------   
    function animate() {
        console.log("Timeout");
        Aufgabe5.crc2.putImageData(imgData, 0, 0); //Hitergrund wieder einfügen
        for (let i = 0; i < snowClass.length; i++) {
            let s = snowClass[i];
            s.update();
        }
        for (let i = 0; i < cloudClass.length; i++) {
            let s = cloudClass[i];
            s.update();
        }
        for (let i = 0; i < skierClass.length; i++) {
            let s = skierClass[i];
            s.update();
        }
        window.setTimeout(animate, 15); //alle 15 Millisekunden
    }
})(Aufgabe5 || (Aufgabe5 = {}));
//# sourceMappingURL=main.js.map