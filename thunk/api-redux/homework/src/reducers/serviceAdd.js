import {CHANGE_SERVICE_FIELD, EDIT_SERVICE, CANSEL_FIELD} from '../actions/actionTypes'

const initialState = {
    id: '',
    name: '',
    price: '',
};

export default function serviceAddReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SERVICE_FIELD:
        {
            const {name, value} = action.payload;
            return {...state, [name]: value};
        }
    case EDIT_SERVICE:
        {
            const {id, name, price} = action.payload;
            return {...state, id, name, price};
        }

    case CANSEL_FIELD:
        {
            return {...state, id: '', name: '', price: ''};
        }    

    default:
      return state;
  }
}