function TodoSelect({ setSelect }) {
  const selectHandler = (e) => {
    setSelect(e.target.value);
  };

  return (
    <div className="todo-select-container">
      <select onChange={selectHandler} name="select-todos">
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
    </div>
  );
}

export default TodoSelect;
