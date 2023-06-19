// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import { Button } from 'src/components';
import NxWelcome from './nx-welcome';
import React from 'react';

export function App() {
  const onClickHandler = () => {
    alert('Hello World');
  };

  return (
    <div>
      <Button label="My Button" onClick={onClickHandler} />
      <NxWelcome title="nx-test2" />
    </div>
  );
}

export default App;
