// Q17-
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only
//  two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list,
//  print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the 
// end of your program.
//informing that only two people can be invited on dinner
var guests = ["sara", "sana", "Hira", "Madiha", "Nazia", "Hamra"];
console.log("Due to limited space, only two people can be invited for dinner");
//remove guests until two guests remain
while (guests.length > 2) {
    var removeGuest = guests.pop();
    console.log("sorry ".concat(removeGuest, ", you are no longer invited to the dinner."));
}
//printing invitation to the remaining two guests
var $guest = ["sara", "sana"];
$guest.map(function (items) { return (console.log("dear ".concat(items, ", you are still invited to the dinner."))); });
//removing ames the last two names from the list
$guest.pop();
$guest.pop();
//printing the fiinal list to confirm it's empty
console.log("Final guests list:", $guest);
// Q18-
// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
//• Store the locations in a array:
var placeToVisit = ["England", "China", "Pakistan", "SWitzerland", "Greece"];
// Print your array in its original order:
console.log("original order:", placeToVisit);
// • Print your array in alphabetical order without modifying the actual list.
console.log("alphabetic order:", __spreadArray([], placeToVisit, true).sort());
// • Show that your array is still in its original order by printing it.
console.log("orginal order after sorting:", placeToVisit);
// • Print your array in reverse alphabetical order without changing the order of the original list.
console.log("Reverse alphabetic order:", __spreadArray([], placeToVisit, true).sort().reverse());
// • Show that your array is still in its original order by printing it again.
console.log("original order after reverse sorting:", placeToVisit);
// • Reverse the order of your list. Print the array to show that its order has changed.
console.log("Reversed order:", __spreadArray([], placeToVisit, true).reverse());
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("back to the original order:", placeToVisit);
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("sorted in alphabetic order:", __spreadArray([], placeToVisit, true).sort());
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("sorted in reverse alphabetic order:", __spreadArray([], placeToVisit, true).sort().reverse());
// Q19-
// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are 
// inviting to dinner.
var invitations = ["sara", "sana"];
var count_invitation = invitations.length;
console.log("".concat(count_invitation, " people invited to the dinner"));
// Q20-
// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages,
//  or anything else you’d like. Write a program that creates a list containing these items.
var languages = ["urdu", "English", "spanish", "chinese", "French"];
console.log("languages spoken in the world:");
console.log(languages);
// Q21-
// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
var mySelf = { name: "sidra", gender: "female", age: 32 };
console.log(mySelf);
