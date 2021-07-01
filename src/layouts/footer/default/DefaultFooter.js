// import Styles For default:
import './styles.less';

// Ant Design Import:
import { Row, Col, Space, Button } from 'antd';

// import Custom Hooks:
import { useGetApi, useWindowSize } from '../../../functions';

// import language context:
import { useGetLanguageState } from "../../../contexts/language/LanguageContext";

// import logo:
import appleStore from "../../../assets/images/appleStore.svg";
import googlePlay from "../../../assets/images/googlePlay.svg";

// import helper functions:
import { __ } from '../../../functions/Helper';

import { useTranslation } from "react-i18next";
import React from "react";

const DefaultFooter = () => {

  const { t } = useTranslation();

  const { width } = useWindowSize();

  let spaceSize;

  if (width >= 992) {
    spaceSize = 'large';
  }else{
    spaceSize = 'small';
  }

  // initial state for language:
  const { language } = useGetLanguageState();

  const { items } = useGetApi(`home-categories-api`, '', 'categories');

  // set initial link for instagram related to each language:
  let instagramLink = language === 'en' ? "https://instagram.com/hornb2b" : language === 'fa' ? "https://instagram.com/hornb2b.ir" : language === 'ar' ? "https://instagram.com/horn.ar" : "https://instagram.com/hornb2b";

  return (
    <Row className="bg-f6 pt-md-5 footer--container" justify={"center"}>
      <Col span={24} className="footer--content">
        <Row className="row-cols-2 row-cols-md-3" gutter={[6, 24]}>
          <Col className="text-47">{ t(__('Order registration guide')) }</Col>
          <Col className="text-47">{ t(__('Warranty terms')) }</Col>
          <Col className="text-47">{ t(__('Privacy')) }</Col>
          <Col className="text-47 text-uppercase">{ t(__('FAQ')) }</Col>
          <Col className="text-47">{ t(__('Terms and Conditions')) }</Col>
          <Col className="text-47">{ t(__('Download')) }</Col>
        </Row>
      </Col>
    </Row>
  );
};

export { DefaultFooter };