import { ADD_SERVICE, REMOVE_SERVICE, CHANGE_SERVICE_FIELD, EDIT_SERVICE, CANSEL_FIELD, CHANGE_FILTER_LIST } from './actionTypes';

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