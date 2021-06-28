import React, { useEffect, useState }    from "react";
import { Button, Col, Dropdown, Row }    from "react-bootstrap";
import { Link, useHistory, useLocation } from "react-router-dom";

import { useTranslate as __ } from "../../functions/Func";

import { useRecoilState } from "recoil";
import { CheckLanguage}   from "../../recoil-atoms/Atoms";

const TopPanelDefault = () => {

  const [scrolled,setScrolled]=useState(false);

  const [widthPage,setWidthPage]=useState();

  const handleScroll = () => {
    const offsetY = window.scrollY;

    if (widthPage <= 576) {
      if(offsetY > 124 ){
        setScrolled(true);
      }
      else{
        setScrolled(false);
      }
    } // if WidthPage state value <= 576 change condition for scroll and set class name
    else if (widthPage >= 577) {
      if(offsetY > 128 ){
        setScrolled(true);
      }
      else{
        setScrolled(false);
      }
    } // if WidthPage state value >= 577 change condition for scroll and set class name
    else if (widthPage >= 769) {
      if(offsetY > 132 ){
        setScrolled(true);
      }
      else{
        setScrolled(false);
      }
    } // if WidthPage state value >= 769 change condition for scroll and set class name
    else if (widthPage >= 933) {
      if(offsetY > 135 ){
        setScrolled(true);
      }
      else{
        setScrolled(false);
      }
    } // if WidthPage state value >= 993 change condition for scroll and set class name
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll); //if Scroll Page Run handleScroll function

    window.addEventListener('load', () => { setWidthPage(window.innerWidth);}); //if Load Page Update widthPage State Value
    window.addEventListener('resize', () => { setWidthPage(window.innerWidth);}); //if Resize Page Update widthPage State Value
  })

  let x=[''];
  if(scrolled){
    x.push('scrolled');
  }

  const location = useLocation();

  let history = useHistory();

  const goToPreviousPath = () => {
    location.pathname === '/' ?
      window.location.href = "http://hornb2b.com" :
      history.goBack();
  }

  const [lang, setLang] = useRecoilState(CheckLanguage);

  const onClickDropDownHandle = e => {
    setLang(e.target.value);
    sessionStorage.setItem('lang', e.target.value);
    window.location.reload(false);
  }

  return (
    <>
      <Row className="m-0 p-0">
        <Col className="m-0 p-0 topPanel__bgColor" xs={12}>
          <Row className="m-0 p-0">
            <Col className="topPanel__topSection default m-0 p-0" xs={12}>
              <div className="topPanel__bgImage" />
              <Row className={`m-0 p-0 justify-content-between`}>
                <Col className={`m-0 p-0 topPanel__topSection--sticky ${x.join(" ")}`}>
                  <Row className="m-0 p-0">
                    <Col className="text-left pr-0 my-auto topPanel__topSection--col2" xs={2}>
                      <i className="fa fa-chevron-left vv-font-size-2 text-white" onClick={() => { goToPreviousPath() }} />
                      <span className="vv-font-size-2 text-white topPanel__topSection--companyName">Nilper</span>
                    </Col>
                    <Col className="text-right pl-0 topPanel__topSection--container topPanel__topSection--col10" xs={10}>
                      <Row className="m-0 p-0 justify-content-end">
                        <Col className="m-0 p-0 topPanel__topSection--form mr-3" xs={4}>
                          <div className="form--bgOpacity" />

                          <Link className="text-decoration-none" to={`all-categories`}>
                            <Row className = "m-0 p-0 h-100 align-items-center pl-2">
                              <Col className = "m-0 p-0 text-white text-left vv-font-size-1-5" xs={8}>
                                { __('search') }
                              </Col>
                              <Col className = "m-0 p-0 text-right" xs={4}>
                                <i className="far fa-search text-white vv-font-size-1-5 pr-3" />
                              </Col>
                            </Row>
                          </Link>
                        </Col>
                        <div className="m-0 p-0 topPanel__topSection--share text-center my-auto vv-cursor-pointer mr-3">
                          <div className="share--bgOpacity" />
                          <i className="fal fa-share-alt text-white vv-font-size-2-2" />
                        </div>

                        <div className="m-0 p-0 topPanel__topSection--language text-center my-auto vv-cursor-pointer border-left border-white pl-3 vv-font-size-1-3 text-white">
                          <select value={lang} onChange={(e) => {onClickDropDownHandle(e)}} className="border-0 bg-transparent text-white vv-font-size-1-3">
                            <option value="en">En</option>
                            <option value="fa">Fa</option>
                            <option value="ar">Ar</option>
                          </select>
                        </div>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="m-0 p-0 justify-content-center topPanel__middleSection">
                <Col className="px-3 pt-3 pb-0 topPanel__middleSection--info" xs={11}>
                  <div className="info--bgOpacity" />
                  <Row className="m-0 p-0">
                    <Col className="m-0 p-0 pt-1" xs={2}>
                      <div className="text-center m-0 p-0 pt-1 rounded-8 shadow info--img__container">
                        <img className="info--img__img" src={process.env.PUBLIC_URL + '/images/nilperLogo.png'} alt="Nilper" />
                      </div>
                    </Col>

                    <Col className="m-0 p-0 px-2" xs={7}>
                      <Row className="m-0 p-0">
                        <Col className="m-0 p-0" xs={12}>
                          <span className="vv-font-size-2 text-33 text-capitalize">Nilper</span>
                        </Col>
                        <Col className="m-0 p-0 mt-3" xs={12}>
                          <Row className="m-0 p-0">
                            <div className="m-0 p-0 text-center infoSectionContainer flag">
                              <Row className="m-0 p-0 h-100">
                                <Col className="m-0 p-0 pt-2 infoSection__imgContainer" xs={12}>
                                  <div className="flag-icon-background flag-icon-ir infoSection mx-auto" />
                                </Col>
                                <Col className="m-0 p-0" xs={12}>
                                  <span className="text-uppercase vv-font-size-1-1rem text-92">ir</span>
                                </Col>
                              </Row>
                            </div>
                            <div className="m-0 p-0 text-center infoSectionContainer">
                              <Row className="m-0 p-0 h-100">
                                <Col className="m-0 p-0 infoSection__imgContainer" xs={12}>
                                  <img className="info--verifiedImg" src={process.env.PUBLIC_URL + '/images/verified.png'} alt="verified" />
                                </Col>
                                <Col className="m-0 p-0" xs={12}>
                                  <span className="text-capitalize vv-font-size-1-1rem text-92">verified</span>
                                </Col>
                              </Row>
                            </div>
                            <div className="m-0 p-0 text-center infoSectionContainer">
                              <Row className="m-0 p-0 h-100">
                                <Col className="m-0 p-0 infoSection__imgContainer" xs={12}>
                                  <img className="info--isoImg" src={process.env.PUBLIC_URL + '/images/ISO1799.png'} alt="ISO1799" />
                                </Col>
                                <Col className="m-0 p-0" xs={12}>
                                  <span className="text-capitalize vv-font-size-1-1rem text-92">ISO 1799</span>
                                </Col>
                              </Row>
                            </div>
                          </Row>
                        </Col>
                      </Row>
                    </Col>

                    <Col className="m-0 p-0 text-right" xs={3}>
                      <Button variant="link" className="px-3 bg-a5 rounded-6 text-2d vv-font-size-1-3 font-weight-bold">Follow</Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <TopPanelBottomSection
          stickyClass = {x.join(" ")}
        />
      </Row>
    </>
  );
};

const TopPanelBottomSection = ({ stickyClass }) => {

  const location = useLocation();


  useEffect(() => {

    const path = location.pathname === '/' ? 'home' : location.pathname === '/products' ? 'product' : location.pathname === '/products/' ? 'product' :  location.pathname === '/about/' ? 'about' :  'about';
    setActive(path);

  }, [location.pathname]);

  const [active, setActive] = useState(null);

  const changeActiveHandle = (link) => {
    active !== link && setActive(link);
  }

  return (
    <>
      <Col className={`m-0 p-0 bg-f2 topPanel__bottomSection ${stickyClass}`} xs={12}>
        <Row className="m-0 p-0 justify-content-center topPanel__bottomSection--container">
          <Col className="m-0 p-0" xs={11}>
            <Row className="m-0 p-0">
              <Links
                linkStyle={`m-0 p-0 text-left topPanel__bottomSection--linkContainer ${active === "home" && "active"}`}
                linkName={ __('home') }
                linkAddress="/"
                linkOnClick={() => { changeActiveHandle("home"); }}
              />
              <Links
                linkStyle={`m-0 p-0 text-center topPanel__bottomSection--linkContainer ${active === "product" && "active"}`}
                linkName={ __('Product') }
                linkAddress="/products"
                linkOnClick={() => { changeActiveHandle("product"); }}
              />
              <Links
                linkStyle={`m-0 p-0 text-right topPanel__bottomSection--linkContainer ${active === "about" && "active"}`}
                linkName={ __('About Us') }
                linkAddress="/about"
                linkOnClick={() => { changeActiveHandle("about"); }}
              />
            </Row>
          </Col>
        </Row>
      </Col>
    </>
  );
};

const Links = ({ linkStyle, linkOnClick, linkAddress, linkName }) => {

  return (
    <Col
      className={linkStyle}
      xs={4}
      onClick={linkOnClick}
    >
      <Link className="text-decoration-none" to={linkAddress}>
        <div className="d-inline-block vv-cursor-pointer topPanel__bottomSection--link">
          <span className="text-white vv-font-size-1-8">{linkName}</span>
        </div>
      </Link>
    </Col>
  );
};

export default TopPanelDefault;