const avatar = 'https://kpopthing.com/wp-content/uploads/2020/01/thumbnail.jpg';
const userName = 'Khanh Nguyen';
const news = [
    { title: 'Title 01', content: 'Nice to meet you !', avatar, userName, comments: ['Hello !!!','Good Morning !'] }
]

function createDom(){
    let html = '';
    for (let i = 0; i < news.length; i++){
        let comments = createComment(i);

        html += 
            `
            <div id="${i}" class="post-container">
                <p>${news[i].userName}</p>
                <img src="${news[i].avatar}" style="width: 120px;" alt="alternatetext">
                <h3>${news[i].title}</h3>
                <p>${news[i].content}<p>
                <button onClick="update(${i})">Update</button>
                <button onClick="remove(${i})">Remove</button>
                <div>
                    <p>Comment: </p>
                    <input type="text" id="comment-${i}" onkeyup="addComment(${i})" >
                   
                    <ul id="${i}-commentList">
                        ${comments}
                    </ul>
                    <button id="btn-${i}" onClick="hideComment(${i})">Hide</button>
                </div>
                 
            </div> 
            `;
        }
    document.getElementById("newFeeds").innerHTML = html;
    
};


function createComment(param) {
    let html = '';
    for (let i = 0; i <  news[param].comments.length; i++) {
        html += `<p>${news[param].comments[i]}</p>`
    }
    return html;
};

createDom();

function hideComment(param) {
    let x = document.getElementById(`${param}-commentList`);
    if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById(`btn-${param}`).innerHTML = 'Hide';
    } else {
        x.style.display = "none";
        document.getElementById(`btn-${param}`).innerHTML = `Show ${news[param].comments.length} comments`;
    }
}

document.getElementById("title").addEventListener('keyup', function (event) {
    if (event.key == 'Enter') {
        event.preventDefault();
        add();
    }
});
document.getElementById("content").addEventListener('keyup', function (event) {
    if (event.key == 'Enter') {
        event.preventDefault();
        add();
    }
});


function add() {
        let title = document.getElementById('title').value;
        title = title.replace( /(<([^>]+)>)/ig, '');

        let content = document.getElementById('content').value;
        content = content.replace( /(<([^>]+)>)/ig, '');

        let comments = [];
        if(!title || !content ) {
            alert('Please fill all');
            return;
        }
        news.push({title,content,avatar,userName,comments});
        createDom();
};
function remove(id) {
    news.splice(id, 1);
    createDom();
};
function update(id) {
        let title = document.getElementById('title').value;
        title = title.replace( /(<([^>]+)>)/ig, '');

        let content = document.getElementById('content').value;
        content = content.replace( /(<([^>]+)>)/ig, '');

        if(!title || !content ) {
            alert('Please fill all');
            return;
        };

        news[id].title = title ;
        news[id].content = content ;

        createDom();
};

function addComment(param) {
    let value = document.getElementById(`comment-${param}`).value;
    if (event.key == 'Enter') {
        event.preventDefault();
        news[param].comments.push(value);
        
        let html = createComment(param);
        document.getElementById(`${param}-commentList`).innerHTML = html;

    }
    
}


function search() {
    let value = document.getElementById('search').value.toLowerCase().trim();
    let searchResult = [];
    // console.log('xx:',value.trim(), 'length', value.trim().length)
    for (let i = 0; i < news.length; i++) {
        if (news[i].title.toLowerCase().includes(value) && value.trim().length) {
            // console.log(value.length);
            console.log('ok');
            searchResult.push(news[i])
        }
    }
    console.log(searchResult)
    let html = '';
    for (let i = 0; i < searchResult.length; i++){
        let comments = createComment(i);

        html += 
            `
            <div id="${i}" class="post-container">
                <p>${searchResult[i].userName}</p>
                <img src="${searchResult[i].avatar}" style="width: 120px;" alt="alternatetext">
                <h3>${searchResult[i].title}</h3>
                <p>${searchResult[i].content}<p>
                <button onClick="update(${i})">Update</button>
                <button onClick="remove(${i})">Remove</button>
                <div>
                    <p>Comment: </p>
                    <input type="text" id="comment-${i}" onkeyup="addComment(${i})" >
                   
                    <ul id="${i}-commentList">
                        ${comments}
                    </ul>
                    <button id="btn-${i}" onClick="hideComment(${i})">Hide</button>
                </div>
                 
            </div> 
            `;
        }
    document.getElementById("newFeeds").innerHTML = html;

    if (searchResult.length === 0) {
        createDom();
    }
}
// https://www.w3schools.com/css/css3_shadows_box.asp