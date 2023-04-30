import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import testService from "./components/services/JobService";
import { MantineProvider } from '@mantine/core';

const TestService = new testService();
//TestService.getCatalogues();
//TestService.getVacancies().then(res => console.log(res));
//TestService.getToken().then(res => console.log(res));

const root = ReactDOM.createRoot(document.getElementById('root'));





root.render(
    <MantineProvider withGlobalStyles withNormalizeCSS>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </MantineProvider>

);
