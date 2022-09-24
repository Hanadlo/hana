var fruits, item;


fruits = ['strawberry', 'cherry', 'banana', 'mango'];
let element_list = document.getElementById('list');
fruits.forEach((item) => {
  let new_li = document.createElement('li');
  new_li.innerText = item;

  element_list.appendChild(new_li);
});
