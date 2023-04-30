import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import testService from "./components/services/JobService";

const TestService = new testService();
TestService.getCatalogues();
TestService.getVacancies().then(res => console.log(res));
TestService.getToken().then(res => console.log(res));

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

