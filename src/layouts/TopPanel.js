import { useLocation } from 'react-router-dom';

import TopPanelDefault       from "./top-panel/TopPanelDefault";
import TopPanelAllCategories from "./top-panel/TopPanelAllCategories";
import TopPanelSendInquiry   from "./top-panel/TopPanelSendInquiry";
import TopPanelChat          from "./top-panel/TopPanelChat";

const TopPanel = () => {

  const location = useLocation();

  if (location.pathname === '/all-categories') {
    return (
      <TopPanelAllCategories />
    );
  }
  else if (location.pathname === '/send-inquiry') {
    return (
      <TopPanelSendInquiry />
    );
  }
  else if (location.pathname === '/chat') {
    return (
      <TopPanelChat />
    );
  }

  return (
    <TopPanelDefault />
  );
}

export default TopPanel;
