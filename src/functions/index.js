import { useState, useEffect } from "react";

import { useLocation } from 'react-router-dom';

import { useQuery } from "react-query";

import axios from "axios";

import { useGetLanguageState } from "../contexts/language/LanguageContext";

// Function For Get Product by API From Server:
/*export function useGetProductApi (params, useQueryKey, setLanguage = true) {

  const { language } = useGetLanguageState();

  // async function for get API:
  let url,
    useQueryKeyClone;
  if (setLanguage) {
    url = `https://hornb2b.com/horn/products-api/?${params}&lang_code=${language}`;
    useQueryKeyClone = `${useQueryKey}_${language}`;
  }else {
    url = `https://hornb2b.com/horn/products-api/?${params}`;
    useQueryKeyClone = useQueryKey;
  }

  async function getProducts() {
    const { data } = await axios.get(url);
    return data;
  }

  return useQuery(['products', useQueryKeyClone], getProducts);
}*/

export function useGetApi (mode, params, useQueryKey, setLanguage = true) {

  const { language } = useGetLanguageState();

  // async function for get API:
  let url,
      useQueryKeyClone;
  if (setLanguage) {
    url = `https://hornb2b.com/horn/${mode}/?${params}&lang_code=${language}`;
    useQueryKeyClone = `${useQueryKey}_${language}`;
  }else {
    url = `https://hornb2b.com/horn/${mode}/?${params}`;
    useQueryKeyClone = useQueryKey;
  }

  async function getApi() {
    const { data } = await axios.get(url);
    return data;
  }

  return useQuery(['getApi', useQueryKeyClone], getApi);
}

export function useResizeImage (image_path, image_folder, image_width, image_height, useQueryKey) {

  // async function for get API:
  const url = `https://hornb2b.com/horn/image-resize-api/?image_path=${image_path}&image_folder=${image_folder}&image_width=${image_width}&image_height=${image_height}`;
  async function getImageResized() {
    const { data } = await axios.get(url);
    return data;
  }

  return useQuery(['imageResponsive', useQueryKey], getImageResized);

  /*const [load, setLoad] = useState(true);
  const [image, setImage] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    // async function for get API:
    const url = `https://hornb2b.com/horn/image-resize-api/?image_path=${image_path}&image_folder=${image_folder}&image_width=${image_width}&image_height=${image_height}`;
    async function getImageResized() {
      return await axios.get(url);
    }

    let mounted  = true;
    setLoad(true);

    if (mounted) {
      getImageResized()
        .then(res => {
          setImage(res.data.image);
        })
        .then(() => {
          setLoad(false);
        })
        .catch ((error) => {
          setError((prev => !prev));
          setLoad(false);
        })
    }

    return () => mounted = false;

  }, [image_path, image_folder, image_width, image_height, error]);

  return { image, load, error }*/
}

export function useWindowSize () {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}

export function useQueryString () {
  return new URLSearchParams(useLocation().search);
}

export function useLocalStorage (key, initialValue) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // A more advanced implementation would handle the error case
    }
  };

  return [storedValue, setValue];
}
