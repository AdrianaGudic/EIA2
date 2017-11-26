/*
Aufgabe: A6, Polymorphe Skipiste
Name: Adriana Gudic
Matrikel: 256217
Datum: 26.11.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace Aufgabe6 {

    export class CloudInfo extends MovingObjects {
        x: number;
        y: number;
        color: string;


        constructor(_x: number, _y: number) {
            super(_x, _y);
        }

        move(): void {

            if (this.x > 800) {
                this.x = 0;
            }

            this.x += Math.random() * 4;
        }

        draw(): void {
            crc2.beginPath();
            crc2.arc(this.x + 70, this.y, 50, 0, 2 * Math.PI);
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.x - 10, this.y, 60, 0, 2 * Math.PI);
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.x + 30, this.y - 40, 40, 0, 2 * Math.PI);
            crc2.fillStyle = "#FFFFFF";
            crc2.fill();
        }
        
        update(): void  {
            this.move();
            this.draw();
            }
    }
}