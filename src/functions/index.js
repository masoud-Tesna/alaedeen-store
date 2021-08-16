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
    url = `https://alaedeen.com/horn/products-api/?${params}&lang_code=${language}`;
    useQueryKeyClone = `${useQueryKey}_${language}`;
  }else {
    url = `https://alaedeen.com/horn/products-api/?${params}`;
    useQueryKeyClone = useQueryKey;
  }

  async function getProducts() {
    const { data } = await axios.get(url);
    return data;
  }

  return useQuery(['products', useQueryKeyClone], getProducts);
}*/

export function useGetApi (mode, params, useQueryKey) {

  const { language } = useGetLanguageState();

  let useQueryKeyClone,
      url;

  if (language) {
    url = `https://alaedeen.com/horn/${ mode }/?${ params }&lang_code=${ language }`;
    useQueryKeyClone = `${useQueryKey}_${language}`;
  }


  // async function for get API:
  async function getApi() {
    const { data } = await axios.get(url);
    return data;
  }

  return useQuery(['getApi', useQueryKeyClone], getApi, {
    enabled: !!language,
  });
}

export function useResizeImage (image_path, image_folder, image_width, image_height, useQueryKey) {

  // async function for get API:
  const url = `https://alaedeen.com/horn/image-resize-api/?image_path=${image_path}&image_folder=${image_folder}&image_width=${image_width}&image_height=${image_height}`;
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
    const url = `https://alaedeen.com/horn/image-resize-api/?image_path=${image_path}&image_folder=${image_folder}&image_width=${image_width}&image_height=${image_height}`;
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

