/**
 * @description:The number of times to Flip Coin
 */
var head=0;
var tail=0;
var totalhead=0;
var totaltail=0;

var king= (number) => 
{
    try{
        for(let x=0;x<=number;x++)
        {
            if(Math.random()<0.5)
            {
            head=head+1;
            }
    else
        tail=tail+1;
        }
    totalhead=(head/(head+tail)*100);
    totaltail=100-totalhead;
    return "the percentage of head:" +totalhead +"the percentage of tail:" +totaltail;
    }
    catch(error)
    {
   console.log("error");
    }
    
    }

    module.exports={king}