//print 10 to 1 but with delay of 1 sec after each number gets printed
for(let i=1;i<=10;i++)
{
    setTimeout(function(){
        console.log(11-i)
    },i*1000);
}
//same
// for(let i=1;i<=10;i++)
//     {
//         setTimeout(function(){
//             console.log(i)
//         },(11-i)*1000);//same as above
//     }