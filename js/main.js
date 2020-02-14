let addNames = (names) => {
    let result = document.getElementById('result'),
        list = document.createElement('ol'),
        nameLi;
    result.appendChild(list);
    if(!names) {
        return;
    }
    for(let item of names) {
        nameLi = document.createElement('li');
        nameLi.innerHTML = item.name;
        list.appendChild(nameLi);
    }
};
let loadData = (evt) => {
    evt.preventDefault();
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'data.json', true);
    xhr.onload = (evt) => {
        let names = JSON.parse(evt.target.responseText);
        addNames(names);
    };
    xhr.send();
};
let fetchBtn = document.getElementById('fetch-btn');
fetchBtn.addEventListener('click', loadData);
