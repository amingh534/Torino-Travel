"use client";

import { useEffect, useState } from "react";

function ModalContainer({ children, isOpen, setIsOpen }) {
  const [isHide, setIsHide] = useState(false);
  useEffect(() => {
    if (isOpen) {
      setIsHide(false); 
    }
  }, [isOpen]);
  
  if (!isOpen) return;
  const handleBackdropClick = () => {
    setIsHide(true);
    setTimeout(() => setIsOpen(false), 300); 
  };
  return (
    <>
      {!isHide && (
        <div
          aria-modal="true"
          onClick={handleBackdropClick}
          className="fixed top-0 right-0 w-svw h-svh z-10 backdrop-blur-sm"
        >
          <div className="w-full h-full flex items-center justify-center">
            <div onClick={(e) => e.stopPropagation()} className="min-w-10 min-h-10">{children}</div>
          </div>
        </div>
      )}
    </>
  );
}

export default ModalContainer;
