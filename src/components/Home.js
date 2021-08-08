import { useEffect } from 'react';

// import Style LESS File:
import './styles/Home.less';

// import Design:
import { Col, Row } from "antd";

// import blocks:
import HomeCarousel from "../layouts/blocks/static_templates/HomeCarousel";
import CategoriesMultiColumn from "../layouts/blocks/categories/CategoriesMultiColumn";
import PopularProducts from "../layouts/blocks/static_templates/PopularProducts";
import LatestProductsView from "../layouts/blocks/static_templates/LatestProductsView";
import ShowVideoEmbed from "../layouts/blocks/static_templates/ShowVideoEmbed";
import AgentInfo from "../layouts/blocks/static_templates/AgentInfo";
import { useSetLoaded } from "../functions/Helper";
import LoadSpinner from "../layouts/blocks/static_templates/LoadSpinner";

const Home = () => {

  const { isLoaded } = useSetLoaded();

  useEffect(() => {
    document.title = "alaedeen.com: Iranian Exporters, Manufacturers, Logistics, Suppliers Directory, B2B Business Directory"
  }, []);

  if (isLoaded) {
    return <LoadSpinner spinner={'default'} spinnerColor={'#2e8339'} />
  }

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

      <div className="shadow-bottom popular--section">
        <PopularProducts />
      </div>

      <div className="shadow-bottom latest--section">
        <LatestProductsView />
      </div>

      <div className="showVideoEmbed--section">
        <ShowVideoEmbed embedLink="https://www.aparat.com/video/video/embed/videohash/A8HYE/vt/frame?isamp" extraClassName={'homePage'} />
      </div>

      <div className="agentInfo--section">
        <AgentInfo />
      </div>
    </>
  );
};

export { Home };