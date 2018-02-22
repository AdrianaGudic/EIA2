/*
Aufgabe: A5, Objektorientierte Skipiste
Name: Adriana Gudic
Matrikel: 256217
Datum: 17.11.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    class SoundPlay {
        constructor(_sound) {
            this.sound = _sound;
        }
        playSound() {
            this.sound.play();
        }
    }
    Abschlussaufgabe.SoundPlay = SoundPlay;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=soundplay.js.map