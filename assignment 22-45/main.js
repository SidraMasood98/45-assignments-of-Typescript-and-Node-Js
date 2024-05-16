// Q22-
// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in 
// one of your programs to produce an index error. Make sure you correct the error before closing the program.
var days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
// console.log(days({6}) // index error
console.log(days[6]);
// Q23-
// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of
//  each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
//test # 1:
var car = "subaru";
console.log("Is car == 'subaru'? I predict True");
console.log(car == "subaru");
//test # 2:
console.log("Is car != 'Subaru'? I predict True");
console.log(car != "Subaru");
//test # 3:
console.log("Is car.length == 6? I preict True");
console.log(car.length == 6);
//test # 4: than or equal to, and less than or equal to
console.log("Is car.length >= 6? I preict True");
console.log(car.length >= 6);
//test # 5:
console.log("Is car != 'Subaru' || car.length < 6? I predict True");
console.log(car != 'Subaru' || car.length < 6);
//test # 6:
console.log("Is car != 'Subaru' && car.length < 6? I predict false");
console.log(car != 'Subaru' && car.length < 6);
//test # 7:
console.log("Is car == 'suzuki'? I predict false");
console.log(car == "suzuki");
//test # 8:
console.log("Is car != 'suzuki' && car.length > 6? I predict false");
console.log(car != 'suzuki' && car.length > 6);
//test # 9:
console.log("Is car === suzuki || car.length > 6? I predict false");
console.log(car === 'suzuki' || car.length > 6);
//test # 10:
console.log("Is car != 'subaru'? I predict false");
console.log(car != "subaru");
// Q24-
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. 
// Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
//• Tests for equality and inequality with strings
var food1 = "biryani";
var food2 = "kabab";
var food = (food1 != food2);
console.log(food);
var food$ = (food1 == food2);
console.log(food$);
//• Tests using the lower case function:
var car$ = "audi";
console.log(car$ == 'audi');
var car1 = "audi";
console.log(car1 != 'audi');
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//(==):
var pens = 3;
var erasers = 2;
var result = pens == erasers;
console.log(result);
//(!=):
var num1 = 3;
var num2 = 3;
var result1 = num1 != num2;
console.log(result1);
//(>,<):
var Num1 = 4;
var Num2 = 2;
var Result2 = 4 > 2;
console.log(Result2);
var Numb1 = 4;
var Numb2 = 2;
var result2 = 4 < 2;
console.log(result2);
//(<= , >=):
var Number1 = 6;
var Number2 = 8;
var result3 = 6 <= 8;
console.log(result3);
var number1 = 6;
var number2 = 8;
var result4 = 6 >= 8;
console.log(result4);
//• Tests using "and" and "or" operators:
var e = 4;
var f = 7;
var logicalAnd = (e > 0) && (f > 0);
console.log(logicalAnd);
var logicalAnd1 = (e < 0) && (f > 0);
console.log(logicalAnd1);
var logicalOr1 = (e < 0) || (f > 0);
console.log(logicalOr1);
var logicalOr2 = (e < 0) || (f < 0);
console.log(logicalOr2);
//• Test whether an item is in a array:
var stationary = ["pen", "pencil", "eraser", "sharpner"];
console.log(stationary.includes('pencil'));
//• Test whether an item is not in a array:
var stationary1 = ["pen", "pencil", "eraser", "sharpner"];
console.log(stationary.includes('compass'));
// Q25-
// Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green',
//  'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
//print a message that the player just earned 5 points:
var alienColor1 = "green";
if (alienColor1 == "green")
    console.log("you earned 5 points");
//(The version that fails will have no output.):
var alien_color1 = "red";
if (alien_color1 == "green")
    console.log("you earned 5 points");
// Q26-
// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
//print a statement that the player just earned 5 points for shooting the alien.
var alien_color2 = "green";
if (alien_color2 == "green")
    console.log("the player just earned 5 points for shooting the alien.");
//print a statement that the player just earned 10 points.
var alien_color3 = "red";
if (alien_color3 != "green")
    console.log("the player just earned 10 points");
//program that runs the if block and another that runs the else block.
var alien_color = "green";
if (alien_color == "green") {
    console.log("the player just earned 5 points for shooting the alien.");
}
else {
    console.log("the player just earned 10 points");
}
var alienColor = "red";
if (alienColor == "green") {
    console.log("the player just earned 5 points for shooting the alien.");
}
else {
    console.log("the player just earned 10 points");
}
// Q27-
// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
//print a message that the player earned 5 points.
var alien_color4 = "green";
if (alien_color4 == "green") {
    console.log("the player just earned 5 points.");
}
else {
    console.log("the player just earned 10 points.");
}
//print a message that the player earned 10 points.
var alien_color5 = "yellow";
if (alien_color5 == "green") {
    console.log("the player just earned 5 points.");
}
else {
    console.log("the player just earned 10 points.");
}
//print a message that the player earned 15 points.
var alien_color6 = "red";
if (alien_color6 == "green") {
    console.log("the player just earned 5 points.");
}
else {
    console.log("the player just earned 15 points.");
}
// Q28-
// Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// • If the person is age 65 or older, print a message that the person is an elder.
var age = 1;
if (age < 2) {
    console.log("the person is a baby");
}
else {
    console.log("person is a toddler");
}
var age1 = 3;
if (age1 >= 2) {
    console.log("the person is a toddler");
}
else {
    console.log("person is a kid");
}
var age2 = 11;
if (age2 > 9) {
    console.log("the person is a kid");
}
else {
    console.log("person is a teenager");
}
var age3 = 18;
if (age3 < 20) {
    console.log("the person is a teenager");
}
else {
    console.log("person is a adult");
}
var age4 = 40;
if (age4 > 20) {
    console.log("the person is a adult");
}
else {
    console.log("person is a elder");
}
var age5 = 80;
if (age5 > 65) {
    console.log("the person is a elder");
}
else {
    console.log("person is a adult");
}
// Q29-
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits
// in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array,
//  the if block should print a statement, such as You really like bananas!
var favorite_fruits = ["apple", "mango", "banana"];
if (favorite_fruits.includes("apple")) {
    console.log("you really like an apple");
}
if (favorite_fruits.includes("mango")) {
    console.log("you really like an mango");
}
if (favorite_fruits.includes("banana")) {
    console.log("you really like an banana");
}
if (favorite_fruits.includes("kiwi")) {
    console.log("you really like an kiwi");
}
if (favorite_fruits.includes("strawberry")) {
    console.log("you really like an strawberry");
}
// Q30-
// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print
//  a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
var users1 = ["Eric", "Admin", "john", "Biya", "Elon"];
for (var _i = 0, users1_1 = users1; _i < users1_1.length; _i++) {
    var user = users1_1[_i];
    if (user === "Admin") {
        console.log("Hello Admin, would you like to see a status report?");
    }
    else {
        console.log("hello ".concat(user, ", thank you for logging in again."));
    }
}
// Q31-
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed
var users2 = ["Eric", "Admin", "john", "Biya", "Elon"];
if (users2.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (var _a = 0, users2_1 = users2; _a < users2_1.length; _a++) {
        var user = users2_1[_a];
        if (user === "Admin") {
            console.log("Hello Admin, would you like to see a status report?");
        }
        else {
            console.log("hello ".concat(user, ", thank you for logging in again."));
        }
    }
}
// • Remove all of the usernames from your array, and make sure the correct message is printed
var users = [];
if (users.length === 0) {
    console.log("We need to find some users!");
}
//Q# 32
// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will 
// need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
var current_users = ["eric", "admin", "john", "Biya", "Elon"];
var new_users = ["eric", "admin", "Bina", "madiha", "Zainab"];
var current_users_lower = current_users.map(function (user) { return user.toLowerCase(); });
for (var _b = 0, new_users_1 = new_users; _b < new_users_1.length; _b++) {
    var new_user = new_users_1[_b];
    if (current_users_lower.includes(new_user.toLowerCase())) {
        console.log("sorry ".concat(new_user, ", the person will need to enter a new username"));
    }
    else {
        console.log("yes ".concat(new_user, ", still in avalaible list"));
    }
}
//Q33-
// Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, 
// except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read
//  "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
var ordinalNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _c = 0, ordinalNumber_1 = ordinalNumber; _c < ordinalNumber_1.length; _c++) {
    var number = ordinalNumber_1[_c];
    if (number === 1) {
        console.log("".concat(number, "st"));
    }
    else if (number === 2) {
        console.log("".concat(number, "nd"));
    }
    else if (number === 2) {
        console.log("".concat(number, "nd"));
    }
    else if (number === 3) {
        console.log("".concat(number, "rd"));
    }
    else {
        console.log("".concat(number, "th"));
    }
}
// Q34-
// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the 
// name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. 
// For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza.
//  The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, 
//  such as I really love pizza!
var fav_pizza = ["fajita", "chickentikka", "pepperoni"];
for (var _d = 0, fav_pizza_1 = fav_pizza; _d < fav_pizza_1.length; _d++) {
    var pizza = fav_pizza_1[_d];
    console.log(pizza);
}
;
for (var _e = 0, fav_pizza_2 = fav_pizza; _e < fav_pizza_2.length; _e++) {
    var pizza = fav_pizza_2[_e];
    console.log("i like to eat ".concat(pizza, " pizza"));
}
;
console.log("i really love pizza");
// Q35- 
// Animals: Think of at least three different animals that have a common characteristic.
// Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
// • Modify your program to print a statement about each animal, such as A dog would make a great pet.
// • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as
// Any of these animals would make a great pet!
var mammals = ["cow", "buffalo", "goat"];
for (var _f = 0, mammals_1 = mammals; _f < mammals_1.length; _f++) {
    var animal = mammals_1[_f];
    console.log(animal);
}
;
for (var _g = 0, mammals_2 = mammals; _g < mammals_2.length; _g++) {
    var animal = mammals_2[_g];
    console.log("".concat(animal, " milk is good for health"));
}
;
console.log("\n All of these animals are unique in nature but love goat as a pet ");
// Q36-
// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
//  The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
function make_shirt(size, text) {
    console.log("You have ordered ".concat(size, " shirt that says ").concat(text));
}
make_shirt("large", '"hello world"');
// Q37-
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
//  Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt1(size, text) {
    if (size === void 0) { size = "large"; }
    if (text === void 0) { text = '"I love Typescript"'; }
    console.log("You have ordered a ".concat(size, " shirt that says ").concat(text));
}
//calling a function by default values:
make_shirt1();
// calling a function with a medium size and by default message:
make_shirt1("medium");
//calling a function with a small size and different message:
make_shirt1("small", '"I love Javascript"');
// Q38-
// Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence,
//  such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities,
//   at least one of which is not in the default country.
function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country));
}
// calling a function with 3 different cities:
describe_city("Karachi");
describe_city("Lahore");
describe_city("Paris", "France");
// Q39-
//City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string
//  formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
function city_country(city, country) {
    return "".concat(city, ", ").concat(country);
}
console.log(city_country("karachi", "Pakistan"));
console.log(city_country("helsinki", "Finland"));
console.log(city_country("Jakarta", "Indonesia"));
//Q40-
// Album: Write a function called make_album() that builds a Object describing a music album.
// The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information.
// Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the
// album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album.
// If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call
//  that includes the number of tracks on an album.
function make_album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        album: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
//calling three functions with different values:
var album1 = make_album("sidra", "junoon");
var album2 = make_album("sidra", "bahaar");
var album3 = make_album("sidra", "awaz", 10);
//print three albums
console.log(album1);
console.log(album2);
console.log(album3);
// Q41-
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician
//  in the array.
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
var magician_names = ["harry porter", "hamoon", "goga"];
show_magicians(magician_names);
//Q42-
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of
// magicians by adding the phrase the Great to each magician’s name.Call show_magicians() to see that the list has actually been modified
// define the function to show magician names:
function show_magicians1(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
//function to make magicians great through .map() it will modify array
function make_great1(magicians) {
    return magicians.map(function (name) { return "the Great ".concat(name); });
}
//define an arrayof magicians names
var magician_names1 = ["harry porter", "hamoon", "goga"];
// call make_great function to modify magician names:
var magic = make_great1(magician_names);
//call show_magician that show modified list of magicians:
show_magicians1(magic);
// Q43-
// Unchanged Magicians: Start with your work from Exercise 42.
// Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the 
// new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names
// and one array with the Great added to each magician’s name.
// define the function to show magician names:
function show_magicians2(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
//function to make magicians great through .map() it will modify array
function make_great2(magicians) {
    return magicians.map(function (name) { return "the Great ".concat(name); });
}
//define an arrayof magicians names
var magician_names2 = ["harry porter", "hamoon", "goga"];
//making a copy of original array through slice() function
var copy_magician_names = magician_names2.slice();
//modify the copy of an array to include "THE GREAT" with their names
var copy_great_magician = make_great2(copy_magician_names);
// show both original array and copied array:
// original:
show_magicians2(magician_names);
// modifying copy:
show_magicians2(copy_great_magician);
// Q44-
// Sandwiches: Write a function that 
// accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function
// call provides, and it should print a summary of the sandwich that s being ordered. Call the function three times, using a different number
// of arguments each time.
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\n\tmaking a sandwich of the following items\n");
    items.forEach(function (singleItem) { return console.log("-" + singleItem); });
    console.log("Enjoy your sandwich!");
}
//call the function three times with different arguments:
makeSandwich("bread", "chicken", "mayo");
makeSandwich("bread", "butter");
makeSandwich("bread", "chicken", "egg", "mayo", "cheese", "lettuce", "tomato");
