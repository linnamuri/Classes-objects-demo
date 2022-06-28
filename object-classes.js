let person = {
    firstName: 'Chan',
    lastName : 'Bong',
    age: 35,
    likes: ['making jokes', 'can i be any more weird', 'basketball']
}

//use dot notation to access property
console.log(person.firstName)

//using bracket notation accesslast name
console.log(person['lastName'])

// using bracket nottion access 2nd like
console.log(person['likes'][1])
// o/p -- can i be any more wierd

//object Destructuring

let meal = {
    appetizzer: 'chips & salsa',
    entree: 'chille relleno',
    dessert: 'churros',
    drink: 'horchata'
}

//using object destructuring,destructure the dessert property off of the meal object

// let{dessert} = meal this is  same as 
//let dessert = meal.dessert

// with destructuring, u can put all properties in one line
let { dessert, drink } = meal
console.log(`{dessert} goes well with ${drink}`)

// lets destructure remaining items in same declaration

let { appetizzer, entree } = meal
console.log(`{appetizzer} goes well with {entree}`)

//lets destructure the drink and rename
let { drink: bestDrinkeEver} = meal;
console.log(bestDrinkeEver)
//console.log(drink)
// looping using a for-in loop

//lets loop over our person object and console.log all the keys

for(key in person){
    console.log(key)
}
//If I want values

for(key in person) {
 console.log(person[key])
}

// add properties

// lets add a job key to person object with a value of choice

person.job = `statistical analysis and data reconfiguration`

//lets add pets array using bracket notation

person['pets'] = ['chicken','duck']
console.log(person)