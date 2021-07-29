import { createContext, useContext, useEffect, useState } from "react";
import { fn_set_local_storage } from "../../functions/Helper";
import axios from "axios";

// Store id Context Create:
const storeContext = createContext({});

// create store Context Provide:
function StoreProvider({ children }) {
  // useState For Store_id use in app
  const url = new URL(window.location.href);
  const store_id_query_string = url.searchParams.get('store_id');

  // useState For Store use in app
  const [store, setStore] = useState({status: 'loading', id: store_id_query_string, name: null, email: null});

  async function getApiStoreCheck(store_id) {
    const { data } = await axios.get(`https://hornb2b.com/horn/store-check-api/?store_id=${store_id}`);
    return data
  }

  useEffect(() => {

    if (store.id !== null) {
      fn_set_local_storage('store_id', store_id_query_string);
      getApiStoreCheck(store.id)
        .then(res => {
          if (res.status === 'D') {
            setStore(prevState => {
              return {...prevState, status: 'disable'}
            });
          }else if (res.status === 'A') {
            setStore(prevState => {
              return {...prevState, status: 'active', name: res.name, email: res.email}
            });
          }
        });

    } else {

      const clientStoreIdLocalStorage = window.localStorage.getItem('store_id');
      if (clientStoreIdLocalStorage) {
        getApiStoreCheck(clientStoreIdLocalStorage)
          .then(res => {
            if (res.status === 'D') {
              setStore(prevState => {
                return {...prevState, status: 'disable'}
              });
            }else if (res.status === 'A') {
              setStore(prevState => {
                return {...prevState, status: 'active', id: clientStoreIdLocalStorage, name: res.name, email: res.email}
              });
            }
          });
      } else {
        window.location.href = "https://hornb2b.com/factories";
      }

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