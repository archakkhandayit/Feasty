import React, { useEffect } from "react";
import { X } from 'lucide-react';

/*
  This is a very simple, unstyled modal/dialog component to make 
  the MyOrders page work without an external library.
  It uses the native <dialog> element.
*/

// Dialog Component: The main wrapper
export const Dialog = ({ open, onOpenChange, children }) => {
  const dialogRef = React.useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open) {
      if (!dialog.open) {
        dialog.showModal();
      }
    } else {
      if (dialog.open) {
        dialog.close();
      }
    }
  }, [open]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleClose = () => {
      onOpenChange(false);
    };
    
    const handleClick = (event) => {
        // Close if backdrop is clicked
        if (event.target === dialog) {
            handleClose();
        }
    }

    dialog.addEventListener("close", handleClose);
    dialog.addEventListener("click", handleClick);

    return () => {
      dialog.removeEventListener("close", handleClose);
      dialog.removeEventListener("click", handleClick);
    };
  }, [onOpenChange]);

  return (
    <dialog ref={dialogRef} className="p-0 bg-transparent backdrop:bg-black/50 rounded-lg shadow-xl">
      {/* We pass the onOpenChange to children so they can close the dialog */}
      {React.Children.map(children, child =>
        React.cloneElement(child, { onOpenChange })
      )}
    </dialog>
  );
};

// DialogContent: The container for the modal content
export const DialogContent = ({ className, children, onOpenChange }) => {
  return (
    <div className={`relative bg-white p-6 rounded-lg w-full ${className}`}>
      <button 
        onClick={() => onOpenChange(false)}
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        aria-label="Close"
      >
        <X size={20} />
      </button>
      {children}
    </div>
  );
};

// DialogHeader: Contains Title and Description
export const DialogHeader = ({ className, children }) => {
  return <div className={`mb-4 ${className}`}>{children}</div>;
};

// DialogTitle: The title of the modal
export const DialogTitle = ({ className, children }) => {
  return <h2 className={`text-xl font-semibold text-gray-900 ${className}`}>{children}</h2>;
};