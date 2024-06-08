import {legacy_createStore as createStore, combineReducers } from 'redux';
import blogReducer from './Reducers/blogReducer'; // Make sure the path is correct

const rootReducer = combineReducers({
  blog: blogReducer, // Assuming you have a blog reducer
  // Add more reducers if needed
});

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

export default store;
