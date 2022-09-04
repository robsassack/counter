import './styles.css';

const content = document.querySelector('.content');
const settings = document.querySelector('.settings');
const settingsMenu = document.querySelector('.settings-menu');

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

decrease.addEventListener('click', () => {
  const value = Number(counterValue.textContent);
  counterValue.textContent = value - 1;
});

increase.addEventListener('click', () => {
  const value = Number(counterValue.textContent);
  counterValue.textContent = value + 1;
});

settings.addEventListener('click', () => {
  settingsMenu.classList.toggle('hidden');
});

document.addEventListener('click', (e) => {
  if (e.target !== settings && e.target !== settingsMenu && !settingsMenu.contains(e.target)) {
    settingsMenu.classList.add('hidden');
  }
});
