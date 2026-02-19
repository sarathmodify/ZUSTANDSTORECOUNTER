import { useAuthStore } from './store/useAuthStore';
import { useThemeStore } from './store/useThemeStore';
import LoginPage from './components/LoginPage';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import SearchBar from './components/SearchBar';
import FilterBar from './components/FilterBar';
import StatsPanel from './components/StatsPanel';

function App() {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const darkMode = useThemeStore((state) => state.darkMode);

  // Show login page if not authenticated
  if (!isLoggedIn) {
    return (
      <div className={`app-container ${darkMode ? 'dark' : ''}`}>
        <LoginPage />
      </div>
    );
  }

  return (
    <div className={`app-container ${darkMode ? 'dark' : ''}`}>
      <div className="dashboard">
        <Header />
        <StatsPanel />
        <TodoForm />
        <div className="toolbar">
          <SearchBar />
          <FilterBar />
        </div>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
