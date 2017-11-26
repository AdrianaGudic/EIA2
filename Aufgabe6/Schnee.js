/*
Aufgabe: A6, Polymorphe Skipiste
Name: Adriana Gudic
Matrikel: 256217
Datum: 26.11.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe6;
(function (Aufgabe6) {
    class SnowInfo extends Aufgabe6.MovingObjects {
        constructor(_x, _y) {
            super(_x, _y);
        }
        move() {
            if (this.y > 610) {
                this.y = 0;
            }
            this.y += Math.random() * 5;
            this.draw();
        }
        draw() {
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.arc(this.x, this.y, 3, 0, 2 * Math.PI);
            Aufgabe6.crc2.fillStyle = "#FFFFFF";
            Aufgabe6.crc2.fill();
        }
        update() {
            this.move();
            this.draw();
        }
    }
    Aufgabe6.SnowInfo = SnowInfo;
})(Aufgabe6 || (Aufgabe6 = {}));
//# sourceMappingURL=Schnee.js.map