import React from 'react';
import ReactDOM from 'react-dom';
import StoreRoute from "./StoreRoute";

import { RecoilRoot } from "recoil";

const layoutRender = () => {
  return (
    <RecoilRoot>
      <StoreRoute />
    </RecoilRoot>
    );
}

ReactDOM.render(
  layoutRender(),
  document.getElementById('root')
);

