import React, { useState } from 'react';
import './Admin.css';

function Admin() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [machineStatus, setMachineStatus] = useState('In dienst'); // Of 'Buiten dienst'

    const handleLogin = () => {
        // Hier kun je een echte authenticatie implementeren
        if (username === 'admin' && password === '123') { // Dit is slechts een voorbeeld!
            setIsLoggedIn(true);
        } else {
            alert('Verkeerde gebruikersnaam of wachtwoord!');
        }
    };

    const toggleMachineStatus = () => {
        setMachineStatus(prevStatus => prevStatus === 'In dienst' ? 'Buiten dienst' : 'In dienst');
    };

    return (
        <div className="admin-container">
            {!isLoggedIn ? (
                <div className="login-form">
                    <input
                        type="text"
                        placeholder="Gebruikersnaam"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Wachtwoord"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <button onClick={handleLogin}>Inloggen</button>
                </div>
            ) : (
                <button onClick={toggleMachineStatus}>{machineStatus}</button>
            )}
        </div>
    );
}

export default Admin;
