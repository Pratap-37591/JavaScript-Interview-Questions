// ? Develop a program to print prime numbers in the reverse order from 70 to 20

function isPrime(number){
    for(var i=2; i<=Math.sqrt(number); i++){
        if(number % i === 0){
            return false;
        }
    }
    return true;
}

function printPrimeNumbers(start,end){
    for(var i= start; i >= end; i--){
        if(isPrime(i)){
            console.log(i);
        }
    }
}

printPrimeNumbers(70,20);


// ? Develop a program to print prime numbers in the  from 20 to 70

function isPrime(number){
    for(var i=2; i<= Math.sqrt(number); i++){
        if(number % i === 0 ){
            return false;
        }
    }
    return true;
}

function printPrimeNumbers(start, end){
   for(var i=start; i <= end; i++){
    if(isPrime(i)){
        console.log(i);
    }
   }
}

printPrimeNumbers(20,70);