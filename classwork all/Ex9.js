function checkSpam(str){
    str = str.toLowerCase()
    if( str.includes("viagra") || str.includes("xxx")) {
        return true
    } else {
        return false
    }
}

alert(checkSpam(`buy viagra`))
alert(checkSpam(`xxxx `))
alert(checkSpam(`zzz `))