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
  const [store, setStore] = useState({status: 'loading', id: store_id_query_string, name: null, brand: null, email: null, logo: null});


  const store_id = window.localStorage.getItem("store_id") || store_id_query_string ;

  const { data } = useGetApi(`store-check-api`, `store_id=${store_id}`, `storeCheck_${store_id}`);


  useEffect(() => {

    if (data) {
      if (data.status === 'D') {
        setStore(prevState => {
          return {...prevState, status: 'disable'}
        });
      }else if (data.status === 'A') {
        setStore(prevState => {
          return {...prevState, status: 'active', id: store_id, name: data.name, brand: data.brand, email: data.email, logo: data.logo}
        });
      }
    }

  }, [data]);

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