import React, { useEffect, useState } from 'react';

function Counter() {
  //creating state to manage coun
  const [counter, setCounter] = useState(1);

  //use use effect and when ever count is change it run after 1sec
  useEffect(() => {
    let interval = setInterval(() => {
      setCounter(counter + 1);
    }, 1000);

    //after every execution it clean set interval function and start with stating
    return () => clearInterval(interval);
  }, [counter]);
  console.log('rerendering');
  return <div>{counter}</div>;
}

export default Counter;
