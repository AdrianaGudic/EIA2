/*
Aufgabe: A6, Polymorphe Skipiste
Name: Adriana Gudic
Matrikel: 256217
Datum: 26.11.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace Aufgabe6 {

    export class MovingObjects {
        x: number;
        y: number;
        dx: number;
        dy: number;
        color: string;


        constructor(_x: number, _y: number) {
           
            
            this.x = _x;
            this.y = _y;
        }

        move(): void {
            //Leer
            }

        draw(): void {
            //Leer
        }
        
        update(): void {
            }
    }
}