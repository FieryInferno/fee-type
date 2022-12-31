import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Layout from './components/Layout';
import FeeType from './pages/FeeType';
import FeeTypeForm from './pages/FeeTypeForm';

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<FeeType />} />
      <Route path="/fee-type" element={<FeeType />} />
      <Route path="/fee-type/:feeTypeCode/edit" element={<FeeTypeForm />} />
    </Route>
  </Routes>
);

export default App;
