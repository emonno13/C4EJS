const arr = []

const add = (num) => arr.push(num);

const findAll = (sum) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let k = i+1; k < arr.length; k++) {
            if (arr[i] + arr[k] === sum) {
                console.log(`[${arr[i]},${arr[k]}]`)
                count++;
           }
        }
    }
    return count;
}
// {
//     int count = 0; // Initialize result
 
//     // Consider all possible pairs and check their sums
//     for (int i = 0; i < n; i++)
//         for (int j = i + 1; j < n; j++)
//             if (arr[i] + arr[j] == sum)
//                 count++;
 
//     return count;
// }

add(3);
add(1);
add(7);
add(5);

let result = findAll(8);
console.log(result);