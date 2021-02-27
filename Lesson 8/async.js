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
    Callback là một hàm sẽ được thực hiện sau khi một hàm khác đã thực hiện xong
     Trong Javascript, functions là objects,do đó nó có thể nhận tham số là function, và cũng có thể trả về một function. 
     Vì vậy bất cứ function nào được truyền vào như một tham số và được gọi sau đó sẽ có tên là callback function.
*/
function doHomework(subject, callback) {
    alert(`Starting my ${subject} homework.`);
    callback();
}
doHomework('math', function() {
    alert('Finished my homework');
});

document.getElementById('myBtn').addEventListener('click', displayDate)
function displayDate() {
    document.getElementById('demo').innerHTML = Date()
}
    
fs.readFile('demo.txt', (err, data) => {
  console.log(data)
})

/**
 * Promise ES6
 */

/**
 * Async/Await ES7
 */