import './App.css';
import {  Routes, Route,Navigate  } from 'react-router-dom';

import DashobardComponent from './Views/Pages/Dashboard/Dashboard';
import SiteHeaderComponents from './Layouts/SiteHeader/SiteHeader';
import FooterComponents from './Layouts/Footer/Footer';

function App() {
  return (
    <>
      <SiteHeaderComponents />
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<DashobardComponent />} />
      </Routes>
      <FooterComponents />
    </>
  );
}

export default App;
