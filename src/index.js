import './styles.css';

const content = document.querySelector('.content');
const settings = document.querySelector('.settings');
const settingsMenu = document.querySelector('.settings-menu');
const incrementSetting = document.querySelector('#inc');
const resetButton = document.querySelector('#reset');

let increment = 1;

// open settings menu
settings.addEventListener('click', () => {
  settingsMenu.classList.toggle('hidden');
});

// close settings menu
document.addEventListener('click', (e) => {
  if (e.target !== settings && e.target !== settingsMenu && !settingsMenu.contains(e.target)) {
    settingsMenu.classList.add('hidden');
  }
});

// set counting increment
incrementSetting.addEventListener('change', (e) => {
  increment = Number(e.target.value);
});

// reset counters
resetButton.addEventListener('click', () => {
  const counters = document.querySelectorAll('.counter');
  counters.forEach((counter) => {
    const counterValue = counter.querySelector('.counter-value');
    counterValue.textContent = 0;
  });
});

function newCounter() {
  const counter = document.createElement('div');
  counter.classList.add('counter');
  counter.classList.add('one');

  const counterValue = document.createElement('span');
  counterValue.classList.add('counter-value');
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
    counterValue.textContent = value - increment;
  });

  increase.addEventListener('click', () => {
    const value = Number(counterValue.textContent);
    counterValue.textContent = value + increment;
  });
}

newCounter();
