import { useTodoStore } from '../store/useTodoStore';
import { FiCheckCircle, FiClock, FiList, FiTrendingUp } from 'react-icons/fi';

const StatsPanel = () => {
    // Subscribe to todos so this component re-renders when tasks change
    useTodoStore((state) => state.todos);
    const getStats = useTodoStore((state) => state.getStats);
    const { total, completed, active, completionPercent } = getStats();

    return (
        <div className="stats-panel">
            <div className="stat-card">
                <div className="stat-value">{total}</div>
                <div className="stat-label">
                    <FiList style={{ marginRight: 4, verticalAlign: 'middle' }} />
                    Total
                </div>
            </div>

            <div className="stat-card">
                <div className="stat-value">{completed}</div>
                <div className="stat-label">
                    <FiCheckCircle style={{ marginRight: 4, verticalAlign: 'middle' }} />
                    Done
                </div>
            </div>

            <div className="stat-card">
                <div className="stat-value">{active}</div>
                <div className="stat-label">
                    <FiClock style={{ marginRight: 4, verticalAlign: 'middle' }} />
                    Active
                </div>
            </div>

            <div className="stat-card">
                <div className="stat-value">{completionPercent}%</div>
                <div className="stat-label">
                    <FiTrendingUp style={{ marginRight: 4, verticalAlign: 'middle' }} />
                    Progress
                </div>
                <div className="progress-bar-wrapper">
                    <div
                        className="progress-bar-fill"
                        style={{ width: `${completionPercent}%` }}
                    />
                </div>
            </div>
        </div>
    );
};

export default StatsPanel;
