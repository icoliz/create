'use strict';

const title = document.querySelector('.js_title');
const input = document.querySelector('.js_input');
const btn = document.querySelector('.js_btn');

let userInput = '';

input.addEventListener('keyup', () => {
  userInput = input.value;
});

btn.addEventListener('click', (ev) => {
  ev.preventDefault();
  title.innerHTML = userInput;
  userInput = '';
  input.value = '';
});
