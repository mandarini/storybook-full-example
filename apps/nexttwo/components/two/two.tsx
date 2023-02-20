import styles from './two.module.css';

/* eslint-disable-next-line */
export interface TwoProps {}

export function Two(props: TwoProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Two!</h1>
    </div>
  );
}

export default Two;
