import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { QueryClient, QueryClientProvider } from "react-query";

import { ReactQueryDevtools } from "react-query/devtools";

// import i18n:
import "./translations";

// import language context:
import { LanguageProvider } from "./contexts/language/LanguageContext";

// import store context:
import { StoreProvider } from "./contexts/store/StoreContext";

// import user  context:
import { UserProvider } from "./contexts/user/UserContext";

const queryClient = new QueryClient();

const Application = () => {

  return (
    <QueryClientProvider client={queryClient}>
        <StoreProvider>
          <LanguageProvider>
            <UserProvider>
              <App />
              <ReactQueryDevtools initialIsOpen />
            </UserProvider>
          </LanguageProvider>
        </StoreProvider>
    </QueryClientProvider>
  );
}

ReactDOM.render( <Application />, document.getElementById('HornStoreApp'));

