// print kratne 11 numbers from 1 to 100

for (let i = 1; i <= 100; i = i + 1) {
    if (i % 11 === 0) {
        console.info(`${i} ✅`)
    }
    else if (i % 5 === 0) {
        console.info(`${i} 🏂`)
    }
    else {
        console.info(`${i} 💔`)
    }
}

