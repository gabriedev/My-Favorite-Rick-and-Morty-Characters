import { useState } from 'react';

const strBaseKey = '--state-'

export function useStore(key, initialState) {
  const [state, setState] = useState(() => {
    const storedState = localStorage.getItem(strBaseKey + key);
    
    if (storedState) {
      return JSON.parse(storedState);
    } else {
      return initialState;
    }
  });

  function handleSetState(value) {
    localStorage.setItem(strBaseKey + key, JSON.stringify(value));
    setState(value);
  }

  return [state, handleSetState]
}
