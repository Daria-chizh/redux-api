import { createStore, combineReducers} from 'redux';

import serviceListReducer from '../reducers/serviceList';
import fetcherReducer from '../reducers/fetcher';

const reducer = combineReducers({
  serviceList: serviceListReducer,
  fetcher: fetcherReducer,
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
