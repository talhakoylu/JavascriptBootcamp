const findPrime = (...nums) => {
    nums.forEach(element => {
        if (element < 2) {
            return console.log(`Bu sayı 2den küçüktür: ${element}`);
        }

        for (let i = 2; i < element; i++) {
            if (element % i === 0) {
                return console.log(`Bu sayı asal değildir: ${element}`);
            }
        }
        return console.log(`Bu sayı asaldır: ${element}`);
    })
}

findPrime(-3, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 21, 27, 29, 31, 51, 39);