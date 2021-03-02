/** Lập trình bất đồng bộ - Asynchronus */


/**
 * Introduction
    Cả môi trường trình duyệt và Node.js, Javascript đều chạy đơn luồng
    Ta có 2 dòng code theo thứ tự X1, X2:
        - Trong các chương trình đồng bộ, X1 chạy xong thì X2 mới được chạy
        - Trong các chương trình bất đồng bộ, X2 có thể chạy trước trong khi X1 đang thực hiện
 */

// setTimeout(() => {
//     console.log(3);
// }, 3000); 
// console.log(1);
// console.log(2);

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
// function doHomework(subject) {
//     alert(`Starting my ${subject} homework.`);
// }
// doHomework('math');

// function doHomework(subject, callback) {
//     console.log(`Starting my ${subject} homework.`);
//     return callback(subject);
// }
// function finish(subject) {
//     console.log(`Finished my ${subject} homework`)
// };

// doHomework('history', finish)
// doHomework('math', function (subject) {
//     console.log(`Finished my ${subject} homework`);
// });
// doHomework('chemistry', (subject) => {
//     console.log(`Finished my ${subject} homework`);
// })

// document.getElementById('myBtn').addEventListener('click', displayDate)

// function displayDate() {
//     document.getElementById('demo').innerHTML = Date()
// }
    
// fs.readFile('demo.txt', (err, data) => {
//   console.log(data)
// })


// [1,2,3].map(item => console.log(item))

// setTimeout(() => {
//     console.log('Hello')
// }, 3000);
// setTimeout(function () {
//     console.log('Everyone')
// }, 1000);

// Tiến trình đồng bộ - Sync
// console.log(1);
// console.log(2);
// console.log(3);

// Tiến trình bất đồng bộ - Async
// setTimeout(() => {
//     console.log(1);
// }, 3000);
// setTimeout(() => {
//     console.log(2);
// }, 2000);
// setTimeout(() => {
//     console.log(3);
// }, 1000);
// setTimeout(() => {
//     console.log(4);
// }, 500);

// setTimeout(() => {
//     console.log(1);
//     setTimeout(() => {
//         console.log(2);
//         setTimeout(() => {
//             console.log(3);
//             setTimeout(() => {
//                 console.log(4);
//             }, 500);
//         }, 1000);
//     }, 2000);
// }, 3000);

// https://freetuts.net/callback-function-la-gi-callback-trong-javascript-759.html

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


// let isKill = true;
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
// console.log(killMonster)

// const resolveSomething = Promise.resolve(12);
// resolveSomething
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

// const rejectSomething = Promise.reject(false);
// rejectSomething
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

let money = 500;

// const goShopping = new Promise(function (resolve, reject) {
//     setTimeout(()=> {
//         money > 1000 ? resolve(true) : reject(false);
//     }, 2000)
// })

// const goSwimming = function () {
//     return new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             money > 1000 ? resolve(true) : reject(false);
//         }, 2000)
//     })
// };

// goShopping
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

// goSwimming()
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

// console.log('Watch goShopping: ', goShopping);

/** Promise vs Callback */

// Callback Hell
// function sum(a, b, callback) {
//     let result = a + b;
//     if (!Number(result)) return callback(new Error('Can not cal SUM'))
//     return callback(result);
// };

// sum(1, 2, function(data) {
//     console.log(data);
// });

// sum(1, 2, data => {
//     console.log(data);
// });

// sum(1, 2, data1 => {
//     const result1 = data1;
//     sum(result1, result1, data2 => {
//         const result2 = data2;
//         sum(result2, result2, data3 => {
//             const result3 = data3
//             sum(result3, result3, data3 => {
//                 console.log(data3)
//             })
//         })
//     })
// });

// Promise
// function sum02(a, b) {
//     let result = a + b;
//     // if (!Number(result)) return Promise.reject('Can not cal SUM')
//     // return Promise.resolve(result);
//     return new Promise(function (resolve, reject) {
//         !Number(result) ? reject('Can not calculate sum') : resolve(result)
//     })
// };

// sum02(1, 2)
//     .then((result) => {
//         return result + result;// Promise.resolve(result)
//     })
//     .then(result1 => {
//         return result1 + result1; // Promise.resolve(result)
//     })
//     .then(result2 => {
//         return result2 + result2;
//     })
//     .then(result3 => {
//         console.log(result3)
//     })
//     .catch((err) => {
//         console.log(err) // Promise.rejected('Can not cal SUM')
//     });



/** Callback && Promise in Call API */

// Problem
// function getUserByUsername(username) {
// 	setTimeout(function() {
// 		////query database ...
// 		let userId = 1;
// 		console.log('find userId search is  :'+userId);
// 		return userId;
// 	}, 3000);
// }

// function getPostByUserId(userId) {
	
// 	setTimeout(function() {
// 		//query database ...
// 		let postId = 2;
// 		console.log('find postId search is  :'+postId);
// 		return postId;
// 	}, 2000);
// }

// function getPostCommentByPostId(postId) {
// 	setTimeout(function() {
// 		//query database ...
// 		let commentId = 3;
// 		console.log('find commentId search is  :'+commentId);
// 		return commentId;
// 	}, 1000);
// }

let userId = getUserByUsername('Khanh');
let postId = getPostByUserId(userId);
let commentId = getPostCommentByPostId(postId);

// Using Callback
// function getUserByUsername(username, callback) {
// 	setTimeout(function() {
// 		userId = 1;
// 		console.log('find userId search is  :'+userId);
// 		return callback(null, userId);
// 	}, 3000);
// }

// function getPostByUserId(userId, callback) {
	
// 	setTimeout(function() {
// 		var postId = 2;
// 		console.log('find postId search is  :'+postId);
// 		return callback(null, postId);
// 	}, 2000);
// }

// function getCommentByPostId(postId) {
	
// 	setTimeout(function() {
// 		var commentId = 3;
// 		console.log('find commentId search is  :'+commentId);
// 		return commentId;
// 	}, 2000);
// }

// getUserByUsername('Khanh', function(err, userId) {
// 	 getPostByUserId(userId, function(err, postId){
// 		 getCommentByPostId(postId);
// 	 });
// });
 
// Using Promise

var getUserIdByUsername = (username) => {
    return new Promise(function (resolve, reject) {
		setTimeout(function() {
			if(typeof username == 'number') { 
				// .... do something with username
				return reject('error occurred with function getUserIdByUsername!');
			}
			var userId = 1;
			console.log('find user id search is  :'+userId);
			return resolve(userId);
		}, 1000);
	})
}; 

var getPostIdByUserId = (userId) => {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            // .... do something with userId
			if(typeof userId != 'number') { 
				return reject('error occurred with function getPostIdByUserId!');
			}
			var postId = 2;
			console.log('find pos id search is  :'+postId);
			return resolve(postId);
		}, 2000);
	})
};

var getCommentIdByPostId = (postId) => {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            // .... do something with postID
			if(typeof postId != 'number') { 
				return reject('error occurred with function getCommentIdByPostId!');
			}
			var commentId = 3;
			console.log('find comnent id search is  :'+commentId);
			resolve(commentId);
		}, 3000);
	})
};

getUserIdByUsername('Khanh')
    .then((userId) => getPostIdByUserId(userId))
    .then((postId) => getCommentIdByPostId(postId))
    .then((commentId) => {
        // continue promise
        console.log(commentId)
    })
    .catch((error) => {
        console.log(error);
    });

/**
 * Async/Await ES7
 */

//  https://itphutran.com/tu-callback-den-promise-async-await-trong-javascript/