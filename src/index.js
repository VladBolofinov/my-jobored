import React from 'react';
import ReactDOM from 'react-dom/client';
import {MantineProvider} from '@mantine/core';

import {App} from './components/app/App';
import {Provider} from "react-redux";

import store from "./store";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <MantineProvider withGlobalStyles withNormalizeCSS>
        <React.StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </React.StrictMode>
    </MantineProvider>
);