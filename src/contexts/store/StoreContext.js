import { createContext, useContext, useEffect, useState } from "react";

import { useGetApi } from "../../functions";

// Store id Context Create:
const storeContext = createContext({});

// create store Context Provide:
function StoreProvider({ children }) {

  // useState For Store_id use in app
  const url = new URL(window.location.href);
  const store_id_query_string = url.searchParams.get('store_id');

  // useState For Store use in app
  const [store, setStore] = useState({isLoading: true, status: 'loading', id: store_id_query_string, name: null, brand: null, email: null, logo: null});


  const store_id = window.localStorage.getItem("store_id") || store_id_query_string ;

  const { data, isLoading } = useGetApi(`store-check-api`, `store_id=${store_id}`, `storeCheck_${store_id}`);

  useEffect(() => {

    setStore(prevState => {
      return {...prevState, isLoading: true}
    });

    if (data) {
      if (data.status === 'D') {
        setStore(prevState => {
          return {...prevState, isLoading: isLoading, status: 'disable'}
        });
      }else if (data.status === 'A') {
        setStore(prevState => {
          return {...prevState, isLoading: isLoading, status: 'active', id: store_id, name: data.name, brand: data.brand, email: data.email, logo: data.logo}
        });
      }
    }

  }, [data, isLoading]);

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