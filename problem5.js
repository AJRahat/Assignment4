function monthlySavings(arr,num){
    let afterTax,savings,income=0;

    if(Array.isArray(arr)===false || typeof num!=="number"){
        return "Please Follow Correct Data Type Format ! "
    }

    for(let tk of arr){
        if(tk>=3000){
            afterTax=tk-(tk*(20/100));
            income=income+afterTax;
        }
        else{
            income=income+tk;
        }
    }
    
    savings=income-num;
    
    if(savings>=0){
        return savings;
    }
    else{
        return "Earn More...";
    }

}
console.log(monthlySavings([ 1000 , 2000 , 3000 ] , 5400));
console.log(monthlySavings([ 1000 , 2000 , 2500 ] , 5000));
console.log(monthlySavings([ 900 , 2700 , 3400] , 10000));
console.log(monthlySavings(100, [ 900 , 2700 , 3400]));
