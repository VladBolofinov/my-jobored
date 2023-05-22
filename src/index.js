import React from 'react';
import ReactDOM from 'react-dom/client';
import {MantineProvider} from '@mantine/core';

import {App} from './components/app/App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <MantineProvider withGlobalStyles withNormalizeCSS>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </MantineProvider>
);