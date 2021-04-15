// let i = 1;                      // initialize
// while (i < 100) {               // enters the cycle if statement is true
//     i *= 2;                     // increment to avoid infinite loop
//     // console.log("Numero: "+i);   // output
//     console.log(`Numero: ${i} - ${3 + i}`);   // output
// }

// let array = ["a", "b", "c"];
// let i = 0;
// while (i < array.length) {
//     console.log(`Numero: ${i}`);
//     console.log(`Valor no array: ${array[i]}`);
//     i++;
// }

// let array = [
//     ["a", "b", "c", "d"],
//     ["e", "f", "g"],
//     ["h", "i"],
// ];
// for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array[i].length; j++) {
//         console.log(`Numero: ${i}, ${j}`);
//         console.log(`Valor no array: ${array[i][j]}`);
//     }
// }

// function readUsersFromExcelFile() {
//     return [
//         { name: 'Filipe', age: 12 },
//         { name: 'Ga', age: 24 },
//     ];
// }

// function sendEmail(user) {
//     // code to send an email to given user
//     console.log('sending email to '+user.name);
// }

// let users = readUsersFromExcelFile();
// for (let user of users) {
//     sendEmail(user);
// }
// let i = 0;
// while(i < users.length) {
//     sendEmail(users[i]);
//     i++;
// }