// import Custom Hooks:
import { useWindowSize } from '../../functions';

// Layouts:
import DefaultHeader from "./default/DefaultHeader";
import { useParsPathName } from "../../functions/Helper";

const Header = () => {

  // Get Width Window:
  const { width } = useWindowSize();

  // Get Location pathName:
  const pathName = useParsPathName();

  // Check pathName For Set Default Header Or Not:
  if ((pathName[0] === 'factories' && width <= 991) || (pathName[0] === 'about' && pathName[1]) || pathName[0] === 'chat' || pathName[0] === 'all-categories') {
    return <></>
  }

  // if get default Top panel:
  return <DefaultHeader />
};

export { Header };