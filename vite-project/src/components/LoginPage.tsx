import { useState } from 'react';
import { useAuthStore } from '../store/useAuthStore';
import { FiCheckSquare } from 'react-icons/fi';

const LoginPage = () => {
    const login = useAuthStore((state) => state.login);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (name.trim() && email.trim()) {
            login(name.trim(), email.trim());
        }
    };

    console.log('name: ', name.trim());
    console.log('email: ', email.trim());

    const isDisabled = !name.trim() || !email.trim();

    return (
        <div className="login-wrapper">
            <div className="login-card">
                <div className="login-icon">
                    <FiCheckSquare />
                </div>
                <h1>Smart Todo</h1>
                <p>Sign in to manage your tasks</p>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="login-name">Your Name</label>
                        <input
                            id="login-name"
                            className="form-input"
                            type="text"
                            placeholder="e.g. John Doe"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            autoFocus
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="login-email">Email Address</label>
                        <input
                            id="login-email"
                            className="form-input"
                            type="email"
                            placeholder="e.g. john@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <button
                        id="login-submit"
                        className="login-btn"
                        type="submit"
                        disabled={isDisabled}
                    >
                        Get Started →
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
