import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import App from './containers/App';
import store from './store';

//with help of Provider will connect our react app with redux and will fetch event and subscrib store

 render(
            <Provider store={store}>
                <App />
            </Provider>, 
            window.document.getElementById('root')
        );