import { useLayoutEffect, useState } from "react";

// Layouts:
import DefaultTopPanel from "./defautl/DefaultTopPanel";
import TopPanelWhitBackIcon from "./defautl/TopPanelWhitBackIcon";

// import custom hooks:
import { useParsPathName } from "../../functions/Helper";


const TopPanel = () => {

  // Get Location:
  const pathName = useParsPathName();

  const [scrolled, setScrolled] = useState("");

  const handleScroll = () => {
    if (window.scrollY > 40) {
      setScrolled("scrolled");
    } else {
      setScrolled("");
    }
  };

  useLayoutEffect(() => {

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, []);

  // Check pathName For Set Default Top Panel Or Not:
  if (pathName[0] === 'pathName') {
    return <></> // remove TopPanel
  }

  if (pathName[0] === 'chat' || pathName[0] === 'all-categories') {
    return <TopPanelWhitBackIcon scrolledClass={ scrolled } pathName={pathName[0]} />
  }

  // if get default Header:
  return <DefaultTopPanel />
};

export default TopPanel;