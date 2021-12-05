import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import ServiceList from './components/ServiceList';
import ServicePage from "./components/ServicePage";

function App() {
  return (
    <Router>
      <div>
        <div className="page">
          <Routes>
            <Route path="/services" element={<ServiceList />} />
            <Route path="/services/:id" element={<ServicePage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
