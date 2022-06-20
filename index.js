
const Dog = require('./js/Dog.js')
/* OOP - object oriented programing
parametrai - ka zinaui ,koks as (informacija)
metordai - ka galiu (funkcionalumas)
*/

console.clear();

const rex = new Dog('Rex', 'tax');
const brisius = new Dog('Brisius', 'Lietuvos lencuginis');


console.log(rex);
console.log(brisius);

console.log(rex.name);
console.log(brisius.name);

console.log(rex.voice());
console.log(brisius.voice());

console.log(brisius.getBone());
console.log(brisius.getBone());
console.log(brisius.getBone());
console.log(brisius.getBone());
console.log(brisius.getBone());

console.log(rex.getBone());


console.log(rex.changeName('Reksas'));

