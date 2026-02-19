import { useState } from 'react';
import { useTodoStore } from '../store/useTodoStore';
import { FiPlus } from 'react-icons/fi';

const TodoForm = () => {
    const addTodo = useTodoStore((state) => state.addTodo);
    const [text, setText] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const trimmed = text.trim();
        if (trimmed) {
            addTodo(trimmed);
            setText('');
        }
    };

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input
                id="todo-input"
                className="form-input"
                type="text"
                placeholder="What needs to be done?"
                value={text}
                onChange={(e) => setText(e.target.value)}
                autoFocus
            />
            <button
                id="add-todo-btn"
                className="add-btn"
                type="submit"
                disabled={!text.trim()} //text.trim() --> true
            >
                <FiPlus />
                Add
            </button>
        </form>
    );
};

export default TodoForm;
