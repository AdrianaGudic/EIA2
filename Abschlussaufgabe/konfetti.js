/*
Aufgabe: Abschlussaufgabe
Name: Adriana Gudic
Matrikel: 256217
Datum: 23.02.2018
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    class konfettiInfo {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        move() {
            if (this.y > 610) {
                this.y = 0;
            }
            this.y += Math.random() * 5;
            this.draw();
        }
        draw() {
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(this.x, this.y, 3, 0, 2 * Math.PI);
            Abschlussaufgabe.crc2.fillStyle = "#8181F7";
            Abschlussaufgabe.crc2.fill();
        }
        update() {
            this.move();
            this.draw();
        }
    }
    Abschlussaufgabe.konfettiInfo = konfettiInfo;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=konfetti.js.map