import { useContext, useMemo } from 'react';

import { AppContext, ADD_QUERY, REMOVE_QUERY } from '../components/AppContext';

export function useFieldsCode(type) {
  const { state, dispatch } = useContext(AppContext);

  const value = useMemo(() => {
    if (!state[type] || state[type].length === 0) {
      return [];
    }
    return state[type];
  }, [state, type]);

  const next = (formStates) => {
    dispatch({
      type: ADD_QUERY,
      state: { ...formStates },
      queryType: type,
    });
  };

  const remove = () => {
    dispatch({
      type: REMOVE_QUERY,
      queryType: type,
    });
  };

  return [value, next, remove];
}
