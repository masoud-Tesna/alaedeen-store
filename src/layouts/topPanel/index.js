// Components:
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

// import Custom Hooks:
import { useWindowSize } from '../../functions';

// Layouts:
import DefaultTopPanel from "./defautl/DefaultTopPanel";
import TopPanelWhitBackIcon from "./defautl/TopPanelWhitBackIcon";
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