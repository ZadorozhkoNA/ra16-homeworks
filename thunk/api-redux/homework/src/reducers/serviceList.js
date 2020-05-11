import {
  REMOVE_SERVICE, 
  FETCH_SERVICES_REQUEST, 
  FETCH_SERVICES_SUCCESS, 
  FETCH_SERVICES_FAILURE,
  FETCH_SERVICE_REMOVE} from '../actions/actionTypes'

const initialState = {
  items: [],
  error: null,
  loading: false,
};

export default function serviceListReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SERVICES_REQUEST:
    return {...state, error: null, loading: true };

    case FETCH_SERVICES_SUCCESS:
      const {items} = action.payload;
      return {...state, loading: false, items }

    case FETCH_SERVICES_FAILURE:
      const {error} = action.payload;
      return {...state, loading: false, error }

    case FETCH_SERVICE_REMOVE:
      return {...state}

    default:
      return state;
  }
}