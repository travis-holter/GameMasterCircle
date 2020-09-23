import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root'
import createStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
    const rootEl = document.getElementById('root');
    let preloadedState = undefined;
    if (window.currentUser) {
        preloadedState = {
            session: {
                currentUser: window.currentUser
            }
        };
    }
    const store = createStore(preloadedState);
    window.getState = store.getState;
    ReactDOM.render(<Root store={store}/>, rootEl);
});