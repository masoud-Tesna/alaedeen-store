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
import PopularProducts from "../layouts/blocks/static_templates/PopularProducts";
import LatestProductsView from "../layouts/blocks/static_templates/LatestProductsView";

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

      <div className="popular--section">
        <PopularProducts />
      </div>

      <div className="latest--section">
        <LatestProductsView />
      </div>
    </>
  );
};

export { Home };