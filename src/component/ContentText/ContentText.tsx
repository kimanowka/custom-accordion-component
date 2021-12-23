import { useContext } from "react";
import { AccordionContext } from "../../Context";
import styles from "./ContentText.module.css";
interface ContentTextProps {
  children: React.ReactNode;
  id: string;
}
export const ContentText = ({ children, id }: ContentTextProps) => {
  const { visible } = useContext(AccordionContext);

  return (
    <div className={visible.includes(id) ? styles.show : styles.hide}>
      {children}
    </div>
  );
};
