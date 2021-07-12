// import Footer:
import { DefaultFooter } from './default/DefaultFooter';
import { useParsPathName } from "../../functions/Helper";

const SiteFooter = () => {
  // Get Location:
  const pathName = useParsPathName();

  // Check pathName For Set Default Top Panel Or Not:
  if (pathName === 'products' || pathName === 'about' || pathName === 'manufacturing' || pathName === 'certificate' || pathName === 'r-and-d-capability' || pathName === 'quality-control' || pathName === 'export-capability') {
    return (
      <>

      </>
    );
  }

  // if get default Top panel:
  return <DefaultFooter />
};

export { SiteFooter };