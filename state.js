// const coffeeStock = {
//     arabica: 100,
//     robusta: 150,
//     liberica: 200
// }

// export default coffeeStock;

let myString = "";

try {
    myString += "a";
    throw Error();
} catch(e) {
    myString += "b";
} finally {
    myString += "c";
    throw Error();
    myString += "d";
}

console.log(myString);