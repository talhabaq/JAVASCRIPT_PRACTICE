let arr=[9,8,4,3,2];
console.log(arr);
let brr=arr.reduce(function (a,b){
    return a+b; // pehly 1st two add hon gy then sum a me store ho ga
});
console.log(brr);