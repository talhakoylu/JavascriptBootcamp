const primeToThousand = (num) => {
    let primes = [];
    for(let t = 0; t < num; t++){
        if(isPrime(t)){
            primes.push(t)
        }
    }

    return console.log(primes);
}

const isPrime = (num)=>{
    if(num < 2){
        return false;
    }

    for(let i = 2; i < num; i++){
        if(num % i === 0){
            return false;
        }
    }

    return true;
}

primeToThousand(1000);