import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root';

import {
    receiveCurrentUser,
    receiveErrors,
    logout,
    login,
    signup
} from './actions/session_actions';

import {
  requestPosts,
  requestPost,
  receivePosts,
  receivePost,
  createPost
} from './actions/post_actions';
window.store = configureStore();
window.dispatch = store.dispatch;
window.getState = store.dispatch;
window.requestPosts = requestPosts;
window.requestPost = requestPost;
window.receivePosts = receivePosts;
window.receivePost = receivePost;
window.createPost = createPost;
// testing Post Actions from the console


document.addEventListener('DOMContentLoaded', () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            session: { id: window.currentUser.id },
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.store = store;
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={ store }/>, root);
});