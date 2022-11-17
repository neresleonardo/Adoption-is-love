import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AuthRoutes from './auth.router';


const Routes: React.FC = () => {
    
    return (
        <BrowserRouter>
          <AuthRoutes/> 
        </BrowserRouter>
    );
}

export default Routes;