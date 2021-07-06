import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// import i18n:
import "./translations";

// import language context:
import { LanguageProvider } from "./contexts/language/LanguageContext";

// import store id context:
import { StoreProvider } from "./contexts/store/StoreContext";

const Application = () => {
  return (
    <StoreProvider>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </StoreProvider>
  );
}

ReactDOM.render( <Application />, document.getElementById('HornStoreApp'));

