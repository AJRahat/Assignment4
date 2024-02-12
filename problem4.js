function password(obj){

    let yearValue=obj.birthYear.toString().length;
    if(!obj||!obj.name||!obj.birthYear||!obj.siteName||yearValue<4){
        return "Data Missing..."
    }

    const firstWord=obj.siteName[0].toUpperCase();
    const otherWord=obj.siteName.slice(1,obj.siteName.length);

    return firstWord+otherWord+"#"+obj.name+"@"+obj.birthYear;
}
console.log(password({name: "kolimuddin" , birthYear: 1999 , siteName: "google" }))
console.log(password({name: "rahat" , birthYear: 2002, siteName: "facebook" }))
console.log(password({name: "toky" , birthYear: 200, siteName: "Facebook" }))
console.log(password({name: "maisha" , birthYear: 2002 }))