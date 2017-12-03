/*
Aufgabe: A7, StudiVZ
Name: Adriana Gudic
Matrikel: 256217
Datum: 01.12.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var StudiVZ;
(function (StudiVZ) {
    var Matrikel;
    var Name;
    var Firstname;
    var Age;
    var Gender;
    var Comment;
})(StudiVZ || (StudiVZ = {}));
var students = [];
var stop = false;
while (!stop) {
    var action = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn,a oder s eingeben");
    switch (action) {
        case "n":
        case "N":
            var input = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (w oder m) und Kommentar");
            alert(saveData(input));
            break;
        case "a":
        case "A":
            var matrikel = parseInt(prompt("Eingabe Matrikelnummer"));
            alert(queryData(matrikel));
            break;
        case "s":
        case "S":
            stop = true;
    }
}
function saveData(_input) {
    let splitted = _input.split(",");
    if (parseInt(splitted[0]) == NaN) {
        return "Matrikelnummer keine Nummer";
    }
    var gender = parseInt(splitted[4]) == 1;
    let student = {
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
function queryData(_matrikel) {
    for (let i = 0; i < students.length; i++) {
        if (students[i].Matrikel == _matrikel) {
            return "Student: " + "\nMatrikelnummer: " + students[i].Matrikel + "\nName: " + students[i].Name + "\nVorname: " + students[i].Firstname + "\nAlter: " + students[i].Age + "\nGeschlecht: " + students[i].Gender + "\nKommentar: " + students[i].Comment;
        }
        else {
            return "Matrikelnummer nicht gespeichert";
        }
        return;
    }
}
//# sourceMappingURL=StudiVZ.js.map