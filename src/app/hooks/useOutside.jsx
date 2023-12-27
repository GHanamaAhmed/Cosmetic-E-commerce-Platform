"use client";
import React, { useEffect, useState } from "react";
export function useOutside(ref) {
  const [isOutside, setIsOutside] = useState(false);
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOutside(true);
      }else{
        setIsOutside(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
    return [isOutside,setIsOutside];
}
