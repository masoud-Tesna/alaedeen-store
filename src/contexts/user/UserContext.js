import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";

// import use reducer:
import { UserReducer } from './UserReducer';

// import user initial state:
import { UserInitialState } from './UserInitialState';

// import Action Creator:
import { signInAction, logOutAction, checkSignInLoadingAction, signInLoadingFalseAction } from './UserActionCreators';

// import LoaderSpinner:
import LoaderSpinner from '../../layouts/blocks/static_templates/LoadSpinner';

// import config context:
import { useGetConfig } from "../config/ConfigContext";

// import Cookies Package:
import { Cookies } from "react-cookie";
import { useMutation } from "react-query";

// User Context Create:
const userContext = createContext();

// create User Context Provide:
export function UserProvider ({ children }) {

  // use Cookies Class:
  const Cookie = new Cookies();

  // get initial config:
  const { config } = useGetConfig();

  // useReducer For Language use in app
  const [auth, dispatch] = useReducer(
    UserReducer,
    UserInitialState
  );

  const token = Cookie.get('_token');

  // function for sign in by token:
  const signInByToken = async () => {
    const { data } = await axios.post(`https://alaedeen.com/horn/login-api/?lang_code=${config.language}`, { token: token });
    return data;
  };

  const { mutate } = useMutation(signInByToken, {
    onSuccess: res => {
      dispatch(signInAction(res?.auth, token, true));
    }
  });

  useEffect((() => {

    if (token) {
      dispatch(checkSignInLoadingAction());
      mutate();
    } else {
      dispatch(signInLoadingFalseAction());
    }

  }), []);


  return (
    <userContext.Provider value={{ auth, dispatch }}>

      {auth.load &&
        <LoaderSpinner spinner={'default'} spinnerColor={'#2e8339'}/>
      }

      {children}
    </userContext.Provider>
  );
}

async function signOutApi() {
  return await axios.get(`https://alaedeen.com/horn/logout-api/`);
}

export async function logout(dispatch) {
  dispatch(checkSignInLoadingAction());

  signOutApi()
    .then(() => {
      dispatch(logOutAction());
    });
}

// get current user data
export function useGetAuthState() {
  const user_data = useContext(userContext).auth;
  return { user_data };
}

export function useDispatchAuthState() {
  const AuthDispatch = useContext(userContext).dispatch;
  return { AuthDispatch };
}

export { signInAction, checkSignInLoadingAction, checkRememberAction } from './UserActionCreators';
