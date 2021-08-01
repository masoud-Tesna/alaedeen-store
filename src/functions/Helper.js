import i18n from "../translations";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export function fn_stripHtml (strip) {
  const regex = /(<([^>]+)>)/ig;
  return strip.replace(regex, '');
}

export function __ (world, prefix = "", sign = ".") {

  let returnWord = world;

  returnWord = returnWord.toString().trim().toLowerCase()
    .replaceAll("    ", "_")
    .replaceAll("   ", "_")
    .replaceAll("  ", "_")
    .replaceAll(" ", "_")
    .replaceAll(" / ", "_and_")
    .replaceAll("/", "_and_")
    .replaceAll(" & ", "_and_")
    .replaceAll("&", "_and_")
    .replaceAll("(", "")
    .replaceAll(")", "")
    .replaceAll("?", "")
    .replaceAll("!", "")
    .replaceAll(".", "")
    .replaceAll(",", "")
    .replaceAll("’", "")
    .replaceAll("²", "")
    .replaceAll("%", "")
    .replaceAll(" - ", "_")
    .replaceAll("-", "_");

  returnWord = prefix? `${prefix}${sign}${returnWord}` : returnWord;

  return returnWord;

}

export const useParsPathName = () => {
  // Get Location pathName:
  const pathName = useLocation().pathname;

  let returnWord = pathName;

  if (returnWord === '/') {
    return 'homePage';
  }

  returnWord = returnWord.toString().trim().toLowerCase()
    .replaceAll("/", "");

  return returnWord;
}

export const useSetLoaded = () => {
  const [isLoaded, setIsLoaded] = useState(true);

  const setLoaded = () => {
    return new Promise((resolve) => setTimeout(() => resolve(), 200));
  }

  useEffect(() => {
    setLoaded().then(() => setIsLoaded(false));
  }, []);
  return { isLoaded }
}

export function fn_random_number_between(min,max){
  return Math.floor(Math.random()*(max-min+1)+min);
}

export function fn_set_date_day(day) {
  const date = new Date();

  date.setTime(date.getTime() + (day*24*60*60*1000));
  return date;
}