import React, { createContext, useState } from "react";

interface IContext {
  toggleModal: boolean;
  handleToggleModal: (toggleModal: boolean) => void;
}

type ChildrenProp = {
  children: React.ReactNode;
};

export const Context = createContext({} as IContext);

export const ContextProvider: React.FC<ChildrenProp> = ({ children }) => {
  const [toggleModal, setToggleModal] = useState(false);

  const handleToggleModal = () => {
    setToggleModal(!toggleModal);
  };

  return (
    <Context.Provider value={{ handleToggleModal, toggleModal }}>
      {children}
    </Context.Provider>
  );
};