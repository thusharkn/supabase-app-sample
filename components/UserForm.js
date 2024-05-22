// components/UserForm.js
import { useState } from 'react';
import { supabase } from '../supabaseClient';

export default function UserForm() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { data, error } = await supabase
            .from('users')
            .insert([{ login, password, transaction_id: transactionId }]);

        if (error) {
            setMessage(`Error: ${error.message}`);
        } else {
            setMessage('Data inserted successfully!');
            setLogin('');
            setPassword('');
            setTransactionId('');
        }
    };

    return (
        <div>
            <h2>Enter User Data</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="login">Login:</label>
                    <input
                        type="text"
                        id="login"
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="transaction_id">Transaction ID:</label>
                    <input
                        type="text"
                        id="transaction_id"
                        value={transactionId}
                        onChange={(e) => setTransactionId(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}
