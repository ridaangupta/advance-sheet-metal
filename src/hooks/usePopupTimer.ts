
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const usePopupTimer = (delaySeconds: number = 7) => {
  const [showPopup, setShowPopup] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Don't show popup on contact page
    if (location.pathname === '/contact') {
      return;
    }

    // Check if popup was already shown in this session
    const popupShown = sessionStorage.getItem('contact-popup-shown');
    if (popupShown) {
      return;
    }

    // Set timer to show popup after delay
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, delaySeconds * 1000);

    return () => clearTimeout(timer);
  }, [delaySeconds, location.pathname]);

  const closePopup = () => {
    setShowPopup(false);
    // Mark popup as shown for this session
    sessionStorage.setItem('contact-popup-shown', 'true');
  };

  return { showPopup, closePopup };
};
