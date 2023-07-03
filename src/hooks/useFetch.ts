import { useReducer } from 'react';
import apiClient from '../utils/apiClient';

const actions = {
  fetchRequest: 'FETCH_DATA_REQUEST',
  fetchSuccess: 'FETCH_DATA_SUCCESS',
  fetchFailure: 'FETCH_DATA_FAILURE',
};
const initialState: any = {
  loading: false,
  error: null,
  data: null,
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case actions.fetchRequest:
      return {
        ...state,
        data: null,
        loading: true,
        error: null,
      };
    case actions.fetchSuccess:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case actions.fetchFailure:
      return {
        ...state,
        data: null,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

const useFetch = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  async function performAction(options: any) {
    try {
      dispatch({ type: actions.fetchRequest });

      const response = await apiClient(options);

      dispatch({ type: actions.fetchSuccess, payload: response.data });
    } catch (error) {
      dispatch({ type: actions.fetchFailure, payload: error.message });
    }
  }
  return [state, performAction];
};

export default useFetch;
