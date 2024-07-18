// ascending order me 
let j=[1,3,9,2,6,1];
console.log(j);
j.sort();
console.log(j);
// descending me karny ka tariqa
// let b=[1,3,9,2,6,1];
// b.sort(function (x,y){
//     return y-x;
// });
// console.log(b);

let b=[1,3,9,2,6,1];// also this way
b.sort((x,y)=> y-x);
console.log(b);

// - ki case ne by default galat sortong hoti ha 
// let r=[-9,-7,0,6,7];
// console.log(r);
// r.sort();
// console.log(r);//[ -7, -9, 0, 6, 7 ] which is wrong

// correct way
let r=[-9,-7,0,6,7];
console.log(r);
r.sort((a,b)=>a-b);
console.log(r);//[ -9, -7, 0, 6, 7 ] which is correct