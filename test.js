var readline=require("readline-sync");

var year=readline.question("Enter Question\n");

if(year%4==0)
{
    console.log(year+" is a leap year");
}
else
{
    console.log(year+" is not a leap year");
}