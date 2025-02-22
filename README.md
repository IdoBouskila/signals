# SignalsJS  

A basic implementation of signals for studying and fun purposes

## Usage  

### Basic Example  

```ts
const [count, setCount] = createSignal(0);

createEffect(() => {
  console.log(`Count is: ${count()} `);
});

setCount(1); // Logs: "Count is: 1"
```

### DOM Example  

```ts
function setupCounter(button) {
  const [count, setCount] = createSignal(0);

  button.addEventListener('click', () => setCount(count() + 1));

  createEffect(() => {
    button.innerText = `Count is ${count()}`;
  });
}
```

## API  

- `createSignal<T>(value: T) => [get: () => T, set: (newValue: T) => void]`:
Creates a reactive signal.  

- `createEffect(callback: () => void)`:
Runs a callback whenever the signal it depends on changes.
