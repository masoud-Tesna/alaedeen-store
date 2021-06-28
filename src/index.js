import React from 'react';
import ReactDOM from 'react-dom';
import StoreRoute from "./StoreRoute";

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

