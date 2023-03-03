import styles from './rlv2.module.css';
import { Rlv3 } from '@sbmigrat/rlv3';

/* eslint-disable-next-line */
export interface Rlv2Props {}

export function Rlv2(props: Rlv2Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Rlv2!</h1>
      <Rlv3 />
    </div>
  );
}

export default Rlv2;
