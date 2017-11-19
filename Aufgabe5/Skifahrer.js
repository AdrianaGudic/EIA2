/*
Aufgabe: A5, Objektorientierte Skipiste
Name: Adriana Gudic
Matrikel: 256217
Datum: 17.11.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe5;
(function (Aufgabe5) {
    class SkierInfo {
        constructor(_x, _y, _dx, _dy, _color) {
            this.x = _x;
            this.y = _y;
            this.dx = _dx;
            this.dy = _dy;
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
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.arc(this.x, this.y - 10, 10, 1, 2 * Math.PI);
            Aufgabe5.crc2.fillStyle = "#000000";
            Aufgabe5.crc2.fill();
            Aufgabe5.crc2.fillStyle = this.color;
            Aufgabe5.crc2.fillRect(this.x - 4, this.y - 5, 5, 35);
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.moveTo(this.x - 20, this.y + 20);
            Aufgabe5.crc2.lineWidth = 2;
            Aufgabe5.crc2.lineTo(this.x + 35, this.y + 40);
            Aufgabe5.crc2.strokeStyle = "black";
            Aufgabe5.crc2.stroke();
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.moveTo(this.x - 20, this.y + 10);
            Aufgabe5.crc2.lineWidth = 3;
            Aufgabe5.crc2.lineTo(this.x + 35, this.y + 30);
            Aufgabe5.crc2.stroke();
        }
        update() {
            this.move();
            this.draw();
        }
    }
    Aufgabe5.SkierInfo = SkierInfo;
})(Aufgabe5 || (Aufgabe5 = {}));
//# sourceMappingURL=Skifahrer.js.map