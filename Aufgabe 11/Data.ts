/*
Aufgabe: A10, Weihnachtsbaumkonfigurator
Name: Adriana Gudic
Matrikel: 256217
Datum: 05.01.2018
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace Aufgabe11 {
    //Baumart
    export interface Bestellung {
        art: string;
        name: string;
        preis: number;
    }

    export let posten: Bestellung[] = [
        { art: "Baumart", name: "Nordmanntanne", preis: 39.99 },
        { art: "Baumart", name: "Edeltanne", preis: 49.99 },
        { art: "Baumart", name: "Kiefer", preis: 58.99 },
        { art: "Halter", name: "gold", preis: 29.99 },
        { art: "Halter", name: "silber", preis: 25.99 },
        { art: "Halter", name: "grün", preis: 9.99 },
        { art: "Beleuchtung", name: "Lichterkette", preis: 32.99 },
        { art: "Beleuchtung", name: "Kerzen", preis: 19.99 },
        { art: "Schmuck", name: "Kugel, rot", preis: 0.90 },
        { art: "Schmuck", name: "Kugel, blau", preis: 0.90 },
        { art: "Schmuck", name: "Kugel, silber", preis: 0.90 },
        { art: "Schmuck", name: "Kugel, gold", preis: 2.50 },
        { art: "Schmuck", name: "Lametta, rot", preis: 0.50 },
        { art: "Schmuck", name: "Lametta, silber", preis: 0.50 },
        { art: "Schmuck", name: "Lametta, gold", preis: 0.50 },
        { art: "Lieferung", name: "Standard-Lieferung", preis: 0.0 },
        { art: "Lieferung", name: "Express-Lieferung", preis: 4.95 }
    ];
    
}