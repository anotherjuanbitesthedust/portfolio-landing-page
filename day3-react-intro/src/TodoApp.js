import { useState } from 'react';

function TodoApp() {
  // State management
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React components', completed: true },
    { id: 2, text: 'Master useState hook', completed: true },
    { id: 3, text: 'Build interactive apps', completed: false }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [filter, setFilter] = useState('all'); // 'all', 'active', 'completed'
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState('');

  // Add new todo
  const addTodo = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      const newTodo = {
        id: Date.now(),
        text: inputValue.trim(),
        completed: false
      };
      setTodos([...todos, newTodo]);
      setInputValue('');
    }
  };

  // Toggle todo completion
  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // Delete todo
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Start editing
  const startEditing = (id, text) => {
    setEditingId(id);
    setEditingText(text);
  };

  // Save edit
  const saveEdit = (id) => {
    if (editingText.trim()) {
      setTodos(todos.map(todo =>
        todo.id === id ? { ...todo, text: editingText.trim() } : todo
      ));
    }
    setEditingId(null);
    setEditingText('');
  };

  // Cancel edit
  const cancelEdit = () => {
    setEditingId(null);
    setEditingText('');
  };

  // Clear completed todos
  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  // Toggle all todos
  const toggleAll = () => {
    const allCompleted = todos.every(todo => todo.completed);
    setTodos(todos.map(todo => ({ ...todo, completed: !allCompleted })));
  };

  // Filter todos
  const filteredTodos = todos.filter(todo => {
    switch (filter) {
      case 'active':
        return !todo.completed;
      case 'completed':
        return todo.completed;
      default:
        return true;
    }
  });

  // Statistics
  const totalTodos = todos.length;
  const completedTodos = todos.filter(todo => todo.completed).length;
  const activeTodos = totalTodos - completedTodos;

  return (
    <div className="todo-app">
      <h3>Interactive Todo Application</h3>
      
      {/* Statistics */}
      <div className="todo-stats">
        <div className="stat-item">
          <span className="stat-number">{totalTodos}</span>
          <span className="stat-label">Total</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">{activeTodos}</span>
          <span className="stat-label">Active</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">{completedTodos}</span>
          <span className="stat-label">Completed</span>
        </div>
      </div>

      {/* Add Todo Form */}
      <form onSubmit={addTodo} className="todo-form">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="What needs to be done?"
          className="todo-input"
        />
        <button type="submit" className="add-btn">Add Todo</button>
      </form>

      {/* Bulk Actions */}
      {totalTodos > 0 && (
        <div className="bulk-actions">
          <button onClick={toggleAll} className="toggle-all-btn">
            {todos.every(todo => todo.completed) ? 'Mark All Active' : 'Mark All Complete'}
          </button>
          {completedTodos > 0 && (
            <button onClick={clearCompleted} className="clear-completed-btn">
              Clear Completed ({completedTodos})
            </button>
          )}
        </div>
      )}

      {/* Filter Buttons */}
      <div className="filter-buttons">
        <button
          onClick={() => setFilter('all')}
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
        >
          All ({totalTodos})
        </button>
        <button
          onClick={() => setFilter('active')}
          className={`filter-btn ${filter === 'active' ? 'active' : ''}`}
        >
          Active ({activeTodos})
        </button>
        <button
          onClick={() => setFilter('completed')}
          className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
        >
          Completed ({completedTodos})
        </button>
      </div>

      {/* Todo List */}
      <div className="todo-list">
        {filteredTodos.length === 0 ? (
          <div className="empty-state">
            {filter === 'all' && 'No todos yet. Add one above!'}
            {filter === 'active' && 'No active todos. Great job!'}
            {filter === 'completed' && 'No completed todos yet.'}
          </div>
        ) : (
          filteredTodos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              isEditing={editingId === todo.id}
              editingText={editingText}
              onToggle={() => toggleTodo(todo.id)}
              onDelete={() => deleteTodo(todo.id)}
              onStartEdit={() => startEditing(todo.id, todo.text)}
              onSaveEdit={() => saveEdit(todo.id)}
              onCancelEdit={cancelEdit}
              onEditTextChange={(text) => setEditingText(text)}
            />
          ))
        )}
      </div>

      {/* Progress Bar */}
      {totalTodos > 0 && (
        <div className="progress-section">
          <div className="progress-label">
            Progress: {completedTodos} of {totalTodos} completed ({Math.round((completedTodos / totalTodos) * 100)}%)
          </div>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${(completedTodos / totalTodos) * 100}%` }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
}

// Separate TodoItem component for better organization
function TodoItem({
  todo,
  isEditing,
  editingText,
  onToggle,
  onDelete,
  onStartEdit,
  onSaveEdit,
  onCancelEdit,
  onEditTextChange
}) {
  const handleEditKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSaveEdit();
    } else if (e.key === 'Escape') {
      onCancelEdit();
    }
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div className="todo-content">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={onToggle}
          className="todo-checkbox"
        />
        
        {isEditing ? (
          <input
            type="text"
            value={editingText}
            onChange={(e) => onEditTextChange(e.target.value)}
            onKeyDown={handleEditKeyPress}
            onBlur={onSaveEdit}
            className="edit-input"
            autoFocus
          />
        ) : (
          <span
            className="todo-text"
            onDoubleClick={onStartEdit}
            title="Double-click to edit"
          >
            {todo.text}
          </span>
        )}
      </div>

      <div className="todo-actions">
        {isEditing ? (
          <>
            <button onClick={onSaveEdit} className="save-btn">Save</button>
            <button onClick={onCancelEdit} className="cancel-btn">Cancel</button>
          </>
        ) : (
          <>
            <button onClick={onStartEdit} className="edit-btn">Edit</button>
            <button onClick={onDelete} className="delete-btn">Delete</button>
          </>
        )}
      </div>
    </div>
  );
}

export default TodoApp;