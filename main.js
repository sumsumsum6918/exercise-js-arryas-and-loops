const names = ["Zlatan", "Beckham", "Zidane", "Maradona", "Pele", "Ronaldo"];

console.log(
  `1. ${names[3]}, Det ska vara den fyra på listen som ska skrivs ut efersom listen börjar med [0]`
);

const question2 = names.push("Drogba");
console.log(
  "2. " +
    question2 +
    " The length of the array is the return value of the method."
);

const question3 = names.splice(0, 0, "Figo");
console.log(
  `3. With splice(), to add "Figo" to the [0] place of the array while deleting nothing. The returned value is "${question3}" (empty) because nothing was deleted from the array.`
);

console.log("4. The return value of pop() is the deleted item: " + names.pop());

const question5 = names.pop();
names.unshift(question5);
console.log(
  "5. I used pop() to pop the last item and saved it to a variable and then by using unshift(variable), the saved variable is added back to the beginning of the array. Array: " +
    names
);

console.log(
  "6. In JS, arrays and objects are pass by reference which means that they save the address (reference) of the the array. Therefore when a value is added or removed from the array, the reference of the array remains the same."
);

const players = [
  "Zlatan",
  "Beckham",
  "Zidane",
  "Ronaldo",
  "Romario",
  "Maradona",
];

const question7 = players.includes("Messi");
console.log(
  `7. The result is ${question7}, it means that Messi is not found in the players array.`
);

const question8 = players.includes("Zlatan");

console.log(
  question8 === true
    ? "8. Zlatan är med i listan!"
    : "8. Zlatan är inte med i listan."
);

const question9 = players.indexOf("Maradona");
console.log(
  `9. The result is ${question9} because Maradona is at the 6th name of the list d.v.s index 5.`
);

const question10 = players.indexOf("Messi");
console.log(
  `10. It returns ${question10}, this way we can use strict quality operator and can for example push the item if the item doesnt already exist in the array. `
);

const question11 = players.join(", ");
console.log("11. " + question11);

const question12 = players.join("-");
console.log("12. " + question12);

const question13 = players.splice(0, 2);
console.log(
  "13. splice(0, 2), it reads from index 0 and delete 2 items from it and theres no item to get added to the array."
);

const question14 = players.splice(2, 0, "Ronaldinho");
console.log(
  `14. Ponaldinho is now at index [2] of the array. The returned value of splice() is "${question14}" because nothing has got removed.`
);

const question15 = players.indexOf("Ronaldo");
players.splice(question15, 1);
console.log(
  "15. First save the index of 'Ronaldo' to a variable and the splice(variable, 1). This will remove one item at wherever 'Ronaldo' is at."
);

const question16 = players.slice(0, 3);
console.log(
  "16. Array: " +
    question16 +
    ". By using slice(), it creates a new array that contains the desired items which means it deosnt affect the original array."
);

const question17 = players.slice(2);
console.log("New array contains: " + question17);
console.log("Players array contains: " + players);

const question18 = players.with(1, "Mbappé");
console.log(
  `18. The with() method returns a new string: ${question18}, meanwhile the original array is unaffected. 
Original array: ${players}`
);