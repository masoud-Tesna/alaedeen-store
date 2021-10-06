import React, { useLayoutEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";

// import Styles For default:
import './styles.less';

// Ant Design Import:
import { Row, Col, Space, Tabs, Divider, Skeleton, Drawer, Collapse } from 'antd';

// import icons:
import verifiedTop from '../../../assets/images/verifiedTop.png';
import ISO1799 from '../../../assets/images/ISO1799.png';

// import helper functions:
import { __, useParsPathName } from "../../../functions/Helper";

import { useTranslation } from "react-i18next";

import { useWindowSize } from "../../../functions";
import LoaderSpinner from "../../blocks/static_templates/LoadSpinner";
import { useGetStoreState } from "../../../contexts/store/StoreContext";

import { logout, useDispatchAuthState, useGetAuthState } from "../../../contexts/user/UserContext";
import { DownOutlined } from "@ant-design/icons";
import { useGetConfig, useConfigDispatch, changeLanguageAction, changeCurrencyAction } from "../../../contexts/config/ConfigContext";

const { TabPane } = Tabs;

const DefaultHeader = () => {

  const { isLoading, name: storeName, logo: storeLogo, storeSettings } = useGetStoreState();

  const headerColorCode = storeSettings?.header?.color_code?.value || '#707070';

  const headerBgImg = storeSettings?.header?.background_image?.value || "";

  const { user_data } = useGetAuthState();

  const { AuthDispatch } = useDispatchAuthState();

  const { t } = useTranslation();

  // get initial config:
  const { config } = useGetConfig();
  const { configDispatch } = useConfigDispatch();

  // Get Width Window:
  const { width } = useWindowSize();

  const history = useHistory();

  const location = useLocation();

  // Get Location pathName:
  const pathName = useParsPathName();

  // initial state for show spinner:
  const [ showLoadSpinner, setShowLoadSpinner ] = useState(false);

  // function for change language:
  const handleChangeLanguage = (lang) => {
    if (lang !== config.language) {
      setShowLoadSpinner(true);

      configDispatch(changeLanguageAction(lang));
      setTimeout(() => {
        setShowLoadSpinner(false);
        setVisibleHeaderMenuXs(false);
      }, 1000);

    }
  }

  // function for change currency:
  const handleChangeCurrency = (e) => {
    if (e.target.value !== config.currency) {
      setShowLoadSpinner(true);

      configDispatch(changeCurrencyAction(e.target.value));
      setTimeout(() => {
        setShowLoadSpinner(false);
        closeHeaderMenuXs();
      }, 1000);

    }
  }

  const tabCallBackHandle = (page) => {
    pathName !== page && ( page === 'homePage' ? history.push('/') :  history.push(`/${page}`));
  };

  const goToPreviousPath = () => {
    location.pathname === '/' ?
      window.location.href = "http://alaedeen.com" :
      history.goBack();
  }


  // initial state for drawer Menu (mobile version):
  const [visibleHeaderMenuXs, setVisibleHeaderMenuXs] = useState(false);

  // function for show drawer Menu:
  const showHeaderMenuXs = () => {
    setVisibleHeaderMenuXs(true);
  }

  // function for close drawer Menu:
  const closeHeaderMenuXs = () => {
    setVisibleHeaderMenuXs(false);
  }

  // function for handle sign out
  const handleLogOut = () => {
    AuthDispatch(logout(AuthDispatch));
    closeHeaderMenuXs();
  }

  const [scrolled, setScrolled] = useState("");

  const handleScroll = () => {
    const offsetY = window.scrollY;

    if(offsetY > 172.5 ){
      setScrolled("scrolled");
    }
    else{
      setScrolled("");
    }
  };

  useLayoutEffect(() => {

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, []);

  if(showLoadSpinner) { /*Show Loading Spinner if Change language*/
    return <LoaderSpinner spinner={'default'} spinnerColor={'#2e8339'}/>
  }

  return (
    <>

      {/* if Screen Width <= 768px (Mobile) render drawer Menu: */}
      {width <= 768 &&
        <Drawer
          placement="right"
          className="shadow-lg m-0 p-0 topPanel--menuXs"
          closable={false}
          width={"75%"}
          onClose={closeHeaderMenuXs}
          visible={visibleHeaderMenuXs}
        >
          <Row className="topPanel--menuXs__container">
            <Col span={24} className="align-self-start topPanel--menuXs__topSection">
              <Col span={24} className="menuXs--bgTopSection__container">
                <Row className="h-100 px-4" align="middle" gutter={16}>

                  { user_data.load ?
                    <>
                      <Skeleton avatar paragraph={{ rows: 1 }} />
                    </> :
                    <>
                      { user_data.auth.user_id ?
                        <>
                          <Col span={ user_data.auth.company_logo ? 7 : 5 }>
                            { user_data.auth.company_logo ?
                              <span className="content--account__companyLogo">
                                      <img src={user_data.auth.company_logo.logo_path} alt=""/>
                                    </span> :
                              <i className="fal fa-user text-white vv-font-size-4-5" />
                            }
                          </Col>

                          <Col span={ user_data.auth.company_logo ? 17 : 19 }>
                            <Row gutter={[0, 5]}>
                              <Col span={24} className="text-white vv-font-size-1-7 font-weight-bolder">
                                {t(__('Hello'))}
                              </Col>
                              <Col span={24} className="d-flex">
                                <div className="text-white vv-font-size-1-5 font-weight-600 text-truncate" style={{ direction: 'rtl' }}>
                                  {user_data.auth.company ?
                                    <>{ user_data.auth.company }</> :
                                    <>{ ` ${user_data.auth.firstname} ${user_data.auth.lastname} ` }</>
                                  }
                                </div>

                                <Divider type="vertical" className="border-70 my-auto"/>

                                <div className="text-white vv-font-size-1-5 font-weight-600 cursor-pointer" onClick={handleLogOut}>
                                  { t(__('sign out')) }
                                </div>
                              </Col>
                            </Row>
                          </Col>
                        </> :
                        <>
                          <Col>
                            <i className="fal fa-user text-white vv-font-size-4-5" />
                          </Col>

                          <Col>
                            <Row gutter={[0, 5]}>
                              <Col span={24} className="text-white vv-font-size-1-7 font-weight-bolder">
                                {t(__('Hello'))}
                              </Col>
                              <Col span={24}>
                                <Link className="text-white vv-font-size-1-7 font-weight-600" to={"/sign-in"} >
                                  {t(__(' Sign in'))}
                                </Link>
                                <Divider type="vertical" className="border-70"/>
                                <a className="text-white vv-font-size-1-7 font-weight-600" href="https://alaedeen.com/horn/register/">
                                  {t(__('Join Free'))}
                                </a>
                              </Col>
                            </Row>
                          </Col>
                        </>
                      }
                    </>
                  }

                </Row>
              </Col>
            </Col>

            <Col span={24} className="topPanel--menuXs__middleSection">
              <Row className="pt-4 px-4">
                <Col className="menuXs--sideNavLinks__items" span={24}>
                  <Space direction="vertical" size={"middle"} className="w-100">
                    <Link className="menuXs--sideNavLinks__item d-block" to={"/"} >
                      <Row justify={"space-between"}>
                        <Col className="text-center" span={5}>
                          <i className="fal fa-home text-primary vv-font-size-3" />
                        </Col>
                        <Col span={18} className="my-auto">
                          <span className="text-70 vv-font-size-1-6">{t(__('Home'))}</span>
                        </Col>
                      </Row>
                    </Link>

                    <div className="menuXs--sideNavLinks__item languagesCurrencyCollapse d-block">
                      <Row justify={"space-between"}>
                        <Col className="text-center" span={5}>
                          <i className="fal fa-globe text-primary vv-font-size-3" />
                        </Col>
                        <Col style={{ paddingTop: '0.9rem' }} span={18}>
                          <Collapse
                            expandIconPosition={"right"}
                            ghost
                            expandIcon={({ isActive }) => <DownOutlined rotate={ config.language === 'en' ? (isActive ? 180 : 0) : (isActive ? 0 : 1)} />}
                          >
                            <Collapse.Panel header={t(__('Language & Currency'))} key="1">
                              <div className="mb-4">
                                <Row justify="space-between">
                                  <Col className="my-auto">
                                    <span className="mr-2">{t(__('Language'))}</span>
                                  </Col>
                                  <Col className="my-auto" span={12}>
                                    <select
                                      value={config.language}
                                      onChange={e => handleChangeLanguage(e.target.value)}
                                      className="w-100 text-red-a0 select-box-remove-arrow border-0 vv-font-size-1-5 p-0 mobileChangeLangSelect">
                                      <option value="en">English</option>
                                      <option value="ar">عربی</option>
                                      <option value="fa">فارسی</option>
                                    </select>
                                  </Col>
                                </Row>
                              </div>

                              <div>
                                <Row justify="space-between">
                                  <Col className="my-auto" span={12}>
                                    <span className="mr-2">{t(__('Currency'))}</span>
                                  </Col>
                                  <Col className="my-auto" span={12}>
                                    <select
                                      value={config.currency}
                                      onChange={e => handleChangeCurrency(e)}
                                      className="w-100 text-red-a0 select-box-remove-arrow border-0 vv-font-size-1-5 p-0 mobileChangeCurrencySelect">
                                      <option value="USD">US dollars</option>
                                      <option value="AED" selected="">United
                                        arab emirates dirham
                                      </option>
                                      <option value="IQD">Iraqi dinar
                                      </option>
                                      <option value="SAR">Saudi riyal
                                      </option>
                                      <option value="KWD">Kuwaiti dinar
                                      </option>
                                      <option value="BHD">Bahraini dinar
                                      </option>
                                      <option value="QAR">Qatari riyal
                                      </option>
                                    </select>
                                  </Col>
                                </Row>
                              </div>
                            </Collapse.Panel>
                          </Collapse>
                        </Col>
                      </Row>
                    </div>

                    <a className="menuXs--sideNavLinks__item d-block" href="https://alaedeen.com/horn/wishlist/" >
                      <Row justify={"space-between"}>
                        <Col className="text-center" span={5}>
                          <i className="fal fa-star text-primary vv-font-size-3" />
                        </Col>
                        <Col span={18} className="my-auto">
                          <span className="text-70 vv-font-size-1-6">{t(__('Favorites'))}</span>
                        </Col>
                      </Row>
                    </a>

                    <a className="menuXs--sideNavLinks__item d-block" href="https://alaedeen.com/horn/compare/">
                      <Row justify={"space-between"}>
                        <Col className="text-center" span={5}>
                          <i className="icon-vv-compare text-primary vv-font-size-2-5" />
                        </Col>
                        <Col span={18} className="my-auto">
                          <span className="text-70 vv-font-size-1-6">{t(__('Comparison'))}</span>
                        </Col>
                      </Row>
                    </a>

                    <a className="menuXs--sideNavLinks__item d-block" href="https://alaedeen.com/horn/index.php?dispatch=vendor_communication.threads">
                      <Row justify={"space-between"}>
                        <Col className="text-center" span={5}>
                          <i className="fal fa-envelope text-primary vv-font-size-3" />
                        </Col>
                        <Col span={18} className="my-auto">
                          <span className="text-70 vv-font-size-1-6">{t(__('Messages'))}</span>
                        </Col>
                      </Row>
                    </a>
                  </Space>
                </Col>
                <Divider className="border-bc" />
                <Col className="px-4 menuXs--sideNavBtn__items" span={24}>
                  <Space direction="vertical" size={15}>
                    <a href={`https://calendar.iranfair.com/${config.language === 'ar'? '' : config.language}`} target="_blank" rel="noreferrer" className="border border-primary text-primary w-100 d-block text-center">{t(__('International Exhibition'))}</a>
                  </Space>
                </Col>
              </Row>
            </Col>

            <Col span={24} className="bg-footer p-4 w-100 topPanel--menuXs__bottomSection">
              <Space size={15}>
                <div className="d-inline-block">
                  <i className="fad fa-download text-primary display-4" />
                </div>
                <div className="d-inline-block">
                  <div className="text-white vv-font-size-1-5 font-weight-bold">
                    {t(__('Download the Horn app'))}
                  </div>
                  <div className="text-white vv-font-size-1-2 mt-2">
                    {t(__('For 10x Faster'))}
                  </div>
                </div>
              </Space>
            </Col>
          </Row>
        </Drawer>
      }

      <Col className="header__topSection--container" span={24} style={{ backgroundColor: headerColorCode }}>
        <Row>
          <Col className="header__topSection default" span={24}>
            <div className="header__bgImage" style={{ backgroundImage: `url(${encodeURI(headerBgImg)})` }} />
            <Row className={ `header__details ${scrolled}` }>
              <Col className={ `d-md-none py-3 px-md-5 pt-md-5 header__topSection--sticky ${scrolled}` } span={24} style={{ backgroundColor: headerColorCode }}>
                <Row>
                  <Col span={1}>
                    <i className="fa fa-chevron-left vv-font-size-2 cursor-pointer text-white" onClick={() => { goToPreviousPath() }} />
                  </Col>
                  <Col span={23} className="pl-3">
                    <Row justify={"end"} gutter={10}>
                      <Col span={15}>
                        <div className="h-100" style={{ position: 'relative' }}>
                          <div className="search--bgOpacity" style={{ height: 33.45 }} />
                          <Link to={`all-categories`}>
                            <Row justify={"space-between"} align={"middle"} className="px-4 py-2 h-100">
                              <Col span={20} className="vv-font-size-1-5 text-white text-truncate pr-3 searchBox--text">{ t(__('Search In This Store')) }</Col>
                              <Col span={4}>
                                <i className="far fa-search text-white display-6 font-weight-600" />
                              </Col>
                            </Row>
                          </Link>
                        </div>
                      </Col>
                      <Col span={4} className="text-center">
                        <div style={{ position: 'relative' }} className="h-100">
                          <div className="share--bgOpacity" style={{ height: 33.45 }} />
                          <i className="fal fa-share-alt text-white vv-font-size-2-2" />
                        </div>
                      </Col>
                      <Col span={2} className="my-auto text-center">
                        <Divider type="vertical" style={{ height: 25, borderColor: '#fff' }}/>
                      </Col>
                      <Col span={3} onClick={showHeaderMenuXs}>
                        <i className="fas fa-grip-lines cursor-pointer text-white display-4" style={{ height: 33.45 }} />
                        {/*<select value={language} onChange={(e) => {handleChangeLanguage(e)}} className="border-0 bg-transparent text-white vv-font-size-1-4">
                          <option value="en">English</option>
                          <option value="fa">فارسی</option>
                          <option value="ar">عربی</option>
                        </select>*/}
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
              <Col span={24} className="px-4 pt-4 pb-3 header__details--container">
                <div className="info--bgOpacity" />
                <Row justify={"space-between"}>
                  <Col xs={24} className="header__details--contentLeft">
                    <Space size={width >= 768 ? "large" : "small"}>
                      <div className="text-center info--img__container">

                        {isLoading ?
                          <Skeleton.Input style={{ width: width < 768 ? 50 : 100, height: width < 768 ? 50 : 100 }} active={true} size={"large"} /> :
                          <img src={ storeLogo } alt={ storeName }/>
                        }


                      </div>
                      <div>
                        <Row>
                          <Col span={24}>
                            <span className="text-33 text-capitalize info--storeName">
                              {isLoading ?
                                <Skeleton.Input style={{ width: 60 }} active={true} size={"small"} /> :
                                storeName
                              }
                            </span>
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

                  {/*<Col xs={5} className="text-right">
                    <Button className="px-3 bg-a5 rounded-6 text-2d font-weight-bold header__details--followBtn" size="large">{t(__('Follow'))}</Button>
                  </Col>*/}
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>

      <Col span={24} className={ `header__bottomSection ${scrolled}` } style={{ backgroundColor: headerColorCode }}>
        <Row className="h-100 header__bottomSection--container" align={"bottom"} justify={"space-between"}>
          <Col xs={24} lg={10}>
            <Tabs activeKey={pathName} onTabClick={key => tabCallBackHandle(key)} className="header__tabContainer">
              <TabPane tab={ t(__('home')) } key="homePage" />
              <TabPane tab={ t(__('products')) } key="products" />
              <TabPane tab={ t(__('about us')) } key="about"/>
            </Tabs>
          </Col>
          <Col span={13} className="d-none d-lg-block align-self-center header__bottomSection--searchShare">
            <Row className="h-100" justify={"space-between"}>
              <Col span={16} className="header__bottomSection--search">
                <Link to={`all-categories`}>
                  <Row justify={"space-between"} align={"middle"} className="px-4 h-100">
                    <Col className="vv-font-size-1-8 text-47 header__bottomSection--searchText">{ t(__('Search In This Store')) }</Col>
                    <Col>
                      <i className="far fa-search text-70 display-6 font-weight-600" />
                    </Col>
                  </Row>
                </Link>
              </Col>
              <Col className="header__bottomSection--share">
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