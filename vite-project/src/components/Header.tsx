import { useAuthStore } from '../store/useAuthStore';
import { useThemeStore } from '../store/useThemeStore';
import { FiCheckSquare, FiSun, FiMoon, FiLogOut } from 'react-icons/fi';

const Header = () => {
    const user = useAuthStore((state) => state.user);
    const logout = useAuthStore((state) => state.logout);
    const darkMode = useThemeStore((state) => state.darkMode);
    const toggleDarkMode = useThemeStore((state) => state.toggleDarkMode);

    const initials = user?.name
        ? user.name
            .split(' ')
            .map((w) => w[0])
            .join('')
            .toUpperCase()
            .slice(0, 2)
        : '?';

    return (
        <header className="header">
            <div className="header-left">
                <div className="header-logo">
                    <FiCheckSquare />
                </div>
                <h1 className="header-title">Smart Todo</h1>
            </div>

            <div className="header-right">
                {user && (
                    <div className="header-user">
                        <div className="header-user-avatar">{initials}</div>
                        {user.name}
                    </div>
                )}

                <button
                    id="theme-toggle"
                    className="icon-btn"
                    onClick={toggleDarkMode}
                    title={darkMode ? 'Light mode' : 'Dark mode'}
                >
                    {darkMode ? <FiSun /> : <FiMoon />}
                </button>

                <button
                    id="logout-btn"
                    className="logout-btn"
                    onClick={logout}
                >
                    <FiLogOut />
                    Logout
                </button>
            </div>
        </header>
    );
};

export default Header;
