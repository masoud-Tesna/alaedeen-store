// Layouts:
import DefaultTopPanel from "./defautl/DefaultTopPanel";
import TopPanelWhitBackIcon from "./defautl/TopPanelWhitBackIcon";

// import custom hooks:
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

  if (pathName === 'chat') {
    return <TopPanelWhitBackIcon />
  }

  // if get default Header:
  return <DefaultTopPanel />
};

export default TopPanel;