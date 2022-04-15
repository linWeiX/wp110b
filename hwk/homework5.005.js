//  function mean(a){
//     var sum = 0;
//     a.forEach(function(value) {
//          sum = sum + value;
//     });
//     return sum;
//  }

// console.log('mean',mean[1,2,3,4,5]);

let a = [1,2,3,4,5];
let sum = 0,counter = 0;
a.forEach(function(value) {
    sum = sum + value;
    counter++;
});
console.log("mean",sum/counter);
