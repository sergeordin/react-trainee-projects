import './App.css';
import Info from './components/Info';

function App() {
    return (
        <div className="App">
            <Info />
            <div className="info">
                <h1>App Component heading</h1>
                <h2>Heading in the app component</h2>
                <button className="my-button">App Component button</button>
            </div>
        </div>
    );
}

export default App;
