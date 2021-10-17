import './ListModal.css';
import InputText from '../InputText/InputText';
import TodoItem from '../TodoItem/TodoItem';
import TodoSelect from '../TodoSelect/TodoSelect';
import { useState, useEffect } from 'react';
import {
  getItems,
  deleteItem,
  postItem,
  getItem,
  editItem,
} from '../../services/apiServices';

function ListModal() {
  const [items, setItems] = useState([]);
  const [select, setSelect] = useState('all');
  const [filteredItems, setFilteredItems] = useState([]);
  const [content, setContent] = useState('');
  const [editing, setEditing] = useState(null);

  useEffect(() => {
    getItems().then((res) => setItems(res.data));
  }, []);

  useEffect(() => {
    const handleSelectFilter = () => {
      if (select === 'completed') {
        setFilteredItems(items.filter((el) => el.completed === true));
      } else if (select === 'uncompleted') {
        setFilteredItems(items.filter((el) => el.completed === false));
      } else setFilteredItems(items);
    };
    handleSelectFilter();
  }, [items, select]);

  const handlePost = (content, id) => {
    if (editing === null)
      postItem(content).then((res) => setItems([...items, res.data]));
    else {
      editMessage(id);
      setEditing(null);
    }
  };

  const handleDelete = (id) => {
    deleteItem(id).then((res) =>
      res.status === 200
        ? setItems(items.filter((el) => el.id !== id))
        : alert('Error deleting the item')
    );
  };

  const toggleCompleted = async (id) => {
    const itemFetched = await getItem(id);
    const updatedItem = {
      ...itemFetched.data,
      completed: !itemFetched.data.completed,
    };
    editItem(id, updatedItem).then((res) => {
      setItems(
        items.map((el) => {
          return el.id === id ? { ...el, completed: res.data.completed } : el;
        })
      );
    });
  };

  const editContent = async (content, id) => {
    setContent(content);
    setEditing(id);
  };

  const editMessage = async (id) => {
    const itemFetched = await getItem(id);
    const updatedItem = {
      ...itemFetched.data,
      content: content,
    };
    editItem(id, updatedItem).then((res) => {
      setItems(
        items.map((el) => {
          return el.id === id ? { ...el, content: res.data.content } : el;
        })
      );
    });
  };

  return (
    <div className="list-modal-container">
      <section className="list-modal-header">
        <h2>To-do 20th Dec 2021</h2>
        <TodoSelect setSelect={setSelect} />
      </section>
      <section className="todo-list-container">
        {filteredItems.map((el) => (
          <TodoItem
            key={el.id}
            content={el.content}
            id={el.id}
            handleDelete={handleDelete}
            toggleCompleted={toggleCompleted}
            completed={el.completed}
            editContent={editContent}
          />
        ))}
      </section>
      <section>
        <InputText
          handlePost={handlePost}
          content={content}
          setContent={setContent}
          editing={editing}
        />
      </section>
    </div>
  );
}

export default ListModal;
