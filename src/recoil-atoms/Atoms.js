import { atom } from "recoil";


//  Global Functions
const  getSessionStorage =  (SessionKey, defaultKey) => {
  const sessionValue = sessionStorage.getItem(SessionKey);
  if (sessionValue) {
    return sessionValue;
  }
  sessionStorage.setItem(SessionKey, defaultKey);
  return defaultKey;
}
//  /Global Functions


//  For Language Set
const CheckLanguage = atom({
  key: "language",
  default: getSessionStorage('lang', 'en') || false
});
//  /For Language Set


//  For Check Login
const CheckLoginAtom = atom({
  key: "_CheckLogin",
  default: getSessionStorage('_login') || false
});
//  /For Check Login

export { CheckLoginAtom, CheckLanguage }