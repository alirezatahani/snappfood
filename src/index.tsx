import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Restaurants } from './pages';
import { Layout } from './layout';
import { Provider } from 'react-redux';
import { store } from './store';
import './style/palette.scss';
import './style/fonts.scss';
import './style.scss';

const Index: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="restaurants" element={<Restaurants />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

const container = document.getElementById('app');
const root = createRoot(container);

root.render(<Index />);
