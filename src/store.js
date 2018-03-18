import { createStore, applyMiddleware } from 'redux';

const store = createStore(() => { }, {}, applyMiddleware()); //very important line

export default store;