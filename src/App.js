import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/shared/Header/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
