import { useEffect, useState } from "react";

// Layouts:
import DefaultTopPanel from "./defautl/DefaultTopPanel";
import TopPanelWhitBackIcon from "./defautl/TopPanelWhitBackIcon";

// import custom hooks:
import { useParsPathName } from "../../functions/Helper";


const TopPanel = () => {

  // Get Location:
  const pathName = useParsPathName();

  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offsetY = window.scrollY;

    // New
    if(offsetY > 40 ){
      setScrolled(true);
    }else {
      setScrolled(false);
    }

  }

  useEffect(() => {

    window.addEventListener('scroll', handleScroll); //if Scroll Page Run handleScroll function

    window.addEventListener('load', () => {
      //if Load Page Update widthPage State Value
    });
    window.addEventListener('resize', () => {
      //if Resize Page Update widthPage State Value
    });

  }, [handleScroll]);

  // Check pathName For Set Default Top Panel Or Not:
  if (pathName === 'pathName') {
    return <></> // remove TopPanel
  }

  if (pathName === 'chat' || pathName === 'all-categories') {
    return <TopPanelWhitBackIcon scrolledClass={ scrolled && 'scrolled' } pathName={pathName} />
  }

  // if get default Header:
  return <DefaultTopPanel />
};

export default TopPanel;