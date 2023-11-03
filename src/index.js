import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Router from './components/Router';
// plugin settings
import './i18n';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';

const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient()

root.render(
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  </HelmetProvider>

);

reportWebVitals();

/*<React.StrictMode>

</React.StrictMode>*/

/*
const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 10000 }}
})
*/