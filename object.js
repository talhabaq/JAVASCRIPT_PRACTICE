// object is kind of map/dictionary where we havekey value parts
//jese array me data store krty hyn wese is me b kr skty hyn 
t=["talha",17,19.5];

let x={
    name: 'talha',
    "nick name" : "tb", //age key me space deni ho to phir string banana paray ga
    age: 17,            // name , age ko keys kehty hyn
    percentage: 19.5
};
console.log(x.age);
console.log(x["age"]);// age ko is tarah string bana k b kar skty
console.log(x["nick name"]);// space walay (string) kois tarah se print karyn gy 

x.age=18;
console.log(x.age);

for (const key in x) {
    console.log(key,x[key]);
    
}