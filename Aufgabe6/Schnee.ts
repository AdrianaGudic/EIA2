/*
Aufgabe: A6, Polymorphe Skipiste
Name: Adriana Gudic
Matrikel: 256217
Datum: 26.11.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/


namespace Aufgabe6 {
        
    export class SnowInfo extends MovingObjects { 
        x: number;
        y: number;
        color: string;
        
        constructor(_x: number, _y: number) {
            super(_x, _y);
        }
        
        move(): void {
            
            if(this.y >610){
                this.y=0;    
            }
            
            this.y += Math.random()*5;
            this.draw();
        }
        
        draw(): void {
            crc2.beginPath();
            crc2.arc(this.x, this.y, 3, 0, 2 * Math.PI);
            crc2.fillStyle = "#FFFFFF";
            crc2.fill();
            }
        
        update(): void {
            this.move();
            this.draw();
            }
        
    }
}