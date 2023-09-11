import React from 'react';
import { Button } from 'src/components';

function App() {
  const onClickHandler = () => 's';

  return (
    <div>
      <Button label="My Button" variant="primary" onClick={onClickHandler} />
      HELLO WORLD
    </div>
  );
}

export default App;
