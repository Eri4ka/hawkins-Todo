import { useState, useEffect, useRef, createRef } from 'react';

export const usePopup = () => {
  const [open, setOpen] = useState(false);
  const popupRef = createRef();
  const triggerRef = useRef();

  useEffect(() => {
    const listener = (e) => {
      if (triggerRef.current.contains(e.target)) {
        setOpen(true);
      }
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('click', listener);

    return () => {
      document.removeEventListener('click', listener);
    };
  }, [popupRef]);

  return { open, setOpen, popupRef, triggerRef };
};
