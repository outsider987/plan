import React from "react";
interface props {
  toggle: boolean;
}
const Modal: React.FC<props> = ({ toggle, children }) => {
  const t = toggle;
  children;
  if (toggle) {
    return (
      <div
        className="  absolute ease-in
          inset-0
          z-50
          flex
          overflow-hidden
          bg-gray-800 bg-opacity-50"
      >
        {children}
      </div>
    );
  } else {
    return (
      <div
        className=" hidden
          "
      ></div>
    );
  }
};
export default Modal;
