import styles from "./AccordionWrapper.module.css";

interface AccordionWrapperProps {
  children: React.ReactNode;
}
export const AccordionWrapper = ({
  children,
}: AccordionWrapperProps): JSX.Element => {
  return <div className={styles.wrapper}>{children}</div>;
};
