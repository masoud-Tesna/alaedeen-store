import React, { useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";

// import Styles For default:
import './styles.less';

// Ant Design Import:
import { Row, Col, Button, Space, Tabs, Divider } from 'antd';

// import logo:
import nilperLogo from '../../../assets/images/nilperLogo.png';
import verifiedTop from '../../../assets/images/verifiedTop.png';
import ISO1799 from '../../../assets/images/ISO1799.png';

// import helper functions:
import { __, useParsPathName } from "../../../functions/Helper";

import { useTranslation } from "react-i18next";

import { useWindowSize } from "../../../functions";
import {
  changeLanguageAction,
  useDispatchLanguageState,
  useGetLanguageState
} from "../../../contexts/language/LanguageContext";
import LoaderSpinner from "../../blocks/static_templates/LoadSpinner";

const { TabPane } = Tabs;

const DefaultHeader = () => {

  const { t } = useTranslation();

  // initial state for language:
  const { language } = useGetLanguageState();
  const { languageDispatch } = useDispatchLanguageState();

  // Get Width Window:
  const { width } = useWindowSize();

  const history = useHistory();

  const location = useLocation();

  // Get Location pathName:
  const pathName = useParsPathName();

  // initial state for show spinner:
  const [ showLoadSpinner, setShowLoadSpinner ] = useState(false);

  // function for change language:
  function handleChangeLanguage(e) {
    if (e.target.value !== language) {
      setShowLoadSpinner(true);

      languageDispatch(changeLanguageAction(e.target.value));
      setTimeout(() => {
        setShowLoadSpinner(false);
      }, 1000);

    }
  }

  const tabCallBackHandle = (page) => {
    pathName !== page && ( page === 'homePage' ? history.push('/') :  history.push(`/${page}`));
  };

  const goToPreviousPath = () => {
    location.pathname === '/' ?
      window.location.href = "http://hornb2b.com" :
      history.goBack();
  }


  const [scrolled,setScrolled]=useState(false);

  const [widthPage,setWidthPage]=useState();

  const handleScroll = () => {
    const offsetY = window.scrollY;

    if (widthPage >= 768) {
      setScrolled(false);
    } // if WidthPage state value <= 576 change condition for scroll and set class name
    else if (widthPage >= 577) {
      if(offsetY > 128 ){
        setScrolled(true);
      }
      else{
        setScrolled(false);
      }
    } // if WidthPage state value >= 577 change condition for scroll and set class name
    else if (widthPage <= 576) {
      if(offsetY > 124 ){
        setScrolled(true);
      }
      else{
        setScrolled(false);
      }
    } // if WidthPage state value <= 576 change condition for scroll and set class name
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll); //if Scroll Page Run handleScroll function
    window.addEventListener('load', handleScroll); //if Load Page in bottom page...

    window.addEventListener('load', () => { setWidthPage(window.innerWidth);}); //if Load Page Update widthPage State Value
    window.addEventListener('resize', () => { setWidthPage(window.innerWidth);}); //if Resize Page Update widthPage State Value
  })

  let x=[''];
  if(scrolled){
    x.push('scrolled');
  }

  return (
    <>
      {/*Show Loading Spinner if Change language*/}
      <div className={ `${ showLoadSpinner ? 'd-block' : 'd-none' }` }>
        <LoaderSpinner spinner={'default'} spinnerColor={'#2e8339'}/>
      </div>

      <Col className="header__bgColor" span={24}>
        <Row>
          <Col className="header__topSection default" span={24}>
            <div className="header__bgImage" />
            <Row className={ `header__details ${x.join(" ")}` }>
              <Col className={ `d-md-none py-3 px-md-5 pt-md-5 header__topSection--sticky ${x.join(" ")}` } span={24}>
                <Row>
                  <Col span={2}>
                    <i className="fa fa-chevron-left vv-font-size-2 cursor-pointer text-white" onClick={() => { goToPreviousPath() }} />
                  </Col>
                  <Col span={22}>
                    <Row justify={"end"} gutter={10}>
                      <Col span={12}>
                        <div style={{ position: 'relative' }}>
                          <div className="search--bgOpacity" />
                          <Link to={`all-categories`}>
                            <Row justify={"space-between"} align={"middle"} className="px-4 py-2 h-100">
                              <Col span={20} className="vv-font-size-1-5 text-white text-truncate pr-3">{ t(__('Search In This Store')) }</Col>
                              <Col span={4}>
                                <i className="far fa-search text-white display-6 font-weight-600" />
                              </Col>
                            </Row>
                          </Link>
                        </div>
                      </Col>
                      <Col span={4} className="text-center">
                        <div style={{ position: 'relative' }} className="h-100">
                          <div className="share--bgOpacity" />
                          <i className="fal fa-share-alt text-white vv-font-size-2-2" />
                        </div>
                      </Col>
                      <Col span={2} className="my-auto text-center">
                        <Divider type="vertical" style={{ height: 25, borderColor: '#fff' }}/>
                      </Col>
                      <Col span={6} className="my-auto">
                        <select value={language} onChange={(e) => {handleChangeLanguage(e)}} className="border-0 bg-transparent text-white vv-font-size-1-4">
                          <option value="en">English</option>
                          <option value="fa">فارسی</option>
                          <option value="ar">عربی</option>
                        </select>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
              <Col span={24} className="px-4 pt-4 pb-3 header__details--container">
                <div className="info--bgOpacity" />
                <Row justify={"space-between"}>
                  <Col xs={19} className="header__details--contentLeft">
                    <Space size={width >= 768 ? "large" : "small"}>
                      <div className="text-center info--img__container">
                        <img className="info--img__img" src={nilperLogo} alt="Nilper" />
                      </div>
                      <div>
                        <Row>
                          <Col span={24}>
                            <span className="text-33 text-capitalize info--storeName">Nilper</span>
                          </Col>
                          <Col className="mt-5" span={24}>
                            <Space size={"small"}>
                              <div>
                                <Row>
                                  <Col className="text-center" span={24}>
                                    <i className="flag-icon flag-icon-ir" />
                                  </Col>
                                  <Col className="text-center text-92 info--icon__title" span={24}>
                                    IR
                                  </Col>
                                </Row>
                              </div>

                              <div>
                                <Row>
                                  <Col className="text-center" span={24}>
                                    <img className="info--verifiedImg" src={verifiedTop} alt="verified" />
                                  </Col>
                                  <Col className="text-center text-92 info--icon__title" span={24}>
                                    { t(__('verified')) }
                                  </Col>
                                </Row>
                              </div>

                              <div>
                                <Row>
                                  <Col className="text-center" span={24}>
                                    <img className="info--verifiedImg" src={ISO1799} alt="ISO1799" />
                                  </Col>
                                  <Col className="text-center text-92 info--icon__title" span={24}>
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

                  <Col xs={5} className="text-right">
                    <Button className="px-3 bg-a5 rounded-6 text-2d font-weight-bold header__details--followBtn" size="large">{t(__('Follow'))}</Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>

      <Col span={24} className={ `bg-f2 header__bottomSection ${x.join(" ")}` }>
        <Row className="h-100 header__bottomSection--container" align={"bottom"} justify={"space-between"}>
          <Col xs={24} lg={10}>
            <Tabs activeKey={pathName} onTabClick={key => tabCallBackHandle(key)} className="header__tabContainer">
              <TabPane tab={ t(__('home')) } key="homePage" />
              <TabPane tab={ t(__('products')) } key="products" />
              <TabPane tab={ t(__('about us')) } key="about"/>
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