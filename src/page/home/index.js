import { Col }                        from "react-bootstrap";
import ProductsGridHome               from "./ProductsGridHome";
import EmbedVideo                     from "../../layouts/common/EmbedVideo";
import AgentInfo                      from "../../layouts/blocks/AgentInfo";
import CategoriesSwiper               from "../../layouts/blocks/CategoriesSwiper";
import Header                         from "../../layouts/Header";
import FooterLinks                    from "../../layouts/blocks/FooterLinks";
import { useTranslate as __ }         from "../../functions/Func";
import LoaderSpinner                  from "../../layouts/blocks/LoaderSpinner";
import React, { useEffect, useState } from "react";
import { useRecoilValue }             from "recoil";
import { CheckLanguage }              from "../../recoil-atoms/Atoms";
/*import axios                  from "axios";
import { useEffect }          from "react";*/

const Home = () => {

/*  const getGeoInfo = () => {
    axios.get('https://extreme-ip-lookup.com/json/').then((response) => {
      let data = response.data;
      console.log (data);
    }).catch((error) => {
      console.log(error);
    });
  };

  useEffect(() => {
    getGeoInfo();
  }, [])*/

  const [isLoaded, setIsLoaded] = useState(true);

  const lang = useRecoilValue(CheckLanguage);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(false);
    }, 2000);
  }, []);

  return (
    <>
      { isLoaded && <LoaderSpinner /> }

      <Col className="m-0 p-0 storeHeader" xs={12}>
        <Header />
      </Col>

      <Col className="m-0 p-0 bg-white shadow-bottom storeCategoriesTop" xs={12}>
        <CategoriesSwiper />
      </Col>

      <Col className="m-0 p-0 bg-white mt-3 shadow-lg storeMainProduct" xs={12}>
        <ProductsGridHome
          gridName = { __('Popular Products') }
          lang={lang}
        />
      </Col>

      <Col className="m-0 p-0 bg-white mt-3 shadow-lg storeMainProduct" xs={12}>
        <ProductsGridHome
          gridName = { __('Latest Products') }
          lang={lang}
        />
      </Col>

      <Col className="m-0 p-0 mt-3 storeMainEmbedVideo" xs={12}>
        <EmbedVideo embedLink="https://www.aparat.com/video/video/embed/videohash/A8HYE/vt/frame?isamp" />
      </Col>

      <Col className="m-0 p-0 bg-white mt-3 shadow-y-2 storeAgentInfo" xs={12}>
        <AgentInfo />
      </Col>

      <Col className="m-0 p-0 mt-4 pb-7 storeCompanyFooterLinks" xs={12}>
        <FooterLinks />
      </Col>
    </>
  );
};

export default Home;