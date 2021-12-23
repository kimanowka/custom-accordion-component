import React, { useCallback, useState } from "react";

interface AccordionContextProviderProps {
  children: React.ReactNode;
}
interface AccordionContextProps {
  visible: string[];
  setVisible: React.Dispatch<React.SetStateAction<string[]>>;
  toggleVisibleContent: (id: string) => void;
}
export const AccordionContext = React.createContext<AccordionContextProps>({
  visible: ["first"],
  setVisible: () => {},
  toggleVisibleContent: () => {},
});

export const AccordionContextProvider = ({
  children,
}: AccordionContextProviderProps) => {
  const [visible, setVisible] = useState<string[]>(["first"]);

  const toggleVisibleContent = useCallback(
    (id: string) => {
      if (!visible.includes(id)) {
        setVisible([...visible, id]);
      } else {
        setVisible((prev) => prev.filter((item) => item !== id));
      }
    },
    [visible]
  );
  return (
    <AccordionContext.Provider
      value={{ visible, setVisible, toggleVisibleContent }}
    >
      {children}
    </AccordionContext.Provider>
  );
};
