import { useState } from 'react';
import UserContext from './context/UserContext';
import User from './components/User';
import './App.css';
import ChangeUser from './components/ChangeUser';

function App() {
    const [user, setUser] = useState('Sergey');

    return (
        <UserContext.Provider value={{ userName: user, setUserName: setUser }}>
            <div className="App">
                <User />
                <ChangeUser />
            </div>
        </UserContext.Provider>
    );
}

export default App;
