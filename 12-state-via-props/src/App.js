import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';

function App() {
    const [count, setCount] = useState(0);
    const incrementCount = () => {
        setCount(count + 1);
    };
    const resetCount = () => {
        const res = window.confirm('Are you sure?');
        if (!res) {
            return;
        }
        setCount(0);
    };

    return (
        <div className="App">
            <Counter count={count} />
            <Button onClick={incrementCount} text="Click me" />
            <Button onClick={incrementCount} text="Click me" />
            <Button onClick={incrementCount} text="Click me" />
            <Button onClick={resetCount} text="Reset" />
        </div>
    );
}

export default App;
