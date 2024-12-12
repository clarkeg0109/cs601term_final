import React from 'react';
import ReactDOM from 'react-dom/client'; // Import 'createRoot' from 'react-dom/client'
import '../styles/Main.css';
import App from '../App';

// Create a root using 'createRoot'
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(

    <React.StrictMode>
        <App />


    </React.StrictMode>


);
