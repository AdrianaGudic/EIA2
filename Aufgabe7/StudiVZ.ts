/*
Aufgabe: A7, StudiVZ
Name: Adriana Gudic
Matrikel: 256217
Datum: 01.12.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace StudiVZ {
    
    interface StudentData { 
        var Matrikel: string;
        var Name: string;
        var Firstname: string;
        var Age: number;
        var Gender: boolean;
        var Comment: string;
    
    }

    var students: StudentData[] = [];
    var stop: boolean = false;

    while (!stop) {
        var action: string = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn,a oder s eingeben");

        switch (action) {
            case "n":
            case "N":
                var input: string = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (w oder m) und Kommentar");
                alert(saveData(input));
                break;
            case "a":
            case "A":
                var matrikel: number = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }

function saveData(_input: string): string {
        let splitted: string[] = _input.split(",");

        if (parseInt(splitted[0]) == NaN) {
            return "Matrikelnummer keine Nummer";
        }
        
        
        var gender: boolean = parseInt(splitted[4]) == 1;

        let student: StudentData = {
            
            Matrikel: parseInt(splitted[0]),
            Name: splitted[1],
            Firstname: splitted[2],
            Age: parseInt(splitted[3]),
            Gender: gender,
            Comment: splitted[5]
        };

        students.push(student);


        return "Eingegebene Daten: " + "\nMatrikelnummer: " + student.Matrikel + "\nName: " + student.Name + "\nVorname: " + student.Firstname + "\nAlter: " + student.Age + "\nGeschlecht: " + student.Gender + "\nKommentar: " + student.Comment;
}  
    
    function queryData(_matrikel: number): string {
        
        for (let i: number = 0; i < students.length; i++) {
            
            if (students[i].Matrikel == _matrikel) {
                return "Student: " + "\nMatrikelnummer: " + students[i].Matrikel + "\nName: " + students[i].Name + "\nVorname: " + students[i].Firstname + "\nAlter: " + students[i].Age + "\nGeschlecht: " + students[i].Gender + "\nKommentar: " + students[i].Comment;
            }
            
                else {
                return "Matrikelnummer nicht gespeichert";
                }

        return;
    }
}