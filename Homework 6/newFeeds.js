const avatar = 'https://kpopthing.com/wp-content/uploads/2020/01/thumbnail.jpg';
const userName = 'Khanh Nguyen'
const news = [
    { title: 'Title 01', content: 'Nice to meet you !', avatar, userName }
]

function createDom(){
    let html = '';
        for( let i = 0; i < news.length; i++){
        html += 
            `
            <div id="${i}" 
                style="display:flex; flex-direction: column; padding: 10px;
                margin: 20px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
            >
                <p>${news[i].userName}</p>
                <img src="${news[i].avatar}" style="width: 120px;" alt="alternatetext">
                <h3>${news[i].title}</h3>
                <p>${news[i].content}<p>
                <button onClick="update(${i})">Update</button>
                <button onClick="remove(${i})">Remove</button>
            </div> 
            `;
        }
        document.getElementById("newFeeds").innerHTML = html;
};

createDom();

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

        if(!title || !content ) {
            alert('Please fill all');
            return;
        }
        news.push({title,content,avatar,userName});
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




// https://www.w3schools.com/css/css3_shadows_box.asp