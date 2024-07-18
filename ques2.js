//print 1 to 10 but with delay of 1 sec after each number gets printed
for(let i=1;i<=10;i++)
{
    setTimeout(function(){
        console.log(i);
    },i*1000)// i is lie use kia ha q k jab 1 ho ga tab 1 sec phir jab 2 sec guzryn gy tab 2 ....
}