//defining first name and lastname
const firstName = 'john';
const lastName = 'doe';

//concatenation of the string firstname and lastname
let fullName = firstName + ' ' + lastName;
console.log(fullName);

//defining the age
const Age = '20';
console.log(Age);

//defining the email
let email = 'john@example.com';
console.log(email);

//defining the country
const country = 'Nigeria';
console.log(country);

//array containing favourite food 
let oddfoods = ['rice', 'chicken', 'pizza'];

// pushing a new favourite food into the array
let result = oddfoods.push('donut');

//new array containing favourite food 
const newfoods = ['beans', 'yam'];

// adding oddfood and newfood array
let favouritefoods = oddfoods.concat(newfoods);
console.log(favouritefoods);

//diplaying name in upper case
console.log(fullName.toUpperCase());

//dispaying total number of favourite food
console.log(favouritefoods.length);