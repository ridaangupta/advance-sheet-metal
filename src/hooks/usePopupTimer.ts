
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const usePopupTimer = (delaySeconds: number = 4) => {
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

    // Check if timer has already been started
    let startTime = sessionStorage.getItem('popup-timer-start');
    
    if (!startTime) {
      // First time visiting - start the timer
      const now = Date.now();
      sessionStorage.setItem('popup-timer-start', now.toString());
      startTime = now.toString();
    }

    const elapsed = Date.now() - parseInt(startTime);
    const remaining = (delaySeconds * 1000) - elapsed;

    if (remaining <= 0) {
      // Timer has already elapsed
      setShowPopup(true);
    } else {
      // Set timer for remaining time
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, remaining);

      return () => clearTimeout(timer);
    }
  }, [delaySeconds, location.pathname]);

  const closePopup = () => {
    setShowPopup(false);
    // Mark popup as shown for this session
    sessionStorage.setItem('contact-popup-shown', 'true');
    // Clean up timer start time since popup was shown
    sessionStorage.removeItem('popup-timer-start');
  };

  return { showPopup, closePopup };
};
