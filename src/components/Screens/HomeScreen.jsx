import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function HomeScreen() {
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        // Появление формы через 5 секунд
        const timer = setTimeout(() => {
            setShowForm(true);
        }, 5000);
        return () => clearTimeout(timer); // Чистим таймер при размонтировании компонента
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="home-screen"
            style={{
                backgroundImage: 'url(https://source.unsplash.com/random/1600x900?fitness)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '60vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                color: 'white',
                textAlign: 'center'
            }}
        >
            <h2>Добро пожаловать в Фитнес Приложение!</h2>
            <p>Найдите свой путь к здоровому телу.</p>

            {/* Форма появляется через 5 секунд */}
            {showForm && (
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.5 }}
                    style={{
                        background: 'rgba(255, 255, 255, 0.8)',
                        padding: '20px',
                        borderRadius: '8px',
                        boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                        width: '300px'
                    }}
                >
                    <h3>Войдите или Зарегистрируйтесь</h3>
                    <form>
                        <div>
                            <label>Email:</label>
                            <input type="email" placeholder="Введите email" required />
                        </div>
                        <div>
                            <label>Пароль:</label>
                            <input type="password" placeholder="Введите пароль" required />
                        </div>
                        <button type="submit" style={{ marginTop: '10px' }}>Войти</button>
                    </form>
                </motion.div>
            )}
        </motion.div>
    );
}