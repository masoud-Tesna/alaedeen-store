import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { QueryClient, QueryClientProvider } from "react-query";

import { ReactQueryDevtools } from "react-query/devtools";

// import i18n:
import "./translations";

// import language context:
import { LanguageProvider } from "./contexts/language/LanguageContext";

// import store id context:
import { StoreProvider } from "./contexts/store/StoreContext";

const queryClient = new QueryClient();

const Application = () => {
  return (
    <QueryClientProvider client={queryClient}>
        <StoreProvider>
          <LanguageProvider>
            <App />
            <ReactQueryDevtools initialIsOpen />
          </LanguageProvider>
        </StoreProvider>
    </QueryClientProvider>
  );
}

ReactDOM.render( <Application />, document.getElementById('HornStoreApp'));

