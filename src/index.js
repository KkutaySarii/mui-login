import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './components/sign_in'
import SignUp from './components/sign_up'

const container = document.querySelector('#root');
const root = createRoot(container);
root.render(<SignUp />);
