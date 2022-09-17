document.getElementById('noun').addEventListener('click', (event) => {
  let element_button = document.getElementById('button');
  element_button.innerText = 'Happy';
  let new_a = document.createElement('a');
  new_a.innerText = 'coding change my life';

  element_button.appendChild(new_a);

});
