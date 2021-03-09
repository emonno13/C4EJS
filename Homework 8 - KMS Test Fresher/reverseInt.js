
const reverse = (x) => {
    if (x > 0x7FFFFFFF) {
        return 0;
    }
    let parseString = x.toString();
    let temp = '';
    for (let i = parseString.length -1 ; i >= 0; i--) {
        temp += parseString[i];
    }
    return Number(temp);
};

console.log(reverse(123));