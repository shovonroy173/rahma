/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import { createContext, useState } from 'react';

// Create a context
export const ProgressContext = createContext();
const TOTAL_PAGES = 42;
// Provider component
export const ProgressProvider = ({ children }) => {
  const [progressValue, setProgressValue] = useState(10);
  const [currentPage, setCurrentPage] = useState(10);

const progressFunc = (value)=>{
  setProgressValue(Math.min(value - 10, 100));
  setCurrentPage(prev => Math.min(prev + 1, TOTAL_PAGES));
};


  return (
    <ProgressContext.Provider value={{ progressValue, progressFunc}}>
      {children}
    </ProgressContext.Provider>
  );
};
