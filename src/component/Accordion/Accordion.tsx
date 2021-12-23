import { AccordionContextProvider } from "../../Context";
import { AccordionWrapper } from "../AccordionWrapper/AccordionWrapper";

import styles from "./Accordion.module.css";

interface AccordionProps {
  children: React.ReactNode;
}
export const Accordion = ({ children }: AccordionProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <AccordionContextProvider>
        <AccordionWrapper>{children}</AccordionWrapper>
      </AccordionContextProvider>
    </div>
  );
};
