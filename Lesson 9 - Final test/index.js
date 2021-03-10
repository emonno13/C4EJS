

// 1.
function findOppositeNumber(n, inputNumber) {
    if (!/^([2468]|1[02468]|20)$/.test(n) || inputNumber<0 || inputNumber > n-1) {
        return null;
    };
    if (inputNumber < n / 2) {
        return n / 2 + inputNumber;
    } else if(inputNumber){
        return inputNumber - n / 2;
    }
}

console.log(findOppositeNumber(14, 0));

//2. 
function merge2String(str1, str2) {
    let temp = '';
    let len = 0;
    len = (str2.length > str1.length) ? str2.length : str1.length;
    for (let i = 0; i < len; i++) {
        if (str1[i] && str2[i]) {
             temp += str1[i] + str2[i];
        }
        if (!str1[i]) {
             temp += str2[i];
        }
        if (!str2[i]) {
             temp += str1[i];
        }
        // console.log(str1[i],str2[i])
        // temp += str1[i] + str2[i];
    }
    return temp;
}
console.log(merge2String("abcdf", "123"));
/**
 * https://levelup.gitconnected.com/writing-a-regex-to-detect-a-range-of-numbers-why-not-just-parse-the-string-to-integers-instead-8a24089eab0b
 */