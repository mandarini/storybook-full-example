// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import { Rlv1 } from '@sbmigrat/rlv1';

import NxWelcome from './nx-welcome';

export function App() {
  return (
    <>
      <NxWelcome title="rv1" />
      <Rlv1 />
      <div />
    </>
  );
}

export default App;
