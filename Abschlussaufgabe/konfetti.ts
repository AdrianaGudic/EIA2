/*
Aufgabe: Abschlussaufgabe
Name: Adriana Gudic
Matrikel: 256217
Datum: 23.02.2018
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace Abschlussaufgabe {

    export class konfettiInfo {

        x: number;
        y: number;


        constructor(_x: number, _y: number) {

            this.x = _x;
            this.y = _y;
        }

        move(): void {

            if (this.y > 610) {
                this.y = 0;
            }

            this.y += Math.random() * 5;
            this.draw();
        }

        draw(): void {
            crc2.beginPath();
            crc2.arc(this.x, this.y, 3, 0, 2 * Math.PI);
            crc2.fillStyle = "#8181F7";
            crc2.fill();
        }

        update(): void {
            this.move();
            this.draw();
        }

    }
}