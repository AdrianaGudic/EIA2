var Abschlussaufgabe;
(function (Abschlussaufgabe) {
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
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(this.x, this.y, 3, 0, 2 * Math.PI);
            Abschlussaufgabe.crc2.fillStyle = "#FFFFFF";
            Abschlussaufgabe.crc2.fill();
        }
        update() {
            this.move();
            this.draw();
        }
    }
    Abschlussaufgabe.SnowInfo = SnowInfo;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=snow.js.map