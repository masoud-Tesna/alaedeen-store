import ReactDOM from 'react-dom';

// import i18n:
import "./translations";

// import Cookie Provider:
import { CookiesProvider } from "react-cookie";

// import react query provider:
import { QueryClient, QueryClientProvider } from "react-query";

// import react query dev tools:
import { ReactQueryDevtools } from "react-query/devtools";

// import store context:
import { StoreProvider } from "./contexts/store/StoreContext";

// import language context:
import { LanguageProvider } from "./contexts/language/LanguageContext";

// import user  context:
import { UserProvider } from "./contexts/user/UserContext";

// import Application:
import App from './App';

// initial query client:
const queryClient = new QueryClient();

const Application = () => {

  return (
    <CookiesProvider>
      <QueryClientProvider client={queryClient}>
        <StoreProvider>
          <LanguageProvider>
            <UserProvider>
              <App />
              <ReactQueryDevtools />
            </UserProvider>
          </LanguageProvider>
        </StoreProvider>
      </QueryClientProvider>
    </CookiesProvider>
  );
}

ReactDOM.render( <Application />, document.getElementById('HornStoreApp'));
