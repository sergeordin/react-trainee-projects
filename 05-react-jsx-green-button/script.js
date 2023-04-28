const App = ({ initialButtonText, initialClassesList }) => {
    const [buttonText, setButtonText] = React.useState(initialButtonText);
    const [classesList, setClassesList] = React.useState(initialClassesList);

    const onButtonClick = () => {
        setButtonText('Hello from React');
        setClassesList('green-btn');
    };

    return (
        <div className="app">
            <button className={classesList} onClick={onButtonClick}>
                {buttonText}
            </button>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App initialButtonText="Click me" initialClassesList="" />);
