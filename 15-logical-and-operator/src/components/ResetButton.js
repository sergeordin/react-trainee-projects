const buttonStyle = { backgroundColor: '#F08080' };

function ResetButton({ count, setCount, text }) {
    const resetCount = () => {
        const res = window.confirm('Are you sure?');
        if (!res) {
            return;
        }
        setCount(0);
    };

    return (
        <div>
            {!!count && (
                <div>
                    <button style={buttonStyle} onClick={resetCount}>
                        {text}
                    </button>
                </div>
            )}
        </div>
    );
}

export default ResetButton;
