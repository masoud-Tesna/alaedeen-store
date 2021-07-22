// Layouts:
import DefaultTopPanel from "./defautl/DefaultTopPanel";
import { useParsPathName } from "../../functions/Helper";

const TopPanel = () => {
  // Get Location pathName:
  const pathName = useParsPathName();

  // Check pathName For Set Default Top Panel Or Not:
  if (pathName === 'pathName') {
    return (
      <>

      </>
    )
  }

  // if get default Header:
  return <DefaultTopPanel />
};

export default TopPanel;