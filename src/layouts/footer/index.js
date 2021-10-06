// import Footer:
import { DefaultFooter } from './default/DefaultFooter';
import { useParsPathName } from "../../functions/Helper";

const SiteFooter = () => {
  // Get Location:
  const pathName = useParsPathName();

  // Check pathName For Set Default Top Panel Or Not:
  if (pathName[0] === 'products' || pathName[0] === 'about' || pathName[0] === 'chat' || pathName[0] === 'all-categories') {
    return <></> // remove Footer
  }

  // if get default Top panel:
  return <DefaultFooter />
};

export { SiteFooter };