import 
{ ADD_SERVICE, 
  REMOVE_SERVICE, 
  CHANGE_SERVICE_FIELD, 
  EDIT_SERVICE, 
  CANSEL_FIELD, 
  CHANGE_FILTER_LIST,

  FETCH_SERVICES_REQUEST, 
  FETCH_SERVICES_SUCCESS,
  FETCH_SERVICES_FAILURE,
  FETCH_SERVICE_REMOVE } from './actionTypes';

export function addService(id, name, price) {
  return {type: ADD_SERVICE, payload: {id, name, price}};
}

export function removeService(id) {
  return {type: REMOVE_SERVICE, payload: {id}};
}

export function changeServiceField(name, value) {
  return {type: CHANGE_SERVICE_FIELD, payload: {name, value}}
}

export function editService(id, name, price) {
  return {type: EDIT_SERVICE, payload: {id, name, price}}
}

export function canselField(id, name, price) {
  return {type: CANSEL_FIELD, payload: {}}
}

export function changeFilterList(items, value) {
  return {type: CHANGE_FILTER_LIST, payload: {items, value}}
}



export const fetchServicesRequest = () => {
  return {type: FETCH_SERVICES_REQUEST, }
}

export const fetchServicesSuccess = (items) => {
  return {
    type: FETCH_SERVICES_SUCCESS,
    payload: {items} 
  }
}

export const fetchServicesFailure = (error) => {
  return {
    type: FETCH_SERVICES_FAILURE,
    payload: {error} 
  }
}

export const fetchServices = async(dispatch) => {
  try {
    // throw new Error('Ошибка');
    dispatch(fetchServicesRequest())
    const response = await fetch(process.env.REACT_APP_API_URL);
    const services = await response.json();
    dispatch(fetchServicesSuccess(services));
  } catch (error){
    dispatch(fetchServicesFailure(error.message))
  }
};

export const fetchServicesRemove = (id) => {
    const response = fetch(`${process.env.REACT_APP_API_URL}/${id}`, {
    method: 'DELETE',
    body: JSON.stringify(id)});
    
    return { 
    type: FETCH_SERVICE_REMOVE,
    payload: {},
  }
};