import { useTodoStore } from '../store/useTodoStore';
import TodoItem from './TodoItem';

const TodoList = () => {
    // Subscribe to the actual data so component re-renders on changes
    const todos = useTodoStore((state) => state.todos);
    const filter = useTodoStore((state) => state.filter);
    const searchQuery = useTodoStore((state) => state.searchQuery);
    const getFilteredTodos = useTodoStore((state) => state.getFilteredTodos);

    // These subscriptions above trigger re-render, then getter computes the filtered list
    const filteredTodos = getFilteredTodos();

    console.log('filteredTodos', filteredTodos, { todos, filter, searchQuery });

    if (filteredTodos.length === 0) {
        return (
            <div className="empty-state">
                <div className="empty-state-icon">📝</div>
                <h3>No tasks found</h3>
                <p>Add a new task or adjust your filters</p>
            </div>
        );
    }

    return (
        <div className="todo-list">
            {filteredTodos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </div>
    );
};

export default TodoList;
