// Q7-
// Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8.
//  Be sure to enclose your operations in print statements to see the results.

console.log(5+3);
console.log(10-2);
console.log(2*4);
console.log(16/2);

// Q8-
// You should create four lines that look like this:
// console.log(5 + 3)
// Your output should simply be four lines with the number 8 appearing once on each line.

console.log(5+3);
console.log(10-2);
console.log(2*4);
console.log(16/2);

// Q9-
// Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number.
//  Print that message.

let favouriteNumber: number = 6;
console.log(`My favourite number is "${favouriteNumber}"`);

// Q10-
// Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to 
// write because your programs are too simple at this point, just add your name and the current date at the top of each program file. 
// Then write one sentence describing what the program does.

// author: (Sidra Masood)
// date: (wednesday, 6th March'2024)

//printing my favourite food by using message format.
let favouriteFood: string = "biryani";
console.log(`My favourite food is "${favouriteFood}"`);

// Q11-
// Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list,
//  one at a time.

let names: string [] = ["Beena", "Madiha", "Nazia", "Hamra"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);

// Q12-Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. 
// The text of each message should be the same, but each message should be personalized with the person’s name.

let names1: string [] = ["Beena", "Madiha", "Nazia", "Hamra"];
let message: string = "would you like to have a cup of tea?";
console.log(names1[0] + " " + message);
console.log(names1[1] + " " + message);
console.log(names1[2] + " " + message);
console.log(names1[3] + " " + message);


// Q13-
// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples.
//  Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

let vehicles: string [] = ["Honda Motorcycle.", "BMW.", "sportage."];
vehicles.map((items) => console.log(`I would like to own a ${items}`));


// Q14-
// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people
//  you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

let Guests: string [] = ["Beena", "Madiha", "Nazia"];
Guests.map((items) => (console.log(`dear ${items}, you are invited to the dinner.`)));

// Q15-
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. 
// You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.


let guests1: string [] = ["Beena", "Madiha", "Nazia", "Hamra"];

let cannotattend : string = "Beena";
console.log(`${cannotattend}, cannot attend the party.`);

let newguest : string = "sana";
guests1[guests1.indexOf(cannotattend)] = newguest;
console.log(guests1);

guests1.map((items) => (console.log(`dear ${items}, you are invited yo the dinner.`)));

// Q16-

// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner
//  table.

// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.

// part 1
let guests : string [] = ["sana", "Madiha", "Nazia", "Hamra"];
guests.map((items) => (console.log(`dear ${items}, "Great news! I have found a bigger dinner table".`)));


//part 2
let guestBeg : string = "sara";
guests.unshift(guestBeg);
console.log(guests);

//part 3
let middleGuest : string = "hira";
let MiddleIndex = guests.length/2
guests.splice(MiddleIndex,0,middleGuest);
console.log(guests);

//part 4
guests.push("kiran");
console.log(guests);

//part 5
guests.map((items) => console.log(`"dear ${items}, you are coodially invited on bigger dinner table." `));