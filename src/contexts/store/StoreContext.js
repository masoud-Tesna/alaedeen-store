import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

// Store id Context Create:
const storeContext = createContext({});

// create store Context Provide:
function StoreProvider({ children }) {

  // useState For Store_id use in app
  const url = new URL(window.location.href);
  const store_id_query_string = url.searchParams.get('store_id');

  // useState For Store use in app
  const [store, setStore] = useState({status: 'loading', id: store_id_query_string, name: null, email: null, logo: null});

  async function getApiStoreCheck(store_id) {
    const { data } = await axios.get(`https://hornb2b.com/horn/store-check-api/?store_id=${store_id}`);
    return data
  }

  useEffect(() => {

    const store_id = window.localStorage.getItem("store_id") || store_id_query_string ;

    if (store_id_query_string) {
      window.localStorage.setItem("store_id", store_id_query_string);
    }

    if (store_id || store_id !== null) {

      getApiStoreCheck(store_id)
        .then(res => {
          if (res.status === 'D') {
            setStore(prevState => {
              return {...prevState, status: 'disable'}
            });
          }else if (res.status === 'A') {
            setStore(prevState => {
              return {...prevState, status: 'active', name: res.name, email: res.email, logo: res.logo}
            });
          }
        });

    }

  }, []);

  return (
    <storeContext.Provider value={ store }>
      {children}
    </storeContext.Provider>
  );
}

// get current store id
function useGetStoreState() {
  return useContext(storeContext);
}

export {
  StoreProvider,
  useGetStoreState
};