import { createContext, useContext, useEffect, useState } from "react";
import { fn_set_local_storage } from "../../functions/Helper";

// Store id Context Create:
const storeContext = createContext();

// create Language Context Provide:
function StoreProvider({ children }) {

  // get store id from url query string:
  const url = new URL(window.location.href);
  const store_id_query_string = url.searchParams.get('store_id');

  // useState For Store_id use in app
  const [storeId, setStoreId] = useState(store_id_query_string);

  useEffect(() => {

    if (storeId !== null) {

      fn_set_local_storage('store_id', store_id_query_string);
      setStoreId(store_id_query_string);

    } else {

      const clientStoreIdLocalStorage = window.localStorage.getItem('store_id');
      if (clientStoreIdLocalStorage) {
        setStoreId(clientStoreIdLocalStorage);
      } else {
        //window.location.href = "https://hornb2b.com";
      }

    }

  }, []);

  return (
    <storeContext.Provider value={ storeId }>
      {children}
    </storeContext.Provider>
  );
}

// get current store id
function useGetStoreIdState() {
  return useContext(storeContext);
}

export {
  StoreProvider,
  useGetStoreIdState
};