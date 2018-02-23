/*
Aufgabe: Abschlussaufgabe
Name: Adriana Gudic
Matrikel: 256217
Datum: 23.02.2018
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/


namespace Abschlussaufgabe {

    export class SoundPlay {
        sound: HTMLAudioElement;


        constructor(_sound: any) {
            this.sound = _sound;

        }


        playSound(): void {
            this.sound.play();


        }




    }
}