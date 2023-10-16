function countCharOccurrences(str, char) {

    let occurence = 0;
    
    for (let i = 0; i < str.length; i++) {
    
    if (str.charAt(i) === char) {

        occurence++;
    }
    }    
        return occurence;
}


module.exports = countCharOccurrences;
