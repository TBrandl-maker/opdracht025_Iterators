//oude stijl iterators

/* While loop:
Maak en nieuwe map en nieuwe javascript file.
Maak een array genaamd colors met de kleuren: yellow, blue, red, orange.
Schrijf een while loop die de kleuren in de console logged en stopt wanneer alle kleuren geprint zijn.

For loop:
Gebruik dezelfde array als startpunt.
Schrijf een for loop die de kleuren in de console logged en stopt wanneer alle kleuren geprint zijn.
Gebruik de lengte van de array in je for loop: array.length */


let colors = ['yellow', 'blue', 'red', 'orange'];
let count = 0;
while (count < colors.length) {
    console.log(colors[count]);
    count++;

}

let colors2 = ['yellow', 'blue', 'red', 'orange'];
for (i = 0; i < colors2.length; i++) {
    console.log(colors2[i]);

}

//forEach

const colors3 = ['yellow', 'blue', 'red', 'orange'];

colors3.forEach(element => console.log(element));

//Vragen beantwoorden:
/*
Hoeveel regels neemt mijn for loop en mijn while loop in beslag?
    while loop: 7, for loop: 5

    Hoeveel regels neemt mijn forEach method in beslag?
    3

Welke voordelen heeft het gebruiken van een array method nog meer
t.o.v. een for of een while loop? Welke methode vind je bijvoorbeeld makkelijker leesbaar? Waarom?
    Ik denk dat je meer controle hebt bij gebruik van array methods en sneller kunt werken vanwege de ingebouwde functies.
    Minder foutgevoelig. Vooral als de arrays heel lang zijn en je wilt er op verschillende manieren informatie naar voren/eruit halen.
    Voor kleine opdrachten/korte loops is een while of for loop prima wel prima te gebruiken. Je kunt zo wel zien hoe de loop werkt.


Kun je een array method gebruiken op een object? Het antwoord is nee.
Stel je hebt een object met 45 properties. Probeer eens uit te zoeken (gebruik Google)
hoe je tóch die 45 properties kunt console.loggen met een loop: Looping through the properties of an object.
Probeer dit stukje code uit en gebruik hier een object met 5 properties voor. Ben je nu aan het itereren?

    zie onderstaand: Ik zie dit niet als een iteratie. Je herhaalt de keys en values wel, maar er zit geen loop van herhaling in.

You can convert an object into an array with three methods:

Object.keys
Object.values
Object.entries

const fruits = {
    apple: 28,
    orange: 17,
    pear: 54,
    strawberry: 10,
    grape: 20,
}

const entries = Object.entries(fruits)
console.log(entries)
*/
