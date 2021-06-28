import { Link, useHistory, useLocation } from "react-router-dom";

// import Styles For default:
import './styles.less';

// Ant Design Import:
import { Row, Col, Button, Space, Tabs } from 'antd';

// import logo:
import logoXl from '../../../assets/images/logoXl.png';
import nilperLogo from '../../../assets/images/nilperLogo.png';
import verifiedTop from '../../../assets/images/verifiedTop.png';
import ISO1799 from '../../../assets/images/ISO1799.png';

// import helper functions:
import { __ } from "../../../functions/Helper";

import { useTranslation } from "react-i18next";
import React, { useEffect, useState } from "react";

const { TabPane } = Tabs;

const DefaultHeader = () => {

  const { t } = useTranslation();

  const history = useHistory();

  const location = useLocation();

  const [tabActive, setTabActive] = useState(null);

  const tabCallBackHandle = (page) => {
    tabActive !== page && history.push(page);
  }

  useEffect(() => {

    const path = location.pathname;
    setTabActive(path);

  }, [location.pathname]);

  return (
    <>
      <Col className="header__bgColor" span={24}>
        <Row>
          <Col className="header__topSection default" span={24}>
            <div className="header__bgImage" />
            <Row className="header__details px-5 pt-5">
              <Col span={24} className="px-4 pt-4 pb-3 header__details--container">
                <div className="info--bgOpacity" />
                <Row justify={"space-between"}>
                  <Col className="header__details--contentLeft">
                    <Space size={"large"}>
                      <div className="text-center info--img__container">
                        <img className="info--img__img" src={nilperLogo} alt="Nilper" />
                      </div>
                      <div>
                        <Row>
                          <Col span={24}>
                            <span className="vv-font-size-3 text-33 text-capitalize">Nilper</span>
                          </Col>
                          <Col className="mt-5" span={24}>
                            <Space size={"small"}>
                              <div>
                                <Row>
                                  <Col className="text-center" span={24}>
                                    <i className="flag-icon flag-icon-ir vv-font-size-3" />
                                  </Col>
                                  <Col className="text-center" span={24}>
                                    IR
                                  </Col>
                                </Row>
                              </div>

                              <div>
                                <Row>
                                  <Col className="text-center" span={24}>
                                    <img className="info--verifiedImg" src={verifiedTop} alt="verified" />
                                  </Col>
                                  <Col className="text-center" span={24}>
                                    { t(__('verified')) }
                                  </Col>
                                </Row>
                              </div>

                              <div>
                                <Row>
                                  <Col className="text-center" span={24}>
                                    <img className="info--verifiedImg" src={ISO1799} alt="ISO1799" />
                                  </Col>
                                  <Col className="text-center" span={24}>
                                    { t(__('ISO 1799')) }
                                  </Col>
                                </Row>
                              </div>
                            </Space>
                          </Col>
                        </Row>
                      </div>
                    </Space>
                  </Col>

                  <Col>
                    <Button className="px-3 bg-a5 rounded-6 text-2d vv-font-size-1-3 font-weight-bold header__details--followBtn" size="large">{t(__('Follow'))}</Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
      <Col span={24} className="bg-f2 px-5 header__bottomSection">
        <Row className="h-100 header__bottomSection--container" align={"bottom"} justify={"space-between"}>
          <Col xs={24} lg={10}>
            <Tabs activeKey={tabActive} onTabClick={key => tabCallBackHandle(key)} className="header__tabContainer">
              <TabPane tab={ t(__('home')) } key="/" />
              <TabPane tab={ t(__('products')) } key="/products" />
              <TabPane tab={ t(__('about us')) } key="/about"/>
            </Tabs>
          </Col>
          <Col span={10} className="d-none d-lg-block align-self-center header__bottomSection--searchShare">
            <Row className="h-100" justify={"space-between"}>
              <Col span={14} className="header__bottomSection--search">
                <Link to={`all-categories`}>
                  <Row justify={"space-between"} align={"middle"} className="px-4 h-100">
                    <Col className="vv-font-size-1-8 text-47 header__bottomSection--searchText">{ t(__('Search In This Store')) }</Col>
                    <Col>
                      <i className="far fa-search text-70 display-6 font-weight-600" />
                    </Col>
                  </Row>
                </Link>
              </Col>
              <Col className="header__bottomSection--share" span={5}>
                <Row justify={"space-between"} align={"middle"} className="px-4 h-100 cursor-pointer">
                  <Col className="vv-font-size-1-8 text-black header__bottomSection--searchText">{ t(__('share')) }</Col>
                  <Col>
                    <i className="far fa-share-alt text-black display-6 font-weight-bolder" />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default DefaultHeader;