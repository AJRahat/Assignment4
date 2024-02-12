function calculateMoney(num){
    const perTicketPrice=120;
    const dailyCost=500+(50*8);
    if(num<0){
        return "Please Type A Positive Number";
    }
    return moneyInHand=((num*perTicketPrice)-dailyCost);
}
console.log(calculateMoney(10));
console.log(calculateMoney(1055));
console.log(calculateMoney(93));
console.log(calculateMoney(-130));