// filter out even elements
function fun(ele){
    if (ele%2!=0){
        return true;
    }
    else{
        return false;
    }
}
let arr=[1,7,6,9,4,2];
console.log(arr);
arr=arr.filter(fun);
console.log(arr);
// elent less than 6
arr=arr.filter(ele=>(ele<6));
console.log(arr);