//defining first name and lastname
const firstName = 'john';
const lastName = 'doe';

//concatenation of the string firstname and lastname
let fullName = "Name: " + firstName + ' ' + lastName;
console.log(fullName);

//defining the age
const Age = "Age: " + '20';
console.log(Age);

//defining the email
let email = "Email: " + 'john@example.com';
console.log(email);

//defining the country
const country = "Country: " + 'Nigeria';
console.log(country);

//array containing favourite food 
let oddfoods = ['rice', 'chicken', 'pizza'];

// pushing a new favourite food into the array
let result = oddfoods.push('donut');

//new array containing favourite food 
const newfoods = ['beans', 'yam'];

// adding oddfood and newfood array
let favouritefoods = oddfoods.concat(newfoods);
console.log("Favourite Foods:" + favouritefoods);

//diplaying name in upper case
console.log(" Name in Uppercase:" + fullName.toUpperCase());

//dispaying total number of favourite food
console.log(" Number of Favourite Foods:" + favouritefoods.length);
