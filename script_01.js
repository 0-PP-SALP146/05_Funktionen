"use strict";

/***** Funktionen 01 *****/
// 1. Kapselung von Codeblöcken

// Funktionsaufruf (call)
// test();

// Funktionsrumpf (body) | callee
// Funktionsdeklaration
function test()
{
    console.log("Hallo Sero Mero!");
}

/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN

// ausgabeNamen(); // call
function ausgabeNamen() 
{
    // what happens in VEGAS ...
    let firstName = "Karsten";
    console.log("Hallo " + firstName + "!");
}

// console.log(firstName); // Fehler: Scope!

/***** Funktionen 02b *****/
// 2b. Parametrisierung + Datenübergabe von AUSSEN

// ausgabeNamenParam("Sero"); // call + Argumente (Daten für Parameter)
// ausgabeNamenParam("Mero");
// ausgabeNamenParam("Joe");
// Argumente sind Daten für Parameter

function ausgabeNamenParam(firstName) // Parameter
{
    console.log("Hallo " + firstName + "!");
}
    
/***** Funktionen 02c *****/
// 2c. Mehrere Parameter / Argumente

// ausgabeNamenParams  ("Dave", "Batista");
// ausgabeNamenParams  ("Jamshid", "Rahmanzani");
// ausgabeNamenParams  ( prompt("Vorname?"), prompt("Nachname?"));

function ausgabeNamenParams (firstName, familyName) {
    console.log ("Hallo " + firstName + " " + familyName + "!");
}

/***** Funktionen 03a *****/
// 03a. Vorbereitung
// Postulat: one function = one job (uncle Bob)
// SRP single respnsibility principle

// ausgabeNamenParams2  ("Jamshid", "Rahmanzani");

function ausgabeNamenParams2 (firstName, familyName) {

    // 1. Funktionalität: string composing
    const GAP = " "; // GAP = Leerzeichen
    let outputStr = "Hallo" + GAP + firstName + GAP + familyName + "!";


    // 2. Funktionalität: string output
    console.log (outputStr);

}

/***** Funktionen 03b *****/
// 03b Trennen der Funktionalitäten in Funktionen| return

output(getString("Maxine", "Mützerich")); // Wir geben die Namen vor
output(getString(prompt("Vorname?"), prompt("Nachname?"))); // Namen werden individuell eingegeben

function getString(firstName, familyName) {
    const GAP = " ";
    let outputStr = "Hallo" + GAP + firstName + GAP + familyName + "!";
    return outputStr; // return sendet Daten an den call zurück
}

/** INPUT --> Parameter | return --> OUTPUT **/


// 2. Funktionalität: string output
// output("Hi");
// output(2);
// output(true);
function output(outputData) {
    console.log(outputData);
}