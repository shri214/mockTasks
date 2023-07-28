import { useState } from 'react';

const Birds = () => {

  const [listData, setList] = useState([]);
  const [data, setData] = useState('');
  const adding = (e) => {
    setData(e.target.value);
    console.log(data);
  };

  const addToList = () => {
    setList([...listData, { bird: data, id: listData.length }]);
    setData('');
  };

  return (
    <div style={{ display: 'block', margin: '50px' }}>
      <h1> Birds list </h1>
      <input
        type="text"
        placeholder="Add Task"
        onChange={adding}
        value={data}
      />
      <button onClick={addToList}>Add</button>

      <ul>{listData && listData.map((val) => <Listing lists={val} />)}</ul>
    </div>
  );
};
export default Birds;

const Listing = ({ lists }) => {
  const [count, setCount] = useState(1);
  return (
    <li>
      <div>
        <h3>{lists.bird}</h3>
        <div style={{ display: 'flex' }}>
          <h1>Likes {count}</h1>
          <button onClick={() => setCount(count + 1)} style={{ width: '30px' }}>
            +
          </button>
        </div>
      </div>
    </li>
  );
};
