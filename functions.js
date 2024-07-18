// to increase code's reuseability
function OnetoN( n){
    for(let i=1;i<=n;i++)
    {
        console.log(i);
    }
    console.log(); // enter lne k lie (space)
}
// OnetoN(4);
// OnetoN(9);
// OnetoN(10);

function eq(a,b){

  return console.log(Math.abs(a**3)+Math.abs(b**3));// math.abs hamesha positive value return karay ga

}
console.log(eq(10,-8));