/*
Aufgabe: A10, Weihnachtsbaumkonfigurator
Name: Adriana Gudic
Matrikel: 256217
Datum: 05.01.2018
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe10;
(function (Aufgabe10) {
    Aufgabe10.posten = [
        { art: "Baumart", name: "Nordmanntanne", preis: 39.99 },
        { art: "Baumart", name: "Blaufichte", preis: 49.99 },
        { art: "Baumart", name: "Fichte", preis: 25.99 },
        { art: "Baumart", name: "Kiefer", preis: 58.99 },
        { art: "Halter", name: "schwarz", preis: 15.99 },
        { art: "Halter", name: "gold", preis: 29.99 },
        { art: "Halter", name: "silber", preis: 25.99 },
        { art: "Halter", name: "dunkelgrün", preis: 9.99 },
        { art: "Beleuchtung", name: "Lichterkette", preis: 32.99 },
        { art: "Beleuchtung", name: "Kerzen", preis: 19.99 },
        { art: "Schmuck", name: "Kugel, bunt gestreift", preis: 2.00 },
        { art: "Schmuck", name: "Kugel, rot", preis: 0.90 },
        { art: "Schmuck", name: "Kugel, blau", preis: 0.90 },
        { art: "Schmuck", name: "Kugel, silber", preis: 0.90 },
        { art: "Schmuck", name: "Kugel, gold", preis: 2.50 },
        { art: "Schmuck", name: "Lametta, rot", preis: 0.50 },
        { art: "Schmuck", name: "Lametta, silber", preis: 0.50 },
        { art: "Schmuck", name: "Lametta, gold", preis: 0.50 },
        { art: "Schmuck", name: "Engel-Anhänger", preis: 5.00 },
        { art: "Schmuck", name: "Stern-Anhänger", preis: 7.99 },
        { art: "Schmuck", name: "Zuckerstange", preis: 1.00 },
        { art: "Lieferung", name: "Standard-Lieferung", preis: 0.0 },
        { art: "Lieferung", name: "Express-Lieferung", preis: 4.95 }
    ];
    Aufgabe10.b = [];
    for (var i = 0; i < Aufgabe10.posten.length; i++) {
        if (Aufgabe10.posten[i].art == "Baumart") {
            var temp = [Aufgabe10.posten[i].name, Aufgabe10.posten[i].preis];
            Aufgabe10.b.push(temp);
        }
        if (Aufgabe10.posten[i].art == "Beleuchtung") {
            var temp = [Aufgabe10.posten[i].name, Aufgabe10.posten[i].preis];
            Aufgabe10.b.push(temp);
        }
    }
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=Data.js.map