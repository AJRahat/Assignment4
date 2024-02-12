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
console.log(deleteInvalids([ NaN, 1,12,0 ,-1 , undefined ]));
console.log(deleteInvalids([1 , null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }]));
console.log(deleteInvalids(["1" , {num:2} , NaN ]));
console.log(deleteInvalids([ 1 , 2 , -3 ]));
console.log(deleteInvalids({num: [ 1 , 2 , 3 ]}));