import {createContext, useContext, useEffect, useReducer, useState} from "react";
import {useDentistFetch} from "./hooks/useDentistFetch";
import {getAllDentist, getDentisById} from "./helpers/getDentist";

export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext();

const themes = {
  dark: {
    theme: false,
    bgColor: '#00212E',
    color: '#DCFFF6',
    aColor: 'white'
  },
  light: {
    theme: true,
    bgColor: 'white',
    color: 'black',
    aColor: 'black'
  }
}

const initialThemeState = themes.light;
const initialFavState = JSON.parse(localStorage.getItem('favs')) || []

const themeReducer = (state, action) => {
  switch(action.type){
    case 'SWITCH_DARK':
      return themes.dark
    case 'SWITCH_LIGHT':
      return themes.light
    default:
      throw new Error
  }
}

const favReducer = (state, action) => {
  switch(action.type){
    case 'ADD_FAV':
      return [...state, action.payload]
    default:
      throw new Error
  }
}

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [dentist, setDentist] = useState([]);
  const [themeState, themeDispatch] = useReducer(themeReducer, initialThemeState);
  const [favState, favDispatch] = useReducer(favReducer, initialFavState)

  const getDentistAll = async () => {
    const dentistArray = await getAllDentist();
    setDentist(dentistArray);
  }

  useEffect(() => {
    getDentistAll();
  }, []);

  useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(favState))
  }, [ favState ]);

  return (
    <ContextGlobal.Provider value={{ dentist, themeState, themeDispatch, favState, favDispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;

export const useContextGlobal = () => useContext(ContextGlobal);
