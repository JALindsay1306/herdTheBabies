function herdTheBabies (unherdedLetters) {
    if (!unherdedLetters){return ""};
    let herdedLetters = ""
    const splitLetters = unherdedLetters.split("");
    const sortedLetters = splitLetters.sort((letter1,letter2)=>{
        if(letter1.toLowerCase() === letter2.toLowerCase()){
            return letter1.charCodeAt(0) > letter2.charCodeAt(0) ? 1: -1;
        } else{
        return letter1.toLowerCase() > letter2.toLowerCase() ? 1 : -1;
        }
    });
    herdedLetters+= sortedLetters.join("");
    return herdedLetters;
}

module.exports = herdTheBabies;