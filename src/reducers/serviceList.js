import {
  REMOVE_SERVICE, EDIT_SERVICE, LOAD_SERVICES
} from '../actions/actionTypes';

const initialState = [];

export default function serviceListReducer(state = initialState, action) {
  const { payload } = action;

  switch (action.type) {
    case LOAD_SERVICES:
      return [...action.payload.services];
    case REMOVE_SERVICE:
      return state.filter((item) => item.id !== payload.id);
    case EDIT_SERVICE:
      const newState = [...state];
      const service = newState.find((item) => item.id === payload.id);
      service.name  = payload.name;
      service.price = payload.price;
      return newState;
    default:
      return state;
  }
}
