import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import { MantineProvider } from '@mantine/core';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <MantineProvider withGlobalStyles withNormalizeCSS>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </MantineProvider>

);
