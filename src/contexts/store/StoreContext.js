import { createContext, useContext, useEffect, useState } from "react";
import { fn_set_local_storage } from "../../functions/Helper";
import axios from "axios";

// Store id Context Create:
const storeContext = createContext();

// Store check Context Create:
const storeCheckContext = createContext();

function StoreCheckProvider ({ children }) {
  // useState For Store check use in app
  const [storeCheck, setStoreCheck] = useState('load');

  // useState For Store_id use in app
  const url = new URL(window.location.href);
  const store_id_query_string = url.searchParams.get('store_id');

  const [storeId, setStoreId] = useState(store_id_query_string);

  async function getApiStoreCheck(store_id) {
    const { data } = await axios.get(`https://hornb2b.com/horn/store-check-api/?store_id=${store_id}`);
    return data
  }

  useEffect(() => {

    if (storeId !== null) {

      getApiStoreCheck(storeId)
        .then(res => {
          if (res.store_check === 'D') {
            setStoreCheck('disable');
          }else if (res.store_check === 'A') {
            setStoreCheck('active');
          }
        });

    } else {

      const clientStoreIdLocalStorage = window.localStorage.getItem('store_id');
      if (clientStoreIdLocalStorage) {
        getApiStoreCheck(clientStoreIdLocalStorage)
          .then(res => {
            if (res.store_check === 'D') {
              setStoreCheck('disable');
            }else if (res.store_check === 'A') {
              setStoreCheck('active');
            }
          });
      } else {
        window.location.href = "https://hornb2b.com/factories";
      }

    }

  }, [])

  return (
    <storeCheckContext.Provider value={ storeCheck }>
      {children}
    </storeCheckContext.Provider>
  );
}

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
        window.location.href = "https://hornb2b.com/factories";
      }

    }

  }, []);

  return (
    <StoreCheckProvider>
      <storeContext.Provider value={ storeId }>
        {children}
      </storeContext.Provider>
    </StoreCheckProvider>
  );
}

// get current store id
function useGetStoreIdState() {
  return useContext(storeContext);
}

// get current store Check
function useGetStoreCheckState() {
  return useContext(storeCheckContext);
}

export {
  StoreProvider,
  useGetStoreIdState,
  useGetStoreCheckState
};