import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './app.router';
import AuthRoutes from './auth.router';


const Routes: React.FC = () => {
    
    return (
        <BrowserRouter>
          <AppRoutes/> 
        </BrowserRouter>
    );
}

export default Routes;