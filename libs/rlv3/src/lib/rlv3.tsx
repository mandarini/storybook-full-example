import styles from './rlv3.module.css';
import { UiRlv4 } from '@sbmigrat/ui/rlv4';

/* eslint-disable-next-line */
export interface Rlv3Props {}

export function Rlv3(props: Rlv3Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Rlv3!</h1>
      <UiRlv4 />
    </div>
  );
}

export default Rlv3;
