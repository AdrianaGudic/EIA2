/*
Aufgabe: Abschlussaufgabe
Name: Adriana Gudic
Matrikel: 256217
Datum: 23.02.2018
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/


namespace Abschlussaufgabe {

    export class Morty {
        animation: number = 0;
        sprechen: boolean = false;
        constructor() {

        }

        update(): void {
            this.draw();
            this.animateMouth();
        }
        draw(): void {
            //Mortyshirt
            crc2.beginPath();
            crc2.moveTo(120, 400);
            crc2.lineTo(350, 400);
            crc2.lineTo(350, 600);
            crc2.lineTo(120, 600);
            crc2.closePath();
            crc2.stroke();
            crc2.fillStyle = "#F7FE2E";
            crc2.fill();

            //Hair
            crc2.beginPath();
            crc2.arc(210, 250, 190, 0, 2 * Math.PI);
            crc2.fillStyle = "#8A4B08";
            crc2.fill();

            //Mortyface
            crc2.beginPath();
            crc2.arc(230, 300, 180, 0, 2 * Math.PI);
            crc2.fillStyle = "#ffdbac";
            crc2.fill();

            //Mortyeyes
            crc2.beginPath();
            crc2.arc(200, 300, 65, 0, 2 * Math.PI);
            crc2.fillStyle = "#ffffff";
            crc2.fill();

            crc2.beginPath();
            crc2.arc(340, 300, 65, 0, 2 * Math.PI);
            crc2.fillStyle = "#ffffff";
            crc2.fill();

            //Mortypupils
            crc2.beginPath();
            crc2.arc(210, 300, 5, 0, 2 * Math.PI);
            crc2.fillStyle = "#000000";
            crc2.fill();

            crc2.beginPath();
            crc2.arc(350, 300, 5, 0, 2 * Math.PI);
            crc2.fillStyle = "#000000";
            crc2.fill();

            //Mortymouth closed
            crc2.beginPath();
            crc2.moveTo(290, 410);
            crc2.lineTo(330, 410);
            crc2.closePath();
            crc2.stroke();

        }

        animateMouth(): void {
            if (this.sprechen == true) {

                if (this.animation < 8) {
                    crc2.beginPath();
                    crc2.arc(300, 410, 30, 0, 2 * Math.PI);
                    crc2.fillStyle = "cccccc";
                    crc2.fill();
                    this.animation++;
                }
                else if (this.animation < 16) {

                    crc2.fillRect(290, 400, 40, 30);
                    this.animation++;
                }
                else if (this.animation < 24) {

                    crc2.beginPath();
                    crc2.moveTo(290, 410);
                    crc2.lineTo(330, 410);
                    crc2.closePath();
                    crc2.stroke();
                    this.animation++;
                }
                else if (this.animation < 32) {

                    crc2.fillRect(290, 400, 40, 30);
                    this.animation++;
                }
                else {
                    this.animation = 0;
                }
            }
        }



    }
}