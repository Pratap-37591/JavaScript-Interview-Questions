// ? Find out whether digits are in raising order or not in a given numer?


function  digitsRisingOrder(number) {
    var digits =  number.toString();

    for(let i=0; i< digits.length - 1; i++){
        if(digits[i] >  digits[i + 1]){
            return false;
        }
    }

    return true;
}

console.log(digitsRisingOrder(176345));