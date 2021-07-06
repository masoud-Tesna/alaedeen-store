import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

// import Footer:
import { DefaultFooter } from './default/DefaultFooter';
import { useParsPathName } from "../../functions/Helper";

const SiteFooter = () => {
  // Get Location:
  const pathName = useParsPathName();

  // Check pathName For Set Default Top Panel Or Not:
  if (pathName === 'products' || pathName === 'about') {
    return (
      <>

      </>
    );
  }

  // if get default Top panel:
  return <DefaultFooter />
};

export { SiteFooter };