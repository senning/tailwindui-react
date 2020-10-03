import React, {createContext, useContext, useReducer} from 'react';

import * as defaultTheme from './DefaultTheme';
export const DefaultTheme = defaultTheme;

const ThemeContext = createContext(DefaultTheme);

export const ThemeProvider = ({reducer, initialState, children}) => {

  initialState = initialState ? initialState : DefaultTheme;

  return (
    <ThemeContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </ThemeContext.Provider>
    )
};

export const useTheme = () => useContext(ThemeContext);
export const ThemeConsumer = ThemeContext.Consumer;

export const ThemeReducer = (state, action) => {
  switch(action.type) {
    case 'setTheme':
      return {
        ...state,
        theme: action.theme
      };
    case 'updateTheme':
      return {
        ...state,
        themes: []
      }
    default:
      return state;
  }
}

export default ThemeContext;