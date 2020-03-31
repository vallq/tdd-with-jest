module.exports = num => {
    const isZero = num === 0;
    const isMultipleOfThree = num % 3 === 0;
    const isMultipleOfFive = num % 5 === 0;
    const isMultipleOfFifteen = isMultipleOfThree && isMultipleOfFive;
    
    if(isZero) {
        return num;
    } else if (isMultipleOfFifteen) {
        return "FizzBuzz";
    } else if (isMultipleOfThree) {
        return "Fizz";
    } else if (isMultipleOfFive) { 
        return "Buzz";
    }

    return num;
};