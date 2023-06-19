import React from 'react';
import { Button } from 'src/components';

export function App() {
  const onClickHandler = () => {
    alert('Hello World');
  };

  return (
    <div>
      <Button label="My Button" variant="primary" onClick={onClickHandler} />
    </div>
  );
}

export default App;
