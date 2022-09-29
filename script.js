function getWords(type) {
  // Return words of a given type, or all words if type is 'WORD'
  let words = [
    {type: 'ADJECTIVE', value: 'big'},
    {type: 'ADJECTIVE', value: 'purple'},
    {type: 'ADJECTIVE', value: 'new'},
    {type: 'ADJECTIVE', value: 'interesting'},
    {type: 'ADJECTIVE', value: 'curious'},
    {type: 'ADJECTIVE', value: 'happy'},
    {type: 'ADJECTIVE', value: 'busy'},
    {type: 'ADJECTIVE', value: 'tiny'},
    {type: 'NOUN', value: 'umbrella'},
    {type: 'NOUN', value: 'knee'},
    {type: 'NOUN', value: 'banana'},
    {type: 'NOUN', value: 'platypus'},
    {type: 'NOUN', value: 'cat'},
    {type: 'NOUN', value: 'mouse'},
    {type: 'NOUN', value: 'house'},
    {type: 'VERB', value: 'impressed'},
    {type: 'VERB', value: 'honoured'},
    {type: 'VERB', value: 'saw'},
    {type: 'VERB', value: 'ate'},
    {type: 'VERB', value: 'surprised'},
    {type: 'VERB', value: 'annoyed'},
    {type: 'VERB', value: 'touched'},
    {type: 'VERB', value: 'understood'},
    {type: 'VERB', value: 'taught'},
  ];
  return words.filter(word => type === 'WORD' || word.type === type).map(word => word.value);
}

function randomInt(n) {
  // Return a random number from in [0, n[
  return Math.floor(Math.random()*n);
}

function randomMember(arr) {
  // Return a random member of the array
  return arr[randomInt(arr.length)]
}


let element_noun1 = document.getElementById('noun1');
element_noun1.innerText = randomMember(getWords('WORD'));
element_noun1.style.color = '#330000';
let element_verb = document.getElementById('verb');
element_verb.innerText = randomMember(getWords('WORD'));
element_verb.style.color = '#000000';
let element_adjective = document.getElementById('adjective');
element_adjective.innerText = randomMember(getWords('WORD'));
element_adjective.style.color = '#000066';
let element_noun2 = document.getElementById('noun2');
element_noun2.innerText = randomMember(getWords('WORD'));
element_noun2.style.color = '#000066';
let element_day = document.getElementById('day');
element_day.style.color = '#000000';
element_day.style.backgroundColor = '#ffff99';
let element_night = document.getElementById('night');
element_night.style.color = '#ffff00';
element_night.style.backgroundColor = '#000000';


document.getElementById('day').addEventListener('click', (event) => {
  let element_daymode = document.getElementById('daymode');
  element_daymode.innerText = 'day mode';
  element_daymode.style.color = '#000000';
  element_daymode.style.backgroundColor = '#ffff99';

});

document.getElementById('night').addEventListener('click', (event) => {
  let element_nightmode = document.getElementById('nightmode');
  element_nightmode.innerText = 'night mode';
  element_nightmode.style.color = '#ffff99';
  element_nightmode.style.backgroundColor = '#000000';

});
let element_color = document.getElementById('color');
element_color.style.color = '#ffffcc';
element_color.style.backgroundColor = '#993399';


document.getElementById('img').addEventListener('click', (event) => {
  event.target.setAttribute("src", '<img src="https://codeyourfuture.io/wp-content/uploads/2019/03/cyf_brand.png" width="100" height="100">');
  event.target.style.backgroundColor = '#66ffff';

});

document.getElementById('color').addEventListener('click', (event) => {
  event.target.style.color = '#ffffff';
  event.target.style.backgroundColor = '#660000';

});
