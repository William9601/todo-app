import './InputText.css';
import SendButton from '../SendButton/SendButton';

function InputText({ handlePost, content, setContent, editing }) {
  const submitHandler = (e) => {
    e.preventDefault();
    if (!content) return alert('Please enter an item');
    handlePost(content, editing);
    setContent('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="input-text-container">
        <input
          type="text"
          placeholder="Add your task"
          className="text-input"
          onChange={(e) => setContent(e.target.value)}
          value={content}
        />
        <SendButton editing={editing} />
      </div>
    </form>
  );
}

export default InputText;
