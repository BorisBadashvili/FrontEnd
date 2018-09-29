function truncate(str, maxLength) {

    if(str.length <= maxLength) {
        return str    
    }
    return str.slice(0, maxLength - 1) + `...`
}

alert(truncate("What I'd like to tell on this topic is:", 18)); // "What I'd like to te…"
alert(truncate("Hi everyone!", 20)); // "Hi everyone!"