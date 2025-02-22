import './style.css';
import viteLogo from '/vite.svg';
import typescriptLogo from '/typescript.svg';
import { createSignal, createEffect } from './signals.ts';

function setupCounter(element: HTMLButtonElement) {
  const [count, setCount] = createSignal<number>(0);
  
  element.addEventListener('click', () => setCount(count() + 1))

  createEffect(() => {
		element.innerHTML = `Count is ${count()}`;
  });
}

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>

    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>

    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);
