// for of loop syntax
// arr=[1,7,9,6];
// for (const ele of arr) {
//     console.log(ele);
// }

// brr=[1,5,7,8];
// for(let i=0;i<4;i++)
// {
//     brr[i]*=2;
// }
// console.log(brr);

//ye multiplication wala kam hum for of se nahi kar skty
// brr=[8,9,7,10];
// for(let ele of brr)
// {
//     ele*=2;

// }
// console.log(brr);

brr=[8,9,7,10];
for(let ele of brr)
{
    ele*=2;
    console.log(ele);// ye har memeber k lie new copies banata ha lekin pori  array nahi de skta
}
console.log(brr);



