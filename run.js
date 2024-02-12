function calculateMoney(num){
    const perTicketPrice=120;
    const dailyCost=500+(50*8);
    if(num<0){
        return "Please Type A Positive Number";
    }
    return moneyInHand=((num*perTicketPrice)-dailyCost);
}


function checkName(str){
    let lastWord=str.length-1;
    if(typeof str!=="string"){
        return "Type A Name Please! "
    }
    else if(str[lastWord]==="a"||str[lastWord]==="A"||str[lastWord]==="y"||str[lastWord]==="Y"||str[lastWord]==="i"||str[lastWord]==="I"||str[lastWord]==="e"||str[lastWord]==="E"||str[lastWord]==="o"||str[lastWord]==="O"||str[lastWord]==="u"||str[lastWord]==="U"||str[lastWord]==="w"||str[lastWord]==="W"){
        return "Good Name";
    }
    else{
        return "Bad Name";
    }
}


function deleteInvalids(arr){
    const newArray=[];
    if(Array.isArray(arr)===false){
        return "Please Input An Array"
    }    
    for(let num of arr){
        if(typeof num==="number" && isNaN(num)===false){
            newArray.push(num);
        }
    }
    return newArray;
}


function password(obj){
    let yearValue=obj.birthYear.toString().length;
    if(!obj||!obj.name||!obj.birthYear||!obj.siteName||yearValue<4){
        return "Data Missing..."
    }
    const firstWord=obj.siteName[0].toUpperCase();
    const otherWord=obj.siteName.slice(1,obj.siteName.length);
    return firstWord+otherWord+"#"+obj.name+"@"+obj.birthYear;
}


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













console.log(calculateMoney(10));
console.log(calculateMoney(1055));
console.log(calculateMoney(93));
console.log(calculateMoney(-130));
console.log("-------------------------------------------------------------------------------------------")
console.log(checkName("Salman"));
console.log(checkName("RAFEE"));
console.log(checkName("Jhankar"));
console.log(checkName(199));
console.log(checkName(["Rashed"]));
console.log("-------------------------------------------------------------------------------------------")

console.log(deleteInvalids([ NaN, 1,12,0 ,-1 , undefined ]));
console.log(deleteInvalids([1 , null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }]));
console.log(deleteInvalids(["1" , {num:2} , NaN ]));
console.log(deleteInvalids([ 1 , 2 , -3 ]));
console.log(deleteInvalids({num: [ 1 , 2 , 3 ]}));
console.log("-------------------------------------------------------------------------------------------")
console.log(password({name: "kolimuddin" , birthYear: 1999 , siteName: "google" }))
console.log(password({name: "rahat" , birthYear: 2002, siteName: "facebook" }))
console.log(password({name: "toky" , birthYear: 200, siteName: "Facebook" }))
console.log(password({name: "maisha" , birthYear: 2002 }))
console.log("-------------------------------------------------------------------------------------------")
console.log(monthlySavings([ 1000 , 2000 , 3000 ] , 5400));
console.log(monthlySavings([ 1000 , 2000 , 2500 ] , 5000));
console.log(monthlySavings([ 900 , 2700 , 3400] , 10000));
console.log(monthlySavings(100, [ 900 , 2700 , 3400]));