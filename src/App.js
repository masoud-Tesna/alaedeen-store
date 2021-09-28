// Custom Styles:
import './styles/custom.less';

//import Style File:
import './styles/App.less';

// flag icons:
import 'flag-icon-css/less/flag-icon.less';

// import alaedeen character:
import alaedeenChar from './assets/images/alaedeen-char.svg';

// Components:
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Design:
import { Col, ConfigProvider, Layout, Result, Row, Skeleton, Space } from 'antd';
import { SmileOutlined } from "@ant-design/icons";

// Pages:
import {
  Home,
  Products,
  About,
  Manufacturing,
  Certificate,
  RandDCapability,
  QualityControl,
  ExportCapability,
  Chat,
  AllCategories,
  Page,
} from "./components";

// import language context:
import { useGetConfig } from "./contexts/config/ConfigContext";
import { useGetStoreState } from "./contexts/store/StoreContext";

// import Custom Hooks:
import { useWindowSize } from './functions';
import { useTranslation } from "react-i18next";
import { __ } from "./functions/Helper";

// Layouts:
import TopPanel from "./layouts/topPanel";
import { Header as SiteHeader } from "./layouts/header";
import { SiteFooter } from "./layouts/footer";
import BottomDetails from "./layouts/blocks/static_templates/BottomDetails";

function App() {

  const { t } = useTranslation();

  // get initial config:
  const { config } = useGetConfig();

  const { width } = useWindowSize();

  const directionTheme = config.language === 'en' ? 'ltr' : 'rtl';

  const { Header, Footer, Content } = Layout;

  const { status: storeStatus } = useGetStoreState();

  if (storeStatus === 'loading' || storeStatus === 'disable') {
    return (
      <ConfigProvider>
        <Layout className="layout">
          <Row justify={"center"}>
            <Col className="d-none d-md-block" style={{ height: 55, backgroundColor: "#2C2134" }} span={24}>
              <Row className={"h-100 px-5"} align={"middle"} justify={"space-between"}>
                <Col span={12}>
                  <Space size={"large"}>
                    <Skeleton.Input style={{ width: '70px', height: 25 }} active={true} size={"default"} />
                    <Skeleton.Input style={{ width: '120px', height: 25 }} active={true} size={"default"} />
                    <Skeleton.Input style={{ width: '58px', height: 25 }} active={true} size={"default"} />
                  </Space>
                </Col>
                <Col span={9} className="text-right">
                  <Row justify={"space-between"}>
                    <Col>
                      <Space size={"middle"}>
                        <Skeleton.Input style={{ width: '80px', height: 25 }} active={true} size={"default"} />
                        <Skeleton.Input style={{ width: '80px', height: 25 }} active={true} size={"default"} />
                      </Space>
                    </Col>
                    <Col>
                      <Space>
                        <Skeleton.Input style={{ width: '80px', height: 25 }} active={true} size={"default"} />
                        <Skeleton.Input style={{ width: '40px', height: 25 }} active={true} size={"default"} />
                        <Skeleton.Input style={{ width: '40px', height: 25 }} active={true} size={"default"} />
                      </Space>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>

            <Col span={24}>
              <div style={{ backgroundColor: "rgba(112, 112, 112, 0.7)"}}>
                <Row justify="center">
                  <Col span={24} style={{ height: 55.1 }} className="d-md-none">
                    <Row justify={"space-between"} className="h-100">
                      <Col />
                      <Col className="pr-5 my-auto">
                        <Space>
                          <Skeleton.Button style={{height: 25, width: 80}} active={true} size={"default"} shape={"round"} />
                          <Skeleton.Button style={{height: 25, width: 45}} active={true} size={"default"} shape={"round"} />
                        </Space>
                      </Col>
                    </Row>
                  </Col>
                  <Col style={{
                    backgroundImage: "repeating-linear-gradient(rgba(255, 255, 255, 0.1), rgb(255, 255, 255) 75%, rgb(255, 255, 255))",
                    height: width < 768 ? 119.35 : 147,
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15,
                    zIndex: 2,
                    marginTop: width < 768 ? 0 : "4rem",
                    width: `calc(100vw - ${width < 768 ? "30px" : "8rem"})`
                  }}>
                    <Row className="h-100 px-4 py-4">
                      <Col xs={5} md={3} className="my-auto">
                        <Skeleton.Avatar style={{ width: width < 768 ? 50 : 100, height: width < 768 ? 50 : 100 }} active={true} size={"default"} shape={"square"} />
                      </Col>
                      <Col xs={19} md={21} className="my-3">
                        <Row className="h-100">
                          <Col span={12}>
                            <Skeleton.Input style={{ width: width < 768 ? 45 : 100, height: width < 768 ? 10 : 42 }} active={true} size={"default"} />
                          </Col>
                          <Col span={12} className="text-right">
                            <Skeleton.Button style={{ width: width < 768 ? 50 : 90, height: width < 768 ? 10 : 42 }} active={true} size={"default"} shape={"round"} />
                          </Col>
                          <Col span={24} className="align-self-end">
                            <Space size={"middle"}>
                              <Skeleton.Avatar style={{ width: width < 768 ? 23 : 45, height: width < 768 ? 23 : 45 }} active={true} size={"default"} shape={"circle"} />
                              <Skeleton.Avatar style={{ width: width < 768 ? 23 : 45, height: width < 768 ? 23 : 45 }} active={true} size={"default"} shape={"circle"} />
                              <Skeleton.Avatar style={{ width: width < 768 ? 23 : 45, height: width < 768 ? 23 : 45 }} active={true} size={"default"} shape={"circle"} />
                            </Space>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                  <Col className="align-self-end" span={24} style={{
                    backgroundColor: "#707070",
                    height: 55,
                    marginTop: -7
                  }}>
                    <Row className="h-100">
                      <Col span={24} className="d-md-none">
                        <Row className="row-cols-3 h-100 px-4" align={"middle"}>
                          <Col>
                            <Skeleton.Input style={{ width: 80, height: 20 }} active={true} size={"default"} />
                          </Col>
                          <Col>
                            <Skeleton.Input style={{ width: 80, height: 20 }} active={true} size={"default"} />
                          </Col>
                          <Col>
                            <Skeleton.Input style={{ width: 80, height: 20 }} active={true} size={"default"} />
                          </Col>
                        </Row>
                      </Col>
                      <Col span={24} className="d-none d-md-block">
                        <Row align={"middle"} className="h-100 px-5" justify={"center"}>
                          <Col span={21}>
                            <Row>                          <Col span={10}>
                              <Row className="row-cols-3 h-100 px-4" align={"middle"}>
                                <Col>
                                  <Skeleton.Input style={{ width: 120, height: 28 }} active={true} size={"default"} />
                                </Col>
                                <Col>
                                  <Skeleton.Input style={{ width: 120, height: 28 }} active={true} size={"default"} />
                                </Col>
                                <Col>
                                  <Skeleton.Input style={{ width: 120, height: 28 }} active={true} size={"default"} />
                                </Col>
                              </Row>
                            </Col>
                              <Col span={14} className="text-right">
                                <Space size={"large"}>
                                  <Skeleton.Input style={{ width: 340, height: 28 }} active={true} size={"default"} />
                                  <Skeleton.Input style={{ width: 120, height: 28 }} active={true} size={"default"} />
                                </Space>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
            </Col>

            <Col span={24} style={{ height: width < 768 ? 166 : 440 }}>
              <Skeleton.Image className="storeLoad--imgSlider" />
            </Col>

            <Col span={24} style={{ height: width < 768 ? 95 : 170 }} className="my-auto">
              <Row align={"middle"} className="h-100 row-cols-4 row-cols-md-6 px-4 px-md-5">
                <Col>
                  <Skeleton.Avatar style={{ width: width < 768 ? 73 : 118, height: width < 768 ? 73 : 118 }} active={true} size={"default"} shape={"circle"} />
                </Col>

                <Col>
                  <Skeleton.Avatar style={{ width: width < 768 ? 73 : 118, height: width < 768 ? 73 : 118 }} active={true} size={"default"} shape={"circle"} />
                </Col>

                <Col>
                  <Skeleton.Avatar style={{ width: width < 768 ? 73 : 118, height: width < 768 ? 73 : 118 }} active={true} size={"default"} shape={"circle"} />
                </Col>

                <Col>
                  <Skeleton.Avatar style={{ width: width < 768 ? 73 : 118, height: width < 768 ? 73 : 118 }} active={true} size={"default"} shape={"circle"} />
                </Col>

                <Col className="d-none d-md-block">
                  <Skeleton.Avatar style={{ width: width < 768 ? 73 : 118, height: width < 768 ? 73 : 118 }} active={true} size={"default"} shape={"circle"} />
                </Col>

                <Col className="d-none d-md-block">
                  <Skeleton.Avatar style={{ width: width < 768 ? 73 : 118, height: width < 768 ? 73 : 118 }} active={true} size={"default"} shape={"circle"} />
                </Col>
              </Row>
            </Col>

            <Col span={24}>
              <Col className="text-center text-md-left mt-5">
                <Skeleton.Input style={{ width: width < 768 ? 150 : 250, height: width < 768 ? 20 : 33 }} active={true} size={"default"} />
              </Col>
              <Row className="row-cols-2 row-cols-md-4 px-4 px-md-5 mt-4" gutter={[0, 32]}>
                <Col className="text-center">
                  <Skeleton.Input style={{ width: width < 768 ? 120 : 240, height: width < 768 ? 150 : 300 }} active={true} size={"default"} />
                </Col>

                <Col className="text-center">
                  <Skeleton.Input style={{ width: width < 768 ? 120 : 240, height: width < 768 ? 150 : 300 }} active={true} size={"default"} />
                </Col>

                <Col className="text-center">
                  <Skeleton.Input style={{ width: width < 768 ? 120 : 240, height: width < 768 ? 150 : 300 }} active={true} size={"default"} />
                </Col>

                <Col className="text-center">
                  <Skeleton.Input style={{ width: width < 768 ? 120 : 240, height: width < 768 ? 150 : 300 }} active={true} size={"default"} />
                </Col>
              </Row>
            </Col>

            <Col span={24}>
              <Col className="text-center text-md-left mt-5">
                <Skeleton.Input style={{ width: width < 768 ? 150 : 250, height: width < 768 ? 20 : 33 }} active={true} size={"default"} />
              </Col>
              <Row className="row-cols-2 row-cols-md-4 px-4 px-md-5 mt-4" gutter={[0, 32]}>
                <Col className="text-center">
                  <Skeleton.Input style={{ width: width < 768 ? 120 : 240, height: width < 768 ? 150 : 300 }} active={true} size={"default"} />
                </Col>

                <Col className="text-center">
                  <Skeleton.Input style={{ width: width < 768 ? 120 : 240, height: width < 768 ? 150 : 300 }} active={true} size={"default"} />
                </Col>

                <Col className="text-center">
                  <Skeleton.Input style={{ width: width < 768 ? 120 : 240, height: width < 768 ? 150 : 300 }} active={true} size={"default"} />
                </Col>

                <Col className="text-center">
                  <Skeleton.Input style={{ width: width < 768 ? 120 : 240, height: width < 768 ? 150 : 300 }} active={true} size={"default"} />
                </Col>
              </Row>
            </Col>

            <Col span={24} style={{ height: width < 768 ? 230 : 600 }} className="mt-5">
              <Skeleton.Image className="storeLoad--homeVideoEmbed" />
            </Col>

            <Col xs={24} md={17} className="mt-3">
              <Row className="px-4 px-md-5 py-3 shadow">
                <Col span={24} className="d-md-none">
                  <Row gutter={[0, 25]}>
                    <Col span={24}>
                      <Row>
                        <Col>
                          <Skeleton.Avatar style={{ width: 78, height: 78 }} active={true} size={"default"} shape={"circle"} />
                        </Col>
                        <Col className="my-auto pl-5">
                          <Skeleton.Input style={{ width: 89, height: 17 }} active={true} size={"default"} />
                        </Col>
                      </Row>
                    </Col>
                    <Col span={24}>
                      <Row gutter={[0, 10]}>
                        <Col span={12}>
                          <Skeleton.Input style={{ width: 69, height: 16 }} active={true} size={"default"} />
                        </Col>
                        <Col span={12}>
                          <Skeleton.Input style={{ width: 100, height: 16 }} active={true} size={"default"} />
                        </Col>

                        <Col span={12}>
                          <Skeleton.Input style={{ width: 59, height: 16 }} active={true} size={"default"} />
                        </Col>
                        <Col span={12}>
                          <Skeleton.Input style={{ width: 120, height: 16 }} active={true} size={"default"} />
                        </Col>

                        <Col span={12}>
                          <Skeleton.Input style={{ width: 96, height: 16 }} active={true} size={"default"} />
                        </Col>
                        <Col span={12}>
                          <Skeleton.Input style={{ width: 30, height: 16 }} active={true} size={"default"} />
                        </Col>

                        <Col span={12}>
                          <Skeleton.Input style={{ width: 96, height: 16 }} active={true} size={"default"} />
                        </Col>
                        <Col span={12}>
                          <Skeleton.Input style={{ width: 40, height: 16 }} active={true} size={"default"} />
                        </Col>

                        <Col span={12}>
                          <Skeleton.Input style={{ width: 32, height: 16 }} active={true} size={"default"} />
                        </Col>
                        <Col span={12}>
                          <Skeleton.Input style={{ width: 40, height: 16 }} active={true} size={"default"} />
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>

                <Col span={24} className="d-none d-md-block">
                  <Row justify={"space-between"}>
                    <Col span={5}>
                      <Row gutter={[0, 10]}>
                        <Col className="text-center" span={24}>
                          <Skeleton.Avatar style={{ width: 145, height: 145 }} active={true} size={"default"} shape={"circle"} />
                        </Col>
                        <Col className="text-center" span={24}>
                          <Skeleton.Input style={{ width: 150, height: 28 }} active={true} size={"default"} />
                        </Col>
                      </Row>
                    </Col>
                    <Col span={14}>
                      <Row gutter={[0, 10]}>
                        <Col span={12}>
                          <Skeleton.Input style={{ width: 113, height: 26 }} active={true} size={"default"} />
                        </Col>
                        <Col span={12}>
                          <Skeleton.Input style={{ width: 180, height: 26 }} active={true} size={"default"} />
                        </Col>

                        <Col span={12}>
                          <Skeleton.Input style={{ width: 97, height: 26 }} active={true} size={"default"} />
                        </Col>
                        <Col span={12}>
                          <Skeleton.Input style={{ width: 215, height: 26 }} active={true} size={"default"} />
                        </Col>

                        <Col span={12}>
                          <Skeleton.Input style={{ width: 157, height: 26 }} active={true} size={"default"} />
                        </Col>
                        <Col span={12}>
                          <Skeleton.Input style={{ width: 40, height: 26 }} active={true} size={"default"} />
                        </Col>

                        <Col span={12}>
                          <Skeleton.Input style={{ width: 156, height: 26 }} active={true} size={"default"} />
                        </Col>
                        <Col span={12}>
                          <Skeleton.Input style={{ width: 70, height: 26 }} active={true} size={"default"} />
                        </Col>

                        <Col span={12}>
                          <Skeleton.Input style={{ width: 52, height: 26 }} active={true} size={"default"} />
                        </Col>
                        <Col span={12}>
                          <Skeleton.Input style={{ width: 70, height: 26 }} active={true} size={"default"} />
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>

            <Col span={24} className="mt-4 px-4 px-md-5">
              <Row className="row-cols-2 row-cols-md-3 px-md-5" gutter={[20, 20]}>
                <Col>
                  <Skeleton.Input style={{ width: 113, height: 26 }} active={true} size={"default"} />
                </Col>
                <Col>
                  <Skeleton.Input style={{ width: 80, height: 26 }} active={true} size={"default"} />
                </Col>

                <Col>
                  <Skeleton.Input style={{ width: 60, height: 26 }} active={true} size={"default"} />
                </Col>
                <Col>
                  <Skeleton.Input style={{ width: 100, height: 26 }} active={true} size={"default"} />
                </Col>

                <Col>
                  <Skeleton.Input style={{ width: 90, height: 26 }} active={true} size={"default"} />
                </Col>
                <Col>
                  <Skeleton.Input style={{ width: 70, height: 26 }} active={true} size={"default"} />
                </Col>
              </Row>
            </Col>

            <div className={ `bg-white shadow rounded-10 storeLoad--LoadingModal loading` }>
              {storeStatus !== 'loading' &&
              <Result
                className="storeLoad--LoadingModal__loading"
                icon={ <img src={alaedeenChar} alt="Alaedeen.com" style={{ width: width < 768 ? 50 : 70 }}/> }
                title={ <i className="logo-icon-alaedeen-com" /> }
              />
              }

              {storeStatus === 'disable' &&
              <Result
                status="500"
                className="storeLoad--LoadingModal__disable"
                title={ t(__('The store is being prepared. Please visit other Horn stores.')) }
                extra={
                  <a className="text-47 vv-font-size-2" href="https://alaedeen.com/factories">
                    { t(__("factories page")) } >>
                  </a>
                }
              />
              }
            </div>
          </Row>
        </Layout>
      </ConfigProvider>
    );
  }

  return (
    <ConfigProvider direction={ directionTheme }>
      <Layout className="layout">
        <Router>
          <TopPanel />
          <Header className="site--header">
            <SiteHeader />
          </Header>
          <Content>
            <div className="site-layout-content">
              <Switch>
                <Route exact path="/" component={Home} />

                <Route path="/products" component={Products} />

                <Route path="/about" component={About} />

                <Route path="/all-categories" component={AllCategories} />

                <Route path="/manufacturing" component={Manufacturing} />

                <Route path="/Certificate" component={Certificate} />

                <Route path="/r-and-d-capability" component={RandDCapability} />

                <Route path="/quality-control" component={QualityControl} />

                <Route path="/export-capability" component={ExportCapability} />

                <Route path="/page/:page" component={Page} />


                <Route path="/chat" component={Chat} />

              </Switch>
            </div>
            <div className="bottomDetails--section">
              <BottomDetails />
            </div>
          </Content>
          <Footer>
           <SiteFooter />
          </Footer>
        </Router>
      </Layout>
    </ConfigProvider>
  );
}

export default App;
