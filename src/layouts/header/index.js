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
  if ((pathName === 'factories' && width <= 991) || pathName === 'manufacturing' || pathName === 'certificate' || pathName === 'r-and-d-capability' || pathName === 'quality-control' || pathName === 'export-capability' || pathName === 'chat') {
    return (
      <>

      </>
    );
  }

  // if get default Top panel:
  return <DefaultHeader />
};

export { Header };