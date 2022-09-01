import './styles.css';

const content = document.querySelector('.content');

const counter = document.createElement('div');
counter.classList.add('counter');
counter.classList.add('one');
counter.textContent = 0;
content.appendChild(counter);
