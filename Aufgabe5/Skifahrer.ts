/*
Aufgabe: A5, Objektorientierte Skipiste
Name: Adriana Gudic
Matrikel: 256217
Datum: 17.11.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace Aufgabe5 {

    export class SkierInfo {
        x: number; //Pos. x-Achse
        y: number; //Pos. y-Achse
        dx: number; //Bewegungsrichtung x-Achse
        dy: number; //Bewegungsrichtung y-Achse
        color: string; //Farbe

        constructor(_x: number, _y: number, _dx: number, _dy: number, _color: string) {
         
            this.x = _x;
            this.y = _y;
            this.dx = _dx;
            this.dy = _dy;
            this.color = _color;
        }

        move(): void {
            this.x += Math.random() + 2;
            this.y += Math.random() + 1.5;
            
            if (this.x > 800) {
                this.x = 0;
                this.y = 100;
                }

            }


            draw(): void {
 
                crc2.beginPath();
                crc2.arc(this.x, this.y - 10, 10, 1, 2 * Math.PI);
                crc2.fillStyle = "#000000";
                crc2.fill();
                crc2.fillStyle = this.color;
                crc2.fillRect(this.x - 4, this.y - 5, 5, 35);
                    
                crc2.beginPath();
                crc2.moveTo(this.x - 20, this.y + 20);
                crc2.lineWidth = 2;
                crc2.lineTo(this.x + 35, this.y + 40);
                crc2.strokeStyle = "black";
                crc2.stroke();
                    
                crc2.beginPath();
                crc2.moveTo(this.x - 20, this.y + 10);
                crc2.lineWidth = 3;
                crc2.lineTo(this.x + 35, this.y + 30);
                crc2.stroke();
                }
            
        
            update():void {
                
                this.move();
                this.draw();
                }
    }    
}