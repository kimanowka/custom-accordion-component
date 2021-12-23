import styles from "./ContentWrapper.module.css";
interface ContentProps {
  children: React.ReactNode;
}
export const ContentWrapper = ({ children }: ContentProps): JSX.Element => {
  return <div className={styles.wrapper}>{children}</div>;
};
