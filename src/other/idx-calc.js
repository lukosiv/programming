const prompt = require('prompt-sync')();

function calcMassIdx(weight, height) {
    const bodyMassIdx = weight / (height / 100 * height / 100)

    console.info(bodyMassIdx)

    if (bodyMassIdx < 16) {
        console.info("Выраженный дефицит массы тела;")
    } else if (bodyMassIdx >= 16 && bodyMassIdx < 18.5) {
        console.info("Недостаточная масса тела (дефицит);")
    } else if (bodyMassIdx >= 18.5 && bodyMassIdx < 25) {
        console.info("недожирній")
    } else {
        console.info("Жирный как поезд пассажирный")
    }
}







const weight = prompt('Weight: ');
const height = prompt('Height: ');
console.log(`weight ${weight}`);
console.log(`height = ${height}`);
calcMassIdx(weight, height)