
namespace Abschlussaufgabe {
        
    export class SnowInfo {
            
        x: number;
        y: number;
        
    
    constructor(_x: number, _y: number) {
        
        this.x = _x;
        this.y = _y;
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