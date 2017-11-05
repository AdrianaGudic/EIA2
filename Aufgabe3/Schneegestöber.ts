/*
Aufgabe: A3, Schneegestöber
Name: Adriana Gudic
Matrikel: 256217
Datum: 03.11.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace Aufgabe3 {
    
    let crc2: CanvasRenderingContext2D;
    console.log(crc2);

window.addEventListener("load", init);

    let snowX: number[] = []; //Schneearray
    let snowY: number[] = []; 
    let cloudX: number[] = []; //Wolkenarray
    let cloudY: number[] = [];
    let skierX: number[] = []; //Skifahrerarray
    let skierY: number[] = []; 

    
    var canImg: any;
    
function init(): void {
    let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
    console.log(canvas);

    crc2 = canvas.getContext("2d");
    
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
    crc2.moveTo(0,100);
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
    crc2.moveTo(0,150);
    crc2.lineTo(800, 800);
    crc2.closePath();
    crc2.strokeStyle = "#000000";
    crc2.stroke();
    
    
//Liftbefestigung
    crc2.beginPath();
    crc2.moveTo(150,270);
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
    crc2.moveTo(120,300);
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
    crc2.moveTo(140,310);
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
            snowX[i] = 0 + Math.random() * 800; //Startkoordinaten x-Achse
            snowY[i] = 0 + Math.random() * 600; //Startkoordinaten y-Achse
    }
    
//Wolken zufällige Verteilung, zwei Wolken
    
     for (let i: number = 0; i < 2; i++) {
            cloudX[i] = 0 + Math.random() * 800;
            cloudY[i] = 0 + Math.random() * 150 + 50;
    }
    
//Skifahrer
    
    for (let i: number = 0; i < 1; i++) {
        skierX[i] = 0;
        skierY[i] = 300;
    
    }
    
    canImg = crc2.getImageData(0, 0, 800, 600); //Bild gespeichert
    animate();
    
}

//Animationsfunktion
    
    function animate(): void {
        console.log("Timeout");
        crc2.clearRect(0, 0, 800, 600); //Hintergrund löschen
        crc2.putImageData(canImg, 0, 0); //Wieder einfügen
        
        
    for (let i: number = 0; i < snowX.length; i++) { //Animation Schnee
      if (snowY[i] > 600) {
          snowY[i] = 0;
            }
            
      snowY[i] += Math.random();
            snow(snowX[i], snowY[i]);
    }
        
    for (let i: number = 0; i < cloudX.length; i++) { //Animation Wolke
       if (cloudX[i] > 800) {
           cloudX[i] = 0;
            }
     
        cloudX[i] += Math.random();
            cloud(cloudX[i], cloudY[i]);
        }
        
     for (let i: number = 0; i < skierX.length; i++) { //Animation Skifahrer
         if (skierX[i] > 800) {
             skierX[i] = 0;
             skierY[i] = 150;
         }
         
       skierX[i] += 3;
       skierY[i] += 1.4;
       skidude(skierX[i], skierY[i]);
         }
         
        window.setTimeout(animate, 15); //alle 15 Millisekunden

}
            
//Funktion Schneeflocken
    
    function snow(_x: number, _y: number) {
        crc2.beginPath();
        crc2.arc(_x, _y, 3, 0, 2 * Math.PI);
        crc2.fillStyle = "#FFFFFF";
        crc2.fill();
    }
    
//Funktion Wolken
    
    function cloud(_x: number, _y: number) {
        crc2.beginPath();
        crc2.arc(_x + 70, _y, 50, 0, 2 * Math.PI);
        crc2.fill();
        crc2.beginPath();
        crc2.arc(_x -10, _y, 60, 0, 2 * Math.PI);
        crc2.fill();
        crc2.beginPath();
        crc2.arc(_x + 30, _y - 40, 40, 0, 2 * Math.PI);
        crc2.fillStyle = "#FFFFFF";
        crc2.fill();
    }
      
//Funktion für Skifahrer
    function skidude(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.arc(_x, _y - 10, 10, 1, 2 * Math.PI);
        crc2.fillStyle = "#000000";
        crc2.fill();
        crc2.fillStyle = "#000000";
        crc2.fillRect(_x - 4, _y - 5, 5, 35);
        
        crc2.beginPath();
        crc2.moveTo(_x - 20, _y + 20);
        crc2.lineWidth = 3;
        crc2.lineTo(_x + 35, _y + 50);
        crc2.stroke();
        
        crc2.beginPath();
        crc2.moveTo(_x - 20, _y + 10);
        crc2.lineWidth = 3;
        crc2.lineTo(_x + 35, _y + 40);
        crc2.stroke();
    }
}