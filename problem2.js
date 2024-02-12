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
console.log(checkName("Salman"));
console.log(checkName("RAFEE"));
console.log(checkName("Jhankar"));
console.log(checkName(199));
console.log(checkName(["Rashed"]));