/** Lập trình bất đồng bộ - Asynchronus */


/**
 * Introduction
    Cả môi trường trình duyệt và Node.js, Javascript đều chạy đơn luồng
    Ta có 2 dòng code theo thứ tự X1, X2:
        - Trong các chương trình đồng bộ, X1 chạy xong thì X2 mới được chạy
        - Trong các chương trình bất đồng bộ, X2 có thể chạy trước trong khi X1 đang thực hiện
 */

/**
 * Event Loop && Call Stack && Callback Queue && Wed Apis
    ex: http://latentflip.com/loupe/

    - Method trong file JS sẽ chạy từ trên xuống dưới và lần lượt được xếp vào Call Stack để thực thi
    - Nếu method nào thuộc Wed Apis, sẽ không được thực thi ngay trong Call Stack được đưa vào Wed Apis
    - Sau khi CallStack thực thi tất cả method hiện tại trong nó,những method có trong Wed Apis sẽ được đưa vào Callback Queue
    - Event loop sẽ đưa các method (async callback) trong Callback Queue vào CallStack để thực thi nếu CallStack rỗng
    - Chương trình kết thúc

    => Call Stack là một cấu trúc dữ liệu dạng ngăn xếp (stack) dùng để chứa thông tin về hoạt động của chương trình máy tính trong lúc thực thi.
    => Wed Apis : HTTP request, setTimeOut, DOM ( những thứ không tồn tại trong V8 JS Engine)
    => JS chạy đơn luồng ( single-thread ), không đợi chờ ( non-blocking ), bất đồng bộ ( asynchronous )
    ref : https://blogchanhday.com/p/javascript-tong-quan-ve-engine-runtime-call-stack-va-event-loop/
 */

 /**
  * Callback && Async Callback
    Callback là một function (hàm) sẽ được thực hiện sau khi một function khác đã thực hiện xong
    Trong Javascript, functions là objects,do đó nó có thể nhận tham số là function, và cũng có thể trả về một function. 
            Bất kì function nào được truyền dưới dạng một argument ( tham số ) được gọi là một callback function.
            Các function có khả năng nhận vào function khác được gọi là higher - order function ( HOC ).
                Cách 1: function(){}  
                Cách 2 : () => {}
*/
// function doHomework(subject, callback) {
//     alert(`Starting my ${subject} homework.`);
//     callback();
// }
// doHomework('math', function() {
//     alert('Finished my homework');
// });

// document.getElementById('myBtn').addEventListener('click', displayDate)
// function displayDate() {
//     document.getElementById('demo').innerHTML = Date()
// }
    
// fs.readFile('demo.txt', (err, data) => {
//   console.log(data)
// })

/**
 * Promise ES6
    Promise là một đối tượng sẽ trả về một giá trị trong tương lai.
    Promise đơn giản nghĩa là lời hứa, trong tương lai có thể làm hoặc không làm một hành động gì đó
    Promise đại diện cho một xử lí bất đồng bộ: chứa kết quả cũng như các lỗi từ việc xử lý đó

    Một Promise có 3 trạng thái sau:
        pending: trạng thái đang chờ kết quả
        fulfilled: trạng thái xử lý thành công và trả ra kết quả ( được trả về ở .then )
        rejected: lỗi xảy ra ( được trả về ở .catch )

    Bằng Promise ta có thể kết hợp với các hàm xử lý khác để sử dụng kết quả sau khi thực thi xử lý bất đồng bộ mà nó đang đại diện

    https://developer.mozilla.org/vi/docs/Web/JavaScript/Reference/Global_Objects/Promise
 */
///const doSomething = new Promise(excute);


// let isKill = false;
// const killMonster = new Promise(function (resolve, reject) {
//     // Thực thi các tác vụ bất đồng bộ ở đây
//     if (isKill) {
//         return resolve('Yes')
//     }
//     return reject('No') 
// });
// killMonster
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

// const resolveSomething = Promise.resolve(12);
// resolveSomething.then(data => console.log(data))

// const rejectSomething = Promise.reject(false);
// rejectSomething.then(data => console.log(data)).catch(err => console.log(err))

let money = 6000;
const buyBag = new Promise(function (resolve, reject) {
    setTimeout(()=> {
        money > 5000 ? resolve('Buy Gucci bag') : reject('Buy Channel bag');
    }, 1000)
})

const goShopping = new Promise(function (resolve, reject) {
    setTimeout(()=> {
        money > 1000 ? resolve(true) : reject(false);
    }, 2000)
})
// goShopping
//     .then(data => console.log(data))
//     .catch(err => console.log(err))
// console.log('Watch goShopping: ', goShopping);



/** Promise vs Callback */

// Callback Hell
function sum(a, b, callback) {
    let result = a + b;
    if (!Number(result)) return callback(new Error('Can not cal SUM'))
    return callback(result);
};

sum(1, 2, function(data) {
    const result = data;
    console.log(result);
});

sum(1, 2, data => {
    const result = data;
    console.log(result);
});

sum(1, 2, data1 => {
    const result1 = data1;
    sum(result1, result1, data2 => {
        const result2 = data2;
        sum(result2, result2, data3 => {
            const result3 = data3
            sum(result3, result3, data3 => {
                console.log(data3)
            })
        })
    })
});

// Promise
function sum02(a, b) {
    let result = a + b;
    if (!Number(result)) return Promise.reject('Can not cal SUM')
    return Promise.resolve(result);
}
sum02(1, 2)
    .then((result) => {
        return result + result;
    })
    .then(result1 => {
        return result1 + result1;
    })
    .then(result2 => {
        return result2 + result2;
    })
    .then(result3 => {
        console.log(result3)
    })
    .catch((err) => {
        console.log(err)
    });


/**
 * Async/Await ES7
 */