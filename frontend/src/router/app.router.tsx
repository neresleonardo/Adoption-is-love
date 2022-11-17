import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout';
import Dash from '../pages/Dash';



const AppRoutes: React.FC = () => (
    <Layout>
        <Routes>
            <Route path="/" element={<Dash/>} />
        </Routes>
    </Layout>
);

export default AppRoutes;