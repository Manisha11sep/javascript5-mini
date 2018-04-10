const movies = require ('./data.json');
const _ = require('lodash');

console.log(movies[0]);

const titles = _.map(movies, 'title');
console.log(titles);



const movie1=movies[0];
const stuff = _map(movie1, (element, key) =>{
    if(typeof element ==='string'){
        return element + 'boho';
    }
    return element;
})