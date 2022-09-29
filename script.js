let element_list = document.getElementById('list');
let new_li = document.createElement('li');
let new_a = document.createElement('a');
new_a.setAttribute("href", 'https://www.google.com/');
new_a.innerText = 'Google';
let new_li2 = document.createElement('li');
let new_a2 = document.createElement('a');
new_a2.setAttribute("href", 'https://www.bbc.co.uk/news');
new_a2.innerText = 'BBC News';
let new_li3 = document.createElement('li');
let new_a3 = document.createElement('a');
new_a3.setAttribute("href", 'https://www.codeyourfuture.io/');
new_a3.innerText = 'Code Your Future';

new_li3.appendChild(new_a3);

new_a2.appendChild(new_li3);

new_li2.appendChild(new_a2);

new_a.appendChild(new_li2);

new_li.appendChild(new_a);

element_list.appendChild(new_li);

