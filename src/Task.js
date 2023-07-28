import { useState } from 'react';

const Apps = () => {
  const [listData, setList] = useState([]);
  const [data, setData] = useState('');
  const adding = (e) => {
    setData(e.target.value);
    console.log(data);
  };

  const addToList = () => {
    setList([...listData, { d: data, id: listData.length }]);
    setData('');
  };
  const onChangeTask = (prop) => {
    let obj = [];
    console.log('button trigger to change', prop);
    for (let i = 0; i < listData.length; i++) {
      if (listData[i].id === prop.id) {
        obj.push(prop);
      } else {
        obj.push(listData[i]);
      }
    }
    setList(obj);
  };
  const onDeleteTask = (id) => {
    console.log('trigger to delete', id);
    setList(listData.filter((val) => val.id !== id));
  };
  console.log('listdata is', listData);
  return (
    <div style={{ display: 'block', margin: '50px' }}>
      <h1> Task Manager </h1>
      <input
        type="text"
        placeholder="Add Task"
        onChange={adding}
        value={data}
      />
      <button onClick={addToList}>Add</button>
      <ul>
        {listData &&
          listData.map((task) => (
            <>
              <Task
                // key={task.id}
                task={task}
                onChange={(props) => onChangeTask(props)}
                onDelete={onDeleteTask}
              />
              {/* <h1>{task.d}</h1> */}
            </>
          ))}
      </ul>
    </div>
  );
};
export default Apps;

function Task({ task, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.d);
  function handleEdit() {
    setIsEditing(true);
  }
  function handleCancel() {
    setIsEditing(false);
    setNewText(task.text);
  }
  function handleSave() {
    onChange({ ...task, d: newText });
    setIsEditing(false);
  }
  function handleDelete() {
    onDelete(task.id);
  }
  function handleChange(e) {
    setNewText(e.target.value);
  }
  return (
    <li>
      {isEditing ? (
        <>
          <input type="text" value={newText} onChange={handleChange} />
          <button onClick={handleSave}> Save </button>
          <button onClick={handleCancel}> Cancel </button>
        </>
      ) : (
        <>
          <span> {task.d} </span>
          <button onClick={handleEdit}> Edit </button>
          <button onClick={handleDelete}> Delete </button>
        </>
      )}
    </li>
  );
}
