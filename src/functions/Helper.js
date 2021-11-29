import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export function fn_stripHtml(strip) {
  const regex = /(<([^>]+)>)/ig;
  return strip.replace(regex, '');
}

export function __(world, prefix = "", sign = ".") {

  let returnWord = world;

  returnWord = returnWord.toString().trim().toLowerCase()
    .replaceAll(" / ", "_or_")
    .replaceAll("/", "_or_")
    .replaceAll(" & ", "_and_")
    .replaceAll("&", "_and_")
    .replaceAll("(", "")
    .replaceAll(")", "")
    .replaceAll("?", "")
    .replaceAll("!", "")
    .replaceAll(".", "")
    .replaceAll("'", "")
    .replaceAll(",", "")
    .replaceAll("’", "")
    .replaceAll("²", "")
    .replaceAll("%", "")
    .replaceAll("    ", "_")
    .replaceAll("   ", "_")
    .replaceAll("  ", "_")
    .replaceAll(" ", "_")
    .replaceAll(" - ", "_")
    .replaceAll("-", "_");

  returnWord = prefix? `${prefix}${sign}${returnWord}` : returnWord;

  return returnWord;

}

export const useParsPathName = () => {
  // Get Location pathName:
  const pathName = useLocation().pathname;

  const pathNameSplit = pathName.split("/").filter(path => path !== "");

  if (pathNameSplit.length < 1) {
    return ['homePage'];
  }

  return pathNameSplit;
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

export const fn_hex_to_rgb = (hex, sharp = false) => {
  hex = sharp && hex.replaceAll("#", '');
  hex = '0x' + hex
  let r = hex >> 16 & 0xFF
  let g = hex >> 8 & 0xFF
  let b = hex & 0xFF
  return `${r}, ${g}, ${b}`
}