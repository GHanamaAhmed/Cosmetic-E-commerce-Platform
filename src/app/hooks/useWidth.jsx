"use client";
import { useEffect, useState } from 'react';

export const useWidth = () => {
  const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 360);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setWidth(window.innerWidth);
    setIsLoading(false);
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return { width, isLoading };
};
