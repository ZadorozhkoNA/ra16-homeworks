import {CHANGE_FILTER_LIST} from '../actions/actionTypes'

const initialState = {
  items: [],
  value: '',
};

export default function serviceFilterReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_FILTER_LIST:
      {
        const {items, value} = action.payload;
        const arr = items.filter(item => item.name.toLowerCase().includes(value.trim().toLowerCase()))
        return {items: arr, value: value}
      }

    default:
      return state;
  }
}