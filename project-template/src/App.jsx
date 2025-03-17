import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import ContentPage from './components/ContentPage/ContentPage';
import ClientCabinet from './components/UserCabinet/ClientCabinet';
import LandlordCabinet from './components/UserCabinet/LandlordCabinet';
import AdminCabinet from './components/UserCabinet/AdminCabinet';
import Login from './components/Auth/Login';
import Registration from './components/Auth/Registration';
import { Sailer } from './components/Sailer/Sailer';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/content" element={<ContentPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/cabinet/client" element={<ClientCabinet />} />
        <Route path="/cabinet/landlord" element={<LandlordCabinet />} />
        <Route path="/cabinet/admin" element={<AdminCabinet />} />
        <Route path="/sailer" element={<Sailer />} />
      </Routes>
    </Router>
  );
};

export default App;
