import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ProviderRedux} from "./store/ProviderPlaceholder";




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <ProviderRedux>
            <App/>
        </ProviderRedux>
);


