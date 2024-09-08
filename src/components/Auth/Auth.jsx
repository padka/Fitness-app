import React, {useState, useContext} from "react";
import {AuthContext} from "./AuthContext"


export default function({onLogin}) {
    const {login} = useContext(AuthContext); // Доставем функцию из контекста
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const[ loading, setLoading] = useState('')
//Функция которая срабывает при отправке формы
    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true); // Показываем загрузку

        try {
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password
                })
            });

            if (!response.ok) {
                throw new Error('Ошибка при авторизации');
            }
            const data = await response.json();
            login(data.token);//Используем login из контекста
        } catch (err) {
            setError('Неверный логин или пароль');
        }

    }
    return (
        <div className="auth-container">
            <h2>Вход</h2>
            <form onSubmit={handleLogin} className="auth-form">
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Пароль:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <p className="error-message">{error}</p>}
                {loading ? <p>Загрузка...</p> : <button type="submit">Войти</button>}
            </form>
        </div>
    );
}


