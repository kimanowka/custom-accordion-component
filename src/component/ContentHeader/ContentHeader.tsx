import { useContext } from "react";
import { AccordionContext } from "../../Context";
import styles from "./ContentHeader.module.css";
interface ContentHeaderProps {
  children: React.ReactNode;
  id: string;
}
export const ContentHeader = ({ children, id }: ContentHeaderProps) => {
  const { toggleVisibleContent, visible } = useContext(AccordionContext);

  return (
    <div className={styles.wrapper}>
      <h3>{children}</h3>
      <button
        type="button"
        className={styles.button}
        onClick={() => {
          toggleVisibleContent(id);
        }}
      >
        {visible.includes(id) ? "-" : "+"}
      </button>
    </div>
  );
};
