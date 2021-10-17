import './SendButton.css';

function SendButton({ editing }) {
  return (
    <div>
      <button className="send-button-container">
        {editing ? 'Update' : 'Add'}
      </button>
    </div>
  );
}

export default SendButton;
