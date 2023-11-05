function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const promoters = [
    'Eva',
    'Nastya',
    'Anya',
    'Kiril',
    'Boris',
    'Maximka',
    'Anton',
    'Zeka',
]

const results = []

for (let i = 0; i < promoters.length; i++) {
    results.push({
        name: promoters[i],
        salary: getRandomNumber(60, 1000)
    })
}

console.info(results)


let theWorsePromoter = results[0]
for (let i = 1; i < results.length; i++) {
    if (theWorsePromoter.salary > results[i].salary) {
        theWorsePromoter = results[i]
    }
}
console.info(theWorsePromoter)

for (let currentIndex = 0; currentIndex< promoters.length; currentIndex++) {
    console.info(promoters[currentIndex])
}