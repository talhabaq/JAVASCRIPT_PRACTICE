//split ka matlab ha string ko array me tabdeel karna
let a='kashif sahib is the best teacher';
let b=a.split(' ');//matlab jahan pe b usy space mily ga whan pe slit kary ga 
//               (yani array k alag elements)
for(let ele of b){
    console.log(ele);
} 
console.log(b);
