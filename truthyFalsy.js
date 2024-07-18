//Falsy Values --> false conditions, false, 0 , null,NaN(NOT A NUMBER),undefined
//Truthy values--> everything except falsy values

// 0 k ilawa koi b real number den gy to wo hamesha TRUE  ho ga
// kisi b tarah ka text hamesha TRUTH ho ga
if(NaN)
{
    console.log("TALHA");//truthy
}
else{
    console.log(2);//falsy
}

//concept of undefined

// console.log(a);// error because a not declared
console.log(typeof(a));// ab error ki bajye undefined aye ga