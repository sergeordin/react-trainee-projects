import { useContext } from 'react';
import UserContext from '../context/UserContext';

function ChangeUser() {
    const { userName, setUserName } = useContext(UserContext);
    function handleInputChange(text) {
        setUserName(text);
    }

    return (
        <>
            <input
                type="text"
                value={userName}
                onChange={(e) => {
                    handleInputChange(e.target.value, 'username');
                }}
            />
            <button
                onClick={() =>
                    setUserName(userName === 'Sergey' ? 'Alice' : 'Sergey')
                }
            >
                Change User
            </button>
        </>
    );
}

export default ChangeUser;
