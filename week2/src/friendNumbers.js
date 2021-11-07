const friendNumbers = (num1, num2) => {
    let num1Dividers = []
    let num2Dividers = []

    findDividerNumbers(num1, num1Dividers);
    findDividerNumbers(num2, num2Dividers)

    if(totalOfArray(num1Dividers) === num2 && num1 === totalOfArray(num2Dividers)){
        return console.log(`Bu iki sayı arkadaştır: ${num1} - ${num2}`);
    }

    return console.log(`Bu sayılar küslermiş: ${num1} - ${num2}`);

}

const findDividerNumbers = (num, arr) => {
    for(let i = 1; i < num; i++){
        if(num % i === 0){
            arr.push(i)
        }
    }
}

const totalOfArray = (arr) => {
    let total = 0;

    arr.forEach(element => {
        total += element;
    });

    return total;
}

friendNumbers(220, 284)
friendNumbers(1184, 1210)
friendNumbers(39, 11)