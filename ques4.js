// sort array ignoring minus
a=[-9,-2,6,2];
console.log(a);
a.sort((a,b)=>Math.abs(a)-Math.abs(b));
console.log(a);