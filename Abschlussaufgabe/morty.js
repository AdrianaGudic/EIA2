/*
Aufgabe: A5, Objektorientierte Skipiste
Name: Adriana Gudic
Matrikel: 256217
Datum: 17.11.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    class Morty {
        constructor() {
            this.animation = 0;
            this.sprechen = false;
        }
        update() {
            this.draw();
            this.animateMouth();
        }
        draw() {
            //Mortyshirt
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.moveTo(120, 400);
            Abschlussaufgabe.crc2.lineTo(350, 400);
            Abschlussaufgabe.crc2.lineTo(350, 600);
            Abschlussaufgabe.crc2.lineTo(120, 600);
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.stroke();
            Abschlussaufgabe.crc2.fillStyle = "#F7FE2E";
            Abschlussaufgabe.crc2.fill();
            //Hair
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(210, 250, 190, 0, 2 * Math.PI);
            Abschlussaufgabe.crc2.fillStyle = "#8A4B08";
            Abschlussaufgabe.crc2.fill();
            //Mortyface
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(230, 300, 180, 0, 2 * Math.PI);
            Abschlussaufgabe.crc2.fillStyle = "#ffdbac";
            Abschlussaufgabe.crc2.fill();
            //Mortyeyes
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(200, 300, 65, 0, 2 * Math.PI);
            Abschlussaufgabe.crc2.fillStyle = "#ffffff";
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(340, 300, 65, 0, 2 * Math.PI);
            Abschlussaufgabe.crc2.fillStyle = "#ffffff";
            Abschlussaufgabe.crc2.fill();
            //Mortypupils
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(210, 300, 5, 0, 2 * Math.PI);
            Abschlussaufgabe.crc2.fillStyle = "#000000";
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(350, 300, 5, 0, 2 * Math.PI);
            Abschlussaufgabe.crc2.fillStyle = "#000000";
            Abschlussaufgabe.crc2.fill();
            //Mortymouth closed
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.moveTo(290, 410);
            Abschlussaufgabe.crc2.lineTo(330, 410);
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.stroke();
        }
        animateMouth() {
            if (this.sprechen == true) {
                if (this.animation < 8) {
                    Abschlussaufgabe.crc2.beginPath();
                    Abschlussaufgabe.crc2.arc(300, 410, 30, 0, 2 * Math.PI);
                    Abschlussaufgabe.crc2.fillStyle = "cccccc";
                    Abschlussaufgabe.crc2.fill();
                    this.animation++;
                }
                else if (this.animation < 16) {
                    Abschlussaufgabe.crc2.fillRect(290, 400, 40, 30);
                    this.animation++;
                }
                else if (this.animation < 24) {
                    Abschlussaufgabe.crc2.beginPath();
                    Abschlussaufgabe.crc2.moveTo(290, 410);
                    Abschlussaufgabe.crc2.lineTo(330, 410);
                    Abschlussaufgabe.crc2.closePath();
                    Abschlussaufgabe.crc2.stroke();
                    this.animation++;
                }
                else if (this.animation < 32) {
                    Abschlussaufgabe.crc2.fillRect(290, 400, 40, 30);
                    this.animation++;
                }
                else {
                    this.animation = 0;
                }
            }
        }
    }
    Abschlussaufgabe.Morty = Morty;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=morty.js.map