import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';

const texts = [
    'Click me',
    'Hit me plz',
    'Press me',
    'Click one',
    'Click two',
    'Click three',
];

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
            {texts.map((text, index) => {
                return (
                    <Button onClick={incrementCount} text={text} key={index} />
                );
            })}
            <div>
                <Button onClick={resetCount} text="Reset" />
            </div>
        </div>
    );
}

export default App;
