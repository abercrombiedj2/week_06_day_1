// var sports = ['football', 'tennis', 'rugby'];

// var numberOfElements = sports.length;
// console.log('number of elements: ', numberOfElements);

// var firstSport = sports[0];
// console.log('first sport: ', firstSport);

// var secondSport = sports[1];
// console.log('second sport: ', secondSport);

// sports.push('curling');
// sports.push('snooker');
// sports.push('darts');
// console.log('sports: ', sports);

// sports.pop();
// console.log('sports: ', sports);

// var removedSport = sports.pop();
// console.log('removed sport: ', removedSport);

// sports.unshift('basketball');
// console.log('sports: ', sports);

// var removedSport = sports.shift();
// console.log('removed sport: ', removedSport);

// var removedSport = sports.splice(3, 1);
// console.log('removed sports: ', removedSport);

// for (var currentSport of sports) {
//     var uppercasedSport = currentSport.toUpperCase();
//     console.log(uppercasedSport);
// }

// for (var i = 0; i < sports.length; i++) {
//     var currentSport = sports[i];
//     var uppercasedSport = currentSport.toUpperCase();
//     console.log(uppercasedSport);
// }

var movie = {
    title: 'It\'s a Wonderful Life',
    year: 1946,
    language: 'Spanish'
};
console.log('movie: ', movie);

var title = movie.title;
console.log('title: ', title);

movie.cast = ['James Stewart', 'Donna Reed'];
console.log('movie: ', movie);

movie.language = 'English';
console.log('movie: ', movie);

movie['language'] = 'French';
console.log('movie: ', movie);

movie['subtitle-language'] = 'German';
console.log('movie: ', movie);

var propertyToAccess = 'subtitle-language';
movie[propertyToAccess] = 'German';
console.log('subtitle language: ', movie[propertyToAccess]);

delete movie.year;
console.log(movie);

movie.ratings = {
    critic: 94,
    audience: 95
};
console.log('movie: ', movie);

var audienceRating = movie.ratings.audience;
console.log('audience rating: ', audienceRating);

for (var key in movie) {
    var value = movie[key];
    console.log(`The ${key} is ${value}`);
};

var keys = Object.keys(movie);
console.log('keys: ', keys);