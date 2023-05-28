// ? Develop a program to print numbers which should come after 3 nonprime numbers. Develop between 10 to 100

function isPrime(num){

    for(var i = 2; i<= Math.sqrt(num); i++){
        if(num % i === 0){
            return false;
        }
    }

    return true;
}

function printNonPrimeNumbers(start,end,count){
      let nonPrimeNumber = 0;

for(var i= start; i <= end; i++){
    if(!isPrime(i)){
        nonPrimeNumber++;
    }  else {
        nonPrimeNumber = 0;
    }

    
if(nonPrimeNumber >= count){
    console.log(i);
}
} 

} 


printNonPrimeNumbers(10,100,3);

        