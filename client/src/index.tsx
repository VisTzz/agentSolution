import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import ContragentsStore from './store/ContragentsStore';
import TokenStore from './store/TokenStore';
import UserStore from './store/UserStore';
import { RootStoreContext } from './store/rootStoreContext';

const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(
    <RootStoreContext.Provider value = {{
        user: new UserStore(),
        contragents: new ContragentsStore(),
        token: new TokenStore()
    }}>
    <React.StrictMode>
        <App />
    </React.StrictMode>
    </RootStoreContext.Provider>
)