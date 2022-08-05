import React, { createContext, useCallback, useContext, useState } from 'react';
import { CardForm } from '../App';

type Focus = keyof CardForm | null;

type FocusContextType = {
  focus: Focus;
  setFocus(focus: Focus): void;
  blur(): void;
};

const FocusContext = createContext({} as FocusContextType);

const FocusProvider: React.FC<any> = ({ children }) => {
  const [focus, setFocus] = useState<Focus>(null);
  
  const blur = useCallback(() => setFocus(null), []);

  return (
    <FocusContext.Provider value={{ focus, setFocus, blur }}>
      {children}
    </FocusContext.Provider>
  );
};

export const useFocus = () => useContext<FocusContextType>(FocusContext);

export default FocusProvider;
