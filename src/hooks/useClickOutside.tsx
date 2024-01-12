import { useEffect, useRef, useState, RefObject } from 'react';

const useOutsideClick = (initialIsVisible: boolean, parentRef: RefObject<HTMLElement>) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(initialIsVisible);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      ref.current && // Checks if the ref has a current property. 
      !ref.current.contains(event.target as Node) && // the element that triggered the click, is not contained within the ref element
      !(parentRef.current && parentRef.current.contains(event.target as Node)) && // Check if the event target is not the parent element
      event.target !== ref.current // Check if the event target is not the ref element
    ) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return { ref, isVisible, setIsVisible };
};

export default useOutsideClick;
