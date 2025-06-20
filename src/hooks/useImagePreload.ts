
import { useEffect } from 'react';

export const useImagePreload = (images: string[], count = 2) => {
  useEffect(() => {
    images.slice(0, count).forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });
  }, [images, count]);
};
