/*
Aufgabe: A5, Objektorientierte Skipiste
Name: Adriana Gudic
Matrikel: 256217
Datum: 17.11.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace Aufgabe5 {

    export let crc2: CanvasRenderingContext2D;
    window.addEventListener("load", init);

    let snowClass: SnowInfo[] = [];
    let cloudClass: CloudInfo[] = [];
    let skierClass: SkierInfo[] = [];


    let imgData: ImageData;


    function init(): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        console.log(canvas);

        console.log("setTimeout");


        //Himmel
        crc2.fillStyle = "#CEECF5";
        crc2.fillRect(0, 0, 800, 600);

        //Berg1
        crc2.beginPath();
        crc2.moveTo(120, 80);
        crc2.lineTo(550, 600);
        crc2.lineTo(30, 600);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#D8D8D8";
        crc2.fill();

        //Berg1
        crc2.beginPath();
        crc2.moveTo(120, 80);
        crc2.lineTo(300, 600);
        crc2.lineTo(-100, 400);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#BDBDBD";
        crc2.fill();

        //Berg2
        crc2.beginPath();
        crc2.moveTo(330, 80);
        crc2.lineTo(700, 600);
        crc2.lineTo(400, 600);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#D8D8D8";
        crc2.fill();

        //Berg2
        crc2.beginPath();
        crc2.moveTo(330, 80);
        crc2.lineTo(400, 600);
        crc2.lineTo(0, 400);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#BDBDBD";
        crc2.fill();

        //Piste
        crc2.beginPath();
        crc2.moveTo(0, 100);
        crc2.lineTo(0, 600);
        crc2.lineTo(1100, 600);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#FFFFFF"
        crc2.fill();

        //Sonne
        crc2.beginPath();
        crc2.arc(700, 70, 60, 0, 2 * Math.PI);
        crc2.fillStyle = "#F7BE81";
        crc2.fill();

        //Liftseil
        crc2.beginPath();
        crc2.moveTo(0, 150);
        crc2.lineTo(800, 800);
        crc2.closePath();
        crc2.strokeStyle = "#000000";
        crc2.stroke();


        //Liftbefestigung
        crc2.beginPath();
        crc2.moveTo(150, 270);
        crc2.lineTo(160, 280);
        crc2.lineTo(160, 300);
        crc2.lineTo(150, 300);
        crc2.closePath();
        crc2.strokeStyle = "#B40404";
        crc2.stroke();
        crc2.fillStyle = "#B40404";
        crc2.fill();

        //Liftgondel
        crc2.beginPath();
        crc2.moveTo(120, 300);
        crc2.lineTo(190, 300);
        crc2.lineTo(190, 350);
        crc2.lineTo(120, 350);
        crc2.closePath();
        crc2.strokeStyle = "#B40404";
        crc2.stroke();
        crc2.fillStyle = "#B40404";
        crc2.fill();

        //Gondelfenster
        crc2.beginPath();
        crc2.moveTo(140, 310);
        crc2.lineTo(180, 310);
        crc2.lineTo(180, 340);
        crc2.lineTo(140, 340);
        crc2.closePath();
        crc2.strokeStyle = "#A9E2F3";
        crc2.stroke();
        crc2.fillStyle = "#A9E2F3";
        crc2.fill();


        //Bäume zufällig
        for (let i: number = 0; i < 7; i++) {
            let x: number = 250 + Math.random() * 500;
            let y: number = 400 + Math.random() * 100;
            drawTree(x, y, "#0B6138");
        }

        function drawTree(_x: number, _y: number, _color: string): void {
            crc2.beginPath();
            crc2.moveTo(_x, _y);
            crc2.lineTo(_x + 20, _y + 60);
            crc2.lineTo(_x - 20, _y + 60);
            crc2.closePath();
            crc2.stroke();
            crc2.fillStyle = _color;
            crc2.fill();
        }


        //Schnee zufällige Verteilung
        for (let i: number = 0; i < 200; i++) {
            let s: SnowInfo = new SnowInfo(Math.random() * 800, Math.random() * 600);
            snowClass[i] = s;
        }

        //Wolken zufällige Verteilung, zwei Wolken
        for (let i: number = 0; i < 2; i++) {
            let s: CloudInfo = new CloudInfo(Math.random() * 800, Math.random() * 150 + 40);
            cloudClass[i] = s;
        }

        //Skifahrer
        for (let i: number = 0; i < 4; i++) {
            let s: SkierInfo = new SkierInfo(Math.random() * 150 + 10,
                                             Math.random() * 50 + 100,
                                             Math.random() * 5,
                                             Math.random() * 4,
                                            "hsl(" + Math.random() * 360 + ", 90%, 60%)");                       
            skierClass[i] = s;

        }
        
        imgData = crc2.getImageData(0, 0, 800, 600); //Hintergrund gespeiche

        animate();
    }

    //--------Animationsfunktion---------   
    function animate(): void {
        console.log("Timeout");
        crc2.putImageData(imgData, 0, 0); //Hitergrund wieder einfügen


        for (let i: number = 0; i < snowClass.length; i++) { //Animation Schnee
            let s: SnowInfo = snowClass[i];

            s.update();
        }

        for (let i: number = 0; i < cloudClass.length; i++) { //Animation Wolke
            let s: CloudInfo = cloudClass[i];

            s.update();
        }

        for (let i: number = 0; i < skierClass.length; i++) {
             let s: SkierInfo = skierClass[i];
            
            s.update();
                    }

    window.setTimeout(animate, 15); //alle 15 Millisekunden
    }
}