import styles from './styles.module.scss';
export const Main = ({ children }) => {
  return <main className={styles.root}>{children}</main>;
};
