import { useState } from 'react';
import { useTodoStore, type Todo } from '../store/useTodoStore';
import { FiEdit2, FiTrash2, FiCheck, FiX } from 'react-icons/fi';

interface TodoItemProps {
    todo: Todo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
    const toggleTodo = useTodoStore((state) => state.toggleTodo);
    const deleteTodo = useTodoStore((state) => state.deleteTodo);
    const editTodo = useTodoStore((state) => state.editTodo);

    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.text);

    const handleSave = () => {
        const trimmed = editText.trim();
        if (trimmed && trimmed !== todo.text) {
            editTodo(todo.id, trimmed);
        }
        setIsEditing(false);
    };

    const handleCancel = () => {
        setEditText(todo.text);
        setIsEditing(false);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') handleSave();
        if (e.key === 'Escape') handleCancel();
    };

    return (
        <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            {/* Checkbox */}
            <label className="todo-checkbox">
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                />
                <span className="checkmark">
                    {todo.completed && <FiCheck />}
                </span>
            </label>

            {/* Text or Edit Input */}
            {isEditing ? (
                <input
                    className="todo-edit-input"
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    onKeyDown={handleKeyDown}
                    onBlur={handleSave}
                    autoFocus
                />
            ) : (
                <span className="todo-text">{todo.text}</span>
            )}

            {/* Action Buttons */}
            <div className="todo-actions">
                {isEditing ? (
                    <>
                        <button
                            className="todo-action-btn save"
                            onClick={handleSave}
                            title="Save"
                        >
                            <FiCheck />
                        </button>
                        <button
                            className="todo-action-btn delete"
                            onClick={handleCancel}
                            title="Cancel"
                        >
                            <FiX />
                        </button>
                    </>
                ) : (
                    <>
                        <button
                            className="todo-action-btn"
                            onClick={() => {
                                setEditText(todo.text);
                                setIsEditing(true);
                            }}
                            title="Edit"
                        >
                            <FiEdit2 />
                        </button>
                        <button
                            className="todo-action-btn delete"
                            onClick={() => deleteTodo(todo.id)}
                            title="Delete"
                        >
                            <FiTrash2 />
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default TodoItem;
