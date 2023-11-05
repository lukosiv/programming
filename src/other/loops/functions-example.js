function findBiggestBoobs(sizes) {
    let biggestSize = sizes[0]

    // for (const currentSize of sizes) {}

    for (let i = 1; i < sizes.length; i++) {
        let currentSize = sizes[i];
        if (currentSize > biggestSize) {
            biggestSize = currentSize
        }
    }

    return biggestSize
}

console.info(findBiggestBoobs([
    1,
    2, // Olga
    2.5,
    6, // <----
    0 // Max
]))

console.info(findBiggestBoobs([
    10, 2, 4,
    5, // <----
    1
]))