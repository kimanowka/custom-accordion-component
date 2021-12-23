import styles from "./Header.module.css";
interface HeaderProps {
  children: React.ReactNode;
}

export const Header = ({ children }: HeaderProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <h3>{children}</h3>
    </div>
  );
};
