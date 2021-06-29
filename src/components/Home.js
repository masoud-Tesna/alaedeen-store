import { useEffect } from 'react';

// import Custom Hooks:
import { useWindowSize } from '../functions';

// import Style LESS File:
import './styles/Home.less';

// import Design:
import { Col, Row } from "antd";

// import blocks:
import HomeCarousel from "../layouts/blocks/static_templates/HomeCarousel";

import CategoriesMultiColumn from "../layouts/blocks/categories/CategoriesMultiColumn";
import HomeLogisticsBanner from "../layouts/blocks/static_templates/HomeLogisticsBanner";
import { OneRequestMultipleQuotes as RequestForm } from "../layouts/blocks/static_templates/OneRequestMultipleQuotes";
import RequestsList from "../layouts/blocks/static_templates/RequestsList";
import Stats from "../layouts/blocks/static_templates/Stats";
import ShipProductsBanner from "../layouts/blocks/static_templates/ShipProductsBanner";
import TopRankingProducts from "../layouts/blocks/static_templates/TopRankingProducts";
import PremiumFactories from "../layouts/blocks/static_templates/PremiumFactories";
import RecommendedProducts from "../layouts/blocks/static_templates/RecommendedProducts";
import RecentlyProductsView from "../layouts/blocks/static_templates/RecentlyProductsView";
import TopBrands from "../layouts/blocks/static_templates/TopBrands";
import WhatHorn from "../layouts/blocks/static_templates/WhatHorn";
import HomePageShowProducts from "../layouts/blocks/static_templates/HomePageShowProducts";

const Home = () => {

  const { width } = useWindowSize();

  useEffect(() => {
    document.title = "hornb2b.com: Iranian Exporters, Manufacturers, Logistics, Suppliers Directory, B2B Business Directory"
  }, []);

  return (
    <>
      <div className="top--section bg-white">
        <Row>
          <Col span={24}>
            <HomeCarousel />
          </Col>
          <Col span={24}>
            <CategoriesMultiColumn />
          </Col>
        </Row>
      </div>

      <div className="stats--section">
        <Stats />
      </div>

      <div className="shipProductsBanner--section product--section">
        <Row className="rounded-10 shadow-y-2 bg-white section--row" gutter={{ xs: 0, lg: 16 }}>
          <Col className="pl-0" span={10}>
            <ShipProductsBanner />
          </Col>
          <Col className="pr-0" span={14}>
            <HomePageShowProducts />
          </Col>
        </Row>
      </div>

      <div className="topRankingProducts--section">
        <TopRankingProducts />
      </div>

      <div className="PremiumFactories--section">
        <PremiumFactories />
      </div>

      <div className="recommended--section">
        <RecommendedProducts />
      </div>

      <div className="visitsProducts--section">
        <RecentlyProductsView />
      </div>

      <div className="topBrands--section">
        <TopBrands/>
      </div>

      <div className="d-none d-lg-block whatHorn--section">
        <WhatHorn />
      </div>
    </>
  );
};

export { Home };