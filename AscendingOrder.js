//Print ascending order of 3 given numbers

var data = [40,20,10,90, 40, 40, 30];


for(i=0; i < data.length; i++){
    for(j=0; j < data.length; j++){
        if(data[j] > data[j+1]){
            let temp = data[j];
            data[j] = data[j+1];
            data[j+1] = temp;
        }
    }
}

console.log(data);



// Print numbers in ascending order and also remove duplicates..

// function sortAndRemoveDuplicates(numbers){

//     for(i=0; i < data.length; i++){
//         for(j=0; j < data.length; j++){
//             if(data[j] > data[j+1]){
//                 let temp = data[j];
//                 data[j] = data[j+1];
//                 data[j+1] = temp;
//             }
//         }
//     }

// const uniqu = [];



// for(const number of data) {
//     if(!uniqu.includes(number)){
//         uniqu.push(number);
//     }
// }



// return uniqu;
    
// }




// var data = [40,20,10,90, 40, 40, 30];
// var result = sortAndRemoveDuplicates(data);

// console.log(result);