/*
Aufgabe: A5, Objektorientierte Skipiste
Name: Adriana Gudic
Matrikel: 256217
Datum: 17.11.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe5;
(function (Aufgabe5) {
    class SnowInfo {
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
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.arc(this.x, this.y, 3, 0, 2 * Math.PI);
            Aufgabe5.crc2.fillStyle = "#FFFFFF";
            Aufgabe5.crc2.fill();
        }
        update() {
            this.move();
            this.draw();
        }
    }
    Aufgabe5.SnowInfo = SnowInfo;
})(Aufgabe5 || (Aufgabe5 = {}));
//# sourceMappingURL=Schnee.js.map