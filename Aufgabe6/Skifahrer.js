/*
Aufgabe: A6, Polymorphe Skipiste
Name: Adriana Gudic
Matrikel: 256217
Datum: 26.11.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe6;
(function (Aufgabe6) {
    class SkierInfo extends Aufgabe6.MovingObjects {
        constructor(_x, _y, _dx, _dy, _color) {
            super(_x, _y);
            this.dx;
            this.dy;
            this.color = _color;
        }
        move() {
            this.x += Math.random() + 2;
            this.y += Math.random() + 1.5;
            if (this.x > 800) {
                this.x = 0;
                this.y = 100;
            }
        }
        draw() {
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.arc(this.x, this.y - 10, 10, 1, 2 * Math.PI);
            Aufgabe6.crc2.fillStyle = "#000000";
            Aufgabe6.crc2.fill();
            Aufgabe6.crc2.fillStyle = this.color;
            Aufgabe6.crc2.fillRect(this.x - 4, this.y - 5, 5, 35);
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.moveTo(this.x - 20, this.y + 20);
            Aufgabe6.crc2.lineWidth = 2;
            Aufgabe6.crc2.lineTo(this.x + 35, this.y + 40);
            Aufgabe6.crc2.strokeStyle = "black";
            Aufgabe6.crc2.stroke();
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.moveTo(this.x - 20, this.y + 10);
            Aufgabe6.crc2.lineWidth = 3;
            Aufgabe6.crc2.lineTo(this.x + 35, this.y + 30);
            Aufgabe6.crc2.stroke();
        }
        update() {
            this.move();
            this.draw();
        }
    }
    Aufgabe6.SkierInfo = SkierInfo;
})(Aufgabe6 || (Aufgabe6 = {}));
//# sourceMappingURL=Skifahrer.js.map