import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
// @ts-ignore
import Counter from './components/counter'

const App: React.FC = (props: any) => {
  const [title, setTitle] = useState('Primer titulo')
  // const countdown = useCountdown(() => Date.now() + 10000);
  useEffect(() => {
    setTimeout(() => {
      setTitle('Otro titulo')
    }, 2500);
  }, [])
  console.log({props})
  return (
    <div className="App">
      <div>
        <Counter title={title}></Counter>
      </div>
      <div>
        {JSON.stringify({props})}
      </div>
    </div>
  );
}

export default App;
