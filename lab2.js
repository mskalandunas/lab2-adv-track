'use strict';

// LAB 2: SORTING AND CAMPY SCI-FI

// Welcome to Lab 2 =)

// Be sure to read all the comments!

// All of the instructions are inline with the assignment below.
// Look for the word TODO in comments.  Each TODO will have a
// description of what is required.

// To run this file (in the terminal) use: node lab2.js

//*********************************************************
// SETUP
//*********************************************************

// We're going to use this special assert method again to
// test our code
function assert(expression, failureMessage) {
  if (!expression) {
    console.log('assertion failure: ', failureMessage);
  }
}

//*********************************************************
// PROBLEM 1: The Blob. 20 points
//*********************************************************

/* Dowington, PA had 1000 citizens on the night the blob escaped
 its meteorite. At first, the blob could only find and consume
 Pennsylvanians at a rate of 1/hour. However, each time it digested
 someone, it became faster and stronger: adding to its consumption
 rate by 1 person/hour.

    for the...      | starting rate of | persons consumed |
                    |  consumption     |    that hour     |
--------------------|------------------|------------------|
    first hour      |    1/hour        |        1         |
    second hour     |    2/hour        |        2         |
    third hour      |    3/hour        |        3         |
    fourth hour     |    4/hour        |        4         |

 TODO: First, make a constructor function, called Blob, that makes blobs.

 TODO: Next, create an instance of Blob named blob.

 TODO: Then, use a loop to calculate how long it took the blob to finish
 with Dowington.
*/

function Blob() {
  this.hoursEating = 0;
}

var blob = new Blob();

for (var i = 0; i < 1000;) {
  blob.hoursEating++;
  i = i + blob.hoursEating;
}

var hoursSpentInDowington = blob.hoursEating;

                           // TODO: assign me the value of the
                           // above calculation (how long it took
                           // the blob to eat Dowington)

// Now, write a method that takes a population for an arbitrary
// town, and the starting consumption rate, and returns the number
// of hours the blob needs to ooze its way through that town.

Blob.prototype.hoursToOoze = function(population, peoplePerHour) {
  var hoursToOoze = 0;
  var currentRate = peoplePerHour;

  for (var i = 0; i < population;) {
    hoursToOoze++;
    i = i + currentRate;
    currentRate = currentRate + peoplePerHour;
  }
  return hoursToOoze;
};

assert(blob.hoursToOoze(0, 1) === 0, 'no people means no time needed.');
assert(blob.hoursToOoze(1000, 1) === hoursSpentInDowington,
  'hoursSpentInDowington should match hoursToOoze\'s result for 1000');

// TODO: write three more assertions like the two above, testing out
// the hoursToOoze method.

assert(blob.hoursToOoze(1234514325, 1) === 49689, 'whoa');
assert(blob.hoursToOoze(23, 7) === 3, 'Small town.');
assert(blob.hoursToOoze(6, 6) === 1, 'Hungry.');

//*********************************************************
// PROBLEM 2: Universal Translator. 20 points
//*********************************************************

var hello = {
  klingon: 'nuqneH',  // home planet is Qo'noS
  romulan: 'Jolan\'tru', // home planet is Romulus
  'federation standard': 'hello' // home planet is Earth
};

// TODO: define a constructor that creates objects to represent
// sentient beings. They have a home planet, a language that they
// speak, and method (that you'll place on the prototype) called
// sayHello.

function SentientBeing(planet, nativeLang) {
  // TODO: specify a home planet and a language
  // you'll need to add parameters to this constructor
  this.planet = planet;
  this.nativeLang = nativeLang;
}

// sb is a SentientBeing object
function sayHello(sb) {
  // TODO: say hello prints out (console.log's) hello in the
  // language of the speaker, but returns it in the language
  // of the listener (the sb parameter above).
  // use the 'hello' object at the beginning of this exercise
  // to do the translating

  //console.log = language of speaker
  //return = language of listener

  console.log(hello[this.nativeLang]);
  return hello[sb.nativeLang];

  //bracket notation - unlike expressions, object arguments need the brackets when console.log

  //TODO: put this on the SentientBeing prototype
}

SentientBeing.prototype.sayHello = sayHello;

// TODO: create three subclasses of SentientBeing, one for each
// species above (Klingon, Human, Romulan).

function Human() {}

Human.prototype = new SentientBeing("Earth", "federation standard");

function Klingon() {}

Klingon.prototype = new SentientBeing("Qo'noS", "klingon");

function Romulan() {}

Romulan.prototype = new SentientBeing("Jolan'tru", "romulan");

assert((new Human()).sayHello(new Klingon()) === 'nuqneH', 'the klingon should hear nuqneH');

assert((new Human()).sayHello(new Romulan()) === "Jolan'tru", "the romulan should hear Jolan'tru");

assert((new Klingon()).sayHello(new Human()) === "hello", "the human should hear hello");

assert((new Klingon()).sayHello(new Romulan()) === "Jolan'tru", "the romulan should hear Jolan'tru");

assert((new Romulan()).sayHello(new Human()) === "hello", "the human should hear hello");

assert((new Romulan()).sayHello(new Klingon()) === "nuqneH", "the klingon should hear nuqneH");

// TODO: write five more assertions, to complete all the possible
// greetings between the three types of sentient beings you created above.

//*********************************************************
// PROBLEM 3: Sorting. 20 points.
//
// Implement the following functions. Write at least 2
// assertions for each one (the assertions are how you
// will test your code)
//*********************************************************

var people = ["Barry", "Ulysses", "Pubert", "Porkins", "Streetlamp", "Ember", "Fox", "Chalupa", "Barnacles"];

var testChar = people[0].charAt(people[0].length - 1);
console.log(testChar);

function lastLetterSort(stringArray) {
  function byLastLetter(a, b) {
    //TODO: implement me. sort the strings in alphabetical
    // order using their last letter
    // Read this about how the sort function works:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    // this byLastLetter function is a "compare function"
    // And check out the "comparing strings" section  here:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
    return a.charAt(a.length - 1) > b.charAt(b.length - 1);
  }
  stringArray.sort(byLastLetter);
}

lastLetterSort(people);

assert(people[0] === 'Chalupa', 'The first index should contain "Chalupa".');
assert(people[1] === 'Streetlamp', 'The second index should contain "Streetlamp".');

function sumArray(numberArray) {
  var sum = 0;
  // TODO: implement me using forEach
  numberArray.forEach(function(value) {
    sum += value;
  });
  return sum;
}

assert(sumArray([1, 2, 3, 4, 5, 6, 7, 8]) === 36, 'this array should add up to 36.');
assert(sumArray([3, 5, 1523, -315, 76, 41.3]) === 1333.3, 'this array should add up to 1333.3');

function sumSort(arrayOfArrays) {
  arrayOfArrays.sort(function(a, b) {
    // TODO: implement me using sumArray
    //  order the arrays based on the sum of the numbers
    //  inside each array
    var sum1 = sumArray(a);
    var sum2 = sumArray(b);

    return sum1 - sum2;
  });
}

var array1 = [[5, 3, 1], [2, 3, 5], [6, 2, 1, 6, 8], [5, 2, 3, 4]];

sumSort(array1);

assert(sumArray(array1[0]) === 9, 'Index 0 should be 9.');
assert(sumArray(array1[1]) === 10, 'Index 1 should be 10.');
assert(sumArray(array1[2]) === 14, 'Index 2 should be 14.');
assert(sumArray(array1[3]) === 23, 'Index 3 should be 23.');

//*********************************************************
// PROBLEM 4: Cleanup: 10 points
// Makes sure this file passes jshint and jscs
//
// ./node_modules/.bin/grunt jshint
// ./node_modules/.bin/grunt jscs
//*********************************************************
