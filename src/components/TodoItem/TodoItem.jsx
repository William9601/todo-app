import './TodoItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faCheck } from '@fortawesome/free-solid-svg-icons';

function TodoItem({
  content,
  id,
  handleDelete,
  toggleCompleted,
  completed,
  editContent,
}) {
  return (
    <div className="todo-item-container">
      <div className={completed ? 'todo-item-completed' : ''}>
        <p>{content}</p>
      </div>
      <div className="icons">
        <button
          className="icon-button"
          style={{ marginRight: 14 }}
          onClick={(e) => toggleCompleted(id)}
        >
          <FontAwesomeIcon icon={faCheck} />
        </button>
        <button
          className="icon-button"
          style={{ marginRight: 14 }}
          onClick={(e) => editContent(content, id)}
        >
          <FontAwesomeIcon icon={faEdit} />
        </button>
        <button
          className="icon-button"
          style={{ color: 'red', marginRight: 14 }}
          onClick={(e) => handleDelete(id)}
        >
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
