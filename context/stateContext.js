import { createContext, stateContext } from 'react';

export const StateContext = createContext(null);

export const useEstado = () => {
	return stateContext(StateContext);
};
