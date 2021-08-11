import React from "react";
import Overlay from "./styled";

type Props = {
  isOpen: boolean;
  children: React.ReactNode;
};

const Modal: React.FC<Props> = ({ isOpen, children }) => {
  return isOpen ? <Overlay>
      <div className="modalContent">
        {children}
      </div>
  </Overlay> : null;
};

export default Modal;
