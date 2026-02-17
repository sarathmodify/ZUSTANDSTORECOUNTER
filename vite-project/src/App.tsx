import {counterStore} from '../src/store/useCounterStore';

function App() {
  
  const countValue = counterStore((state) => state.count);  

  console.log('countValue: ', countValue);

  return (
   <div>
     <h1>counter: {countValue}</h1>
     <button onClick={counterStore.getState().increment}>
        Increment
     </button>
     <button onClick={counterStore.getState().decrement}>
        Decrement
     </button>
     <button onClick={counterStore.getState().reset}>reset</button>
   </div>
  )
}

export default App
