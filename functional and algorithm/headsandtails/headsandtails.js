/**
 * @description:The number of times to Flip Coin
 * @since : 08/20/2019
 * @author : Harshit Sethi
 */
const input=require('readline-sync');
const headsandtails=require('../headsandtails/headsandtailsBl');

var number=input.question('no. of time coin flipped: ');
if(number<0)
{
    console.log("negative number");
}
else
{
    console.log(headsandtails.king(number));
}
