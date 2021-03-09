const x = [2,7,11,15]

const twoSum = (arr, target) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let k = i+1; k < arr.length; k++) {
            if (arr[i] + arr[k] === target) {
                console.log(`[${i},${k}]`);
                count++;
           }
        }
    }
    !count ? count = null : count;
    return count;
}


let result = twoSum(x,8);
console.log(result);