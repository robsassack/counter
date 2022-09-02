import './styles.css';

const content = document.querySelector('.content');

const counter = document.createElement('div');
counter.classList.add('counter');
counter.classList.add('one');

const counterValue = document.createElement('span');
counterValue.textContent = 0;
counter.appendChild(counterValue);

const decrease = document.createElement('div');
decrease.classList.add('decrease');
decrease.textContent = '−';
counter.appendChild(decrease);

const increase = document.createElement('div');
increase.classList.add('increase');
increase.textContent = '+';
counter.appendChild(increase);

content.appendChild(counter);
