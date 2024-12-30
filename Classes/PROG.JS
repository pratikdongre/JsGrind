// march 2023 accumlated 150000
// every month 5000

let startMonth = new Date("2023-03");
console.log(startMonth.getMonth());

let currentMonth = new Date();
console.log(currentMonth.getMonth());

let countMonths =0;

if(startMonth.getFullYear() == "2023"){
    countMonths = 11 - startMonth.getMonth() + 1 ;
    // console.log(countMonths);
    if(currentMonth.getFullYear() == "2024")
    {
        countMonths +=  (currentMonth.getMonth()+1); 
    }

}

console.log(countMonths);
// 20 months

let accumlatedAmmount = 0;
let currentMonthIteration = new Date(startMonth);
for(let i = countMonths ; i >= 1 ; i--)
{
    accumlatedAmmount += 5000;

    let monthName = currentMonthIteration.toLocaleString('default', {month : 'long'});
    let year = currentMonthIteration.getFullYear();
    
    console.log(`${i} - ${monthName} ${year} and ${accumlatedAmmount}`);

    currentMonthIteration.setMonth(currentMonthIteration.getMonth() +1 );


}

console.log(accumlatedAmmount);
