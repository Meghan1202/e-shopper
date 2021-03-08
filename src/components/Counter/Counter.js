import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <p>
        Click Me
        {count}
      </p>
      <button type="button" onClick={() => setCount(count + 1)}>Click Me</button>
    </>
  );
};

export default Counter;
