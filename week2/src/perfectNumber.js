const perfectNumber = (num1) => {
    let num1Dividers = []

    findDividerNumbers(num1, num1Dividers);

    if(totalOfArray(num1Dividers) === num1){
        return console.log(`Bu sayı dünya harikası: ${num1}`);
    }

    return console.log(`Bu sayı vergisini ödememiş: ${num1}`);

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

perfectNumber(220)
perfectNumber(6)
perfectNumber(28)