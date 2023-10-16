function checkNumber(num) {
    
    if (num < 0) {
        return "Negative";
    }
    else if (num == 0) {
        return "Zero";
    }
    else {
        return "Positive";
    }

}

module.exports = checkNumber;
