// var name = 'Jill';
// var secretsFunction = function () {
//     var pinCode = [0, 0, 0, 0];
//     console.log('name inside secretsFunction: ', name);
// }

// secretsFunction();
// console.log('name outside secretsFunction: ', name);

// var filterNamesByFirstLetter = function (names, letter) {
//     var filteredNames = [];
//     for (let name of names) {
//         if (name[0] === letter) {
//             filteredNames.push(name);
//         }
//     }
//     return filteredNames
// }

// var students = ['Alice', 'Bob', 'Alyssia', 'Artem', 'Babs'];
// var filteredStudents = filterNamesByFirstLetter(students, 'A');
// console.log('filteredStudents: ', filteredStudents);

// let temperature = 30;

// if (temperature > 15) {
//     let jacket = false;
//     var happy = true;
// } else {
//     let jacket = true;
//     var happy = false;
// }

// console.log('jacket after if-else blocks: ', jacket);
// console.log('happy after if-else blocks: ', happy);

const calculateEnergy = function (mass) {
    const speedOfLight = 299792458;
    return mass * speedOfLight ** 2;
}

const energyOfMe = calculateEnergy(75);
console.log('energyOfMe if I had a mass of 75kg: ', energyOfMe);