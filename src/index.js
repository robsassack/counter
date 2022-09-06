import './styles.css';

const content = document.querySelector('.content');
const settings = document.querySelector('.settings');
const settingsMenu = document.querySelector('.settings-menu');
const incrementSetting = document.querySelector('#inc');
const resetButton = document.querySelector('#reset');
const addCounter = document.querySelector('#add');
const removeCounter = document.querySelector('#remove');

let increment = 1;
let numberOfCounters = 1;

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

  switch (numberOfCounters) {
    case 1:
      counter.classList.add('one');
      removeCounter.disabled = true;
      break;
    case 2:
      counter.classList.add('two');
      content.style.gridTemplateColumns = '1fr 1fr';
      removeCounter.disabled = false;
      break;
    case 3:
      counter.classList.add('three');
      content.style.gridTemplateColumns = '1fr 1fr 1fr';
      break;
    case 4:
      counter.classList.add('four');
      content.style.gridTemplateColumns = '1fr 1fr';
      content.style.gridTemplateRows = '1fr 1fr';
      break;
    case 5:
      counter.classList.add('five');
      content.style.gridTemplateColumns = '1fr 1fr 1fr';
      content.style.gridTemplateRows = '1fr 1fr';
      counter.style.gridRow = '1 / 3';
      counter.style.gridColumn = '3 / 4';
      break;
    case 6:
      counter.classList.add('six');
      content.style.gridTemplateColumns = '1fr 1fr 1fr';
      content.style.gridTemplateRows = '1fr 1fr';
      document.querySelector('.five').style.gridRow = '';
      document.querySelector('.five').style.gridColumn = '';
      addCounter.disabled = true;
      break;
    default:
      counter.classList.add('one');
  }

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

  // button to decrease counter
  decrease.addEventListener('click', () => {
    const value = Number(counterValue.textContent);
    counterValue.textContent = value - increment;
  });

  // button to increase counter
  increase.addEventListener('click', () => {
    const value = Number(counterValue.textContent);
    counterValue.textContent = value + increment;
  });

  numberOfCounters += 1;
}

newCounter();

// add new counter listener
addCounter.addEventListener('click', () => {
  newCounter();
});
