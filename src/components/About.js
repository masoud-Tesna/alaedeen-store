import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// import style file:
import './styles/About.less';

// import style file:
import './styles/AboutComponents.less';

// import And Design Components used:
import { Col, Row, Collapse, Statistic } from "antd";

// import hooks:
import { useTranslation } from "react-i18next";
import { __, useSetLoaded } from "../functions/Helper";
import { useGetStoreState } from "../contexts/store/StoreContext";
import { useGetApi, useWindowSize } from "../functions";

// import components used:
import ShowVideoEmbed from "../layouts/blocks/static_templates/ShowVideoEmbed";
import LoadSpinner from "../layouts/blocks/static_templates/LoadSpinner";
import ShowResponsiveImage from "../layouts/common/ShowResponsiveImage";
import { useGetConfig } from "../contexts/config/ConfigContext";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/modules/navigation/navigation.less";

// import Swiper core and required modules
import SwiperCore, { Pagination,Navigation } from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination,Navigation]);

const About = () => {

  const { id: storeId } = useGetStoreState();

  // get initial config:
  const { config } = useGetConfig();

  // get screen width:
  const { width } = useWindowSize();

  const { t } = useTranslation();

  const { isLoaded } = useSetLoaded();

  const { isLoading, data } = useGetApi(`factories-api`, `store_id=${storeId}`, `about_store_${storeId}`);
  const { factories: aboutStores } = data || [];

  const { Panel } = Collapse;

  const [collapseActiveKey, setCollapseActiveKey] = useState();

  const CapabilityCollapseHeader = () => {
    return(
      <Col className={ `about--another__item about--rAndD__container ${width < 992 && "collapseScrollXs"}` } id="CapabilityCollapse" span={24}>
        <Row className="about--rAndD__content h-100" justify={"space-between"}>
          <Col className={ `${config.language === 'en' ? 'pl-4' : 'pr-4'} my-auto` }>
            <Row>
              <Col className="mb-3 vv-font-size-1-8 text-white about--another__title" span={24}>
                { t(__('R&D Capability')) }
              </Col>
              <Col className="vv-font-size-1-4 text-white about--another__viewMore" span={24}>
                { t(__('View More R&D Capability')) }
              </Col>
            </Row>
          </Col>
          <Col className={ `my-auto ${config.language === 'en' ? 'pr-4' : 'pl-4'} about--another__icon` }>
            <i className={ `fa fa-chevron-${config.language === 'en' ? 'right' : 'left'} vv-font-size-2 text-white ${collapseActiveKey === "1" ? (config.language === "en" ? "rotate-down-ltr" : "rotate-down-rtl") : ''}` } />
          </Col>
        </Row>
      </Col>
    );
  };

  const QualityControlCollapseHeader = () => {
    return(
      <Col className={ `about--another__item about--qualityControl__container ${width < 992 && "collapseScrollXs"}` } id="QualityControlCollapse" span={24}>
        <Row className="about--qualityControl__content h-100" justify={"space-between"}>
          <Col className={ `${config.language === 'en' ? 'pl-4' : 'pr-4'} my-auto` }>
            <Row>
              <Col className="mb-3 vv-font-size-1-8 text-white about--another__title" span={24}>
                { t(__('Quality Control')) }
              </Col>
              <Col className="vv-font-size-1-4 text-white about--another__viewMore" span={24}>
                { t(__('View More Quality Control')) }
              </Col>
            </Row>
          </Col>
          <Col className={ `my-auto ${config.language === 'en' ? 'pr-4' : 'pl-4'} about--another__icon` }>
            <i className={ `fa fa-chevron-${config.language === 'en' ? 'right' : 'left'} vv-font-size-2 text-white ${collapseActiveKey === "2" ? (config.language === "en" ? "rotate-down-ltr" : "rotate-down-rtl") : ''}` } />
          </Col>
        </Row>
      </Col>
    );
  };

  const ExportCapabilityCollapseHeader = () => {
    return(
      <Col className={ `about--another__item about--exportCapability__container ${width < 992 && "collapseScrollXs"}` } id="ExportCapabilityCollapse" span={24}>
        <Row className="about--exportCapability__content h-100" justify={"space-between"}>
          <Col className={ `${config.language === 'en' ? 'pl-4' : 'pr-4'} my-auto` }>
            <Row>
              <Col className="mb-3 vv-font-size-1-8 text-white about--another__title" span={24}>
                { t(__('Export Capability')) }
              </Col>
              <Col className="vv-font-size-1-4 text-white about--another__viewMore" span={24}>
                { t(__('View More Export Capability')) }
              </Col>
            </Row>
          </Col>
          <Col className={ `my-auto ${config.language === 'en' ? 'pr-4' : 'pl-4'} about--another__icon` }>
            <i className={ `fa fa-chevron-${config.language === 'en' ? 'right' : 'left'} vv-font-size-2 text-white ${collapseActiveKey === "3" ? (config.language === "en" ? "rotate-down-ltr" : "rotate-down-rtl") : ''}` } />
          </Col>
        </Row>
      </Col>
    );
  };

  const handleCollapseOnChange = (activeKey) => {
    setCollapseActiveKey(() => {

      if (activeKey === "1") {
        setTimeout(function(){
          document.getElementById('CapabilityCollapse').scrollIntoView({
            behavior: 'smooth',
        });
        }, 400);
      }
      else if (activeKey === "2") {
        setTimeout(function(){
          document.getElementById('QualityControlCollapse').scrollIntoView({
            behavior: 'smooth',
        });
        }, 400);
      }
      else if (activeKey === "3") {
        setTimeout(function(){
          document.getElementById('ExportCapabilityCollapse').scrollIntoView({
            behavior: 'smooth',
        });
        }, 400);
      }

      return activeKey
    });
  }

  const ImagesSwiper = ({ images, processKey }) => {
    return(
      <Swiper
        pagination={{
          "clickable": true,
          "type": "fraction"
        }}
        navigation={ width >= 992 }
      >

        { images?.map((image, index) => {
          return (
            <SwiperSlide key={`r_and_d_capability_image_${index}`}>
              <ShowResponsiveImage imagePath={ image } imageFolder='profiles' width={width >= 992 ? width - 310 : width} height={width < 768 ? 233 : 433} object_id={index + 1}  object_type={`about_store_${storeId}/r_and_d_capability_img_${processKey}`}/>
            </SwiperSlide>
          )
        }) }

      </Swiper>
    )
  }

  useEffect(() => {
    let mount = true;
    if (mount) {
      document.getElementById('AlaedeenStoreApp').scrollIntoView()
    }

    return (() => mount = false);
  }, []);

  if (isLoaded) {
    return <LoadSpinner spinner={'default'} spinnerColor={'#2e8339'} />
  }

  return (
    <Row className="mt-4 about--container">
      <Col span={24} className="about--aboutUs__section">
        <Row>
          {isLoading ?
            <>Loading...</> :
            (aboutStores?.embed_video?.length !== 0 || aboutStores?.company_introduction?.fields?.detailed_company_introduction) &&
            <Col span={24} className="mb-5">
              <Row>
                <Col span={24} className="vv-font-size-1-8 font-weight-bold text-47 about--title">
                  { t(__('about us')) }
                </Col>
                <Col span={24} className={ `mt-3 about--videosSection` }>
                  {aboutStores?.embed_video?.length !== 0 &&
                  <div className="about--videos">
                    { aboutStores?.embed_video?.map((embedVideo) => {
                      return (
                        <div key={ `video_embed_${ embedVideo?.link_id }` } className="about--video">
                          <ShowVideoEmbed embedLink={ embedVideo?.link } extraClassName={ 'aboutPage' } embedClassName="rounded-10"/>
                        </div>
                      );
                    }) }
                  </div>
                  }
                </Col>
                <Col className="mt-3 text-70 about--aboutUs__description" span={24}>
                  <p dangerouslySetInnerHTML={ {__html: aboutStores?.company_introduction?.fields?.detailed_company_introduction} } />
                </Col>
              </Row>
            </Col>
          }
        </Row>
      </Col>

      <Col span={24} className="mb-5 about--componentOverview__section">
        <Row>
          <Col span={24} className="vv-font-size-1-8 font-weight-bold text-47 about--title">
            { t(__('Component Overview')) }
          </Col>
          <Col span={24} className="mt-3 about--componentOverview__tableSection">
            <Row className="row-cols-2 row-cols-md-4 " gutter={16}>
              {isLoading ?
                <>Loading...</> :
                aboutStores?.general?.business_type?.length !== 0 &&
                  <>
                    <Col className = "vv-font-size-1-2rem text-92" >{ t(__('Business Type')) }</Col>
                    <Col className = "vv-font-size-1-2rem text-47" >{ aboutStores?.general?.business_type }</Col>
                  </>
              }

              {isLoading ?
                <>Loading...</> :
                aboutStores?.basic_company_details?.fields?.year_company_registered?.length !== 0 &&
                <>
                  <Col className = "vv-font-size-1-2rem text-92" >{ t(__('Year Established')) }</Col>
                  <Col className = "vv-font-size-1-2rem text-47" >{ aboutStores?.basic_company_details?.fields?.year_company_registered }</Col>
                </>
              }

              {isLoading ?
                <>Loading...</> :
                aboutStores?.basic_company_details?.fields?.total_no_employees?.length !== 0 &&
                <>
                  <Col className = "vv-font-size-1-2rem text-92" >{ t(__('Total Employees')) }</Col>
                  <Col className = "vv-font-size-1-2rem text-47" >{ aboutStores?.basic_company_details?.fields?.total_no_employees }</Col>
                </>
              }

              {isLoading ?
                <>Loading...</> :
                aboutStores?.basic_company_details?.fields?.main_category?.length !== 0 &&
                <>
                  <Col className = "vv-font-size-1-2rem text-92" >{ t(__('Main category')) }</Col>
                  <Col className = "vv-font-size-1-2rem text-47" >{ aboutStores?.basic_company_details?.fields?.main_category }</Col>
                </>
              }

              {isLoading ?
                <>Loading...</> :
                (aboutStores?.general?.country || aboutStores?.general?.state) &&
                <>
                  <Col className = "vv-font-size-1-2rem text-92" >{ t(__('Country/Region')) }</Col>
                  <Col className = "vv-font-size-1-2rem text-47" >
                    { aboutStores?.general?.country && `${aboutStores?.general?.country}, ` } { aboutStores?.general?.state }
                  </Col>
                </>
              }

              {isLoading ?
                <>Loading...</> :
                aboutStores?.export_capability?.fields?.main_markets_and_distribution?.length !== 0 &&
                <>
                  <Col className = "vv-font-size-1-2rem text-92" >{ t(__('Main Markets')) }</Col>
                  <Col className = "vv-font-size-1-2rem text-47" >
                    {aboutStores?.export_capability?.fields?.main_markets_and_distribution?.map((market, index) => {
                      return (
                        <span key={`main_market_${index}`} className="d-block vv-font-size-1-2rem text-47">
                          { `${market?.country} ${market?.percent}%` }
                        </span>
                      );
                    })}
                  </Col>
                </>
              }


            </Row>
          </Col>
        </Row>
      </Col>

      <Col span={24} className="about--manufacturingCapability__section">
        <Row>
          {isLoading ?
            <>Loading...</> :
            (aboutStores?.manufacturing_capability?.parents?.process?.fields?.length !== 0 && aboutStores?.manufacturing_capability?.parents?.process?.show === "Y") &&
              <Col span={24}>
                <Row className="mb-5">
                  <Col span={24} className="vv-font-size-1-8 font-weight-bold text-47 about--title">
                    { t(__('Manufacturing Capability')) }
                  </Col>
                  <Col span={24} className="mt-3 about--videosSection">
                    <div className="about--videos">
                      { Object.entries(aboutStores?.manufacturing_capability?.parents?.process?.fields).map(([key, process], index) => {
                        return (
                          <div key={`manufacturing_capability_process_${index}`} className="about--video">
                            <Link to={`/about/manufacturing/?slide=${key}`}>
                              <div className="rounded-10 about--imageBg" style={{ backgroundImage: `url(${process.process_pictures[0]})` }} />
                              <div className="text-white ml-4 mb-4 vv-font-size-1-8 font-weight-600 about--imageBg__title">
                                { process.process_name || '' }
                              </div>
                            </Link>
                          </div>
                        );
                      }) }
                    </div>
                  </Col>
                </Row>
              </Col>
          }
        </Row>
      </Col>

      <Col span={24} className="about--certificates__section">
        <Row>
          {isLoading ?
            <>Loading...</> :
            (aboutStores?.certificate_center?.parents?.certification?.fields?.length !== 0 && aboutStores?.certificate_center?.parents?.certification?.show === "Y") &&
              <Col span={24}>
                <Row className="mb-5">
                  <Col span={24} className="vv-font-size-1-8 font-weight-bold text-47 about--title">
                    { t(__('Certificate')) }
                  </Col>
                  <Col span={24} className="mt-3 about--imagesSection">
                    <div className="about--images">
                      { Object.entries(aboutStores?.certificate_center?.parents?.certification?.fields).map(([key, certificate], index) => {
                        return (
                          <div key={`manufacturing_capability_process_${index}`} className="about--image">
                            <Link to={`/about/certificate/?slide=${key}`}>
                              <Row>
                                <Col className = "about--imageBackground" span={24}>
                                  <ShowResponsiveImage imagePath={ certificate.certificate_photos[0] } imageFolder='profiles' width={width < 768 ? 140 : 400} height={width < 768 ? 110 : 240} object_id={index + 1}  object_type={`about_store_${storeId}/certificate_img_${key}`}/>
                                </Col>
                                <Col className = "m-0 p-0 vv-font-size-1-6 text-center text-47 mt-3" xs={24}>{ certificate.certificate_name }</Col>
                              </Row>
                            </Link>
                          </div>
                        );
                      }) }
                    </div>
                  </Col>
                </Row>
            </Col>
          }
        </Row>
      </Col>

      <Col span={24} className="about--another__section">
        <Row gutter={[0, 32]}>
          {/*{isLoading ?
            <>Loading...</> :
            (aboutStores.r_and_d_capability.parents.process.fields.length !== 0 && aboutStores.r_and_d_capability.parents.process.show === "Y") &&
              <Col className="about--another__item about--rAndD__container" span={24}>
                <Link to={"/about/r-and-d-capability"}>
                  <div className="about--another__bgImage" />
                  <Row className="about--rAndD__content h-100" justify={"space-between"}>
                    <Col className={ `${config.language === 'en' ? 'pl-4' : 'pr-4'} my-auto` }>
                      <Row>
                        <Col className="mb-3 vv-font-size-1-8 text-white about--another__title" span={24}>
                          { t(__('R&D Capability')) }
                        </Col>
                        <Col className="vv-font-size-1-4 text-white about--another__viewMore" span={24}>
                          { t(__('View More R&D Capability')) }
                        </Col>
                      </Row>
                    </Col>
                    <Col className={ `my-auto ${config.language === 'en' ? 'pr-4' : 'pl-4'} about--another__icon` }>
                      <i className={ `fa fa-chevron-${config.language === 'en' ? 'right' : 'left'} vv-font-size-2 text-white` } />
                    </Col>
                  </Row>
                </Link>
              </Col>
          }*/}

          {/*{isLoading ?
            <>Loading...</> :
            (aboutStores.quality_control.parents.process.fields.length !== 0 && aboutStores.quality_control.parents.process.show === "Y") &&
              <Col className="about--another__item about--qualityControl__container" span={24}>
              <Link to={"/about/quality-control"}>
                <div className="about--another__bgImage" />
                <Row className="about--qualityControl__content h-100" justify={"space-between"}>
                  <Col className={ `${config.language === 'en' ? 'pl-4' : 'pr-4'} my-auto` }>
                    <Row>
                      <Col className="mb-3 vv-font-size-1-8 text-white about--another__title" span={24}>
                        { t(__('Quality Control')) }
                      </Col>
                      <Col className="vv-font-size-1-4 text-white about--another__viewMore" span={24}>
                        { t(__('View More Quality Control')) }
                      </Col>
                    </Row>
                  </Col>
                  <Col className={ `my-auto ${config.language === 'en' ? 'pr-4' : 'pl-4'} about--another__icon` }>
                    <i className={ `fa fa-chevron-${config.language === 'en' ? 'right' : 'left'} vv-font-size-2 text-white` } />
                  </Col>
                </Row>
              </Link>
            </Col>
          }*/}

          {/*{isLoading ?
            <>Loading...</> :
            (aboutStores.export_capability.fields.export_percentage.length !== 0 && aboutStores.export_capability.fields.main_markets_and_distribution.length !== 0) &&
              <Col className="about--another__item about--exportCapability__container" span={24}>
              <Link to={"/about/export-capability"}>
                <div className="about--another__bgImage" />
                <Row className="about--exportCapability__content h-100" justify={"space-between"}>
                  <Col className={ `${config.language === 'en' ? 'pl-4' : 'pr-4'} my-auto` }>
                    <Row>
                      <Col className="mb-3 vv-font-size-1-8 text-white about--another__title" span={24}>
                        { t(__('Export Capability')) }
                      </Col>
                      <Col className="vv-font-size-1-4 text-white about--another__viewMore" span={24}>
                        { t(__('View More Export Capability')) }
                      </Col>
                    </Row>
                  </Col>
                  <Col className={ `my-auto ${config.language === 'en' ? 'pr-4' : 'pl-4'} about--another__icon` }>
                    <i className={ `fa fa-chevron-${config.language === 'en' ? 'right' : 'left'} vv-font-size-2 text-white` } />
                  </Col>
                </Row>
              </Link>
            </Col>
          }*/}

          <Col span={24}>

            { isLoading ?
              <>Loading...</> :
              <Collapse ghost accordion onChange={handleCollapseOnChange}>

                {
                  (aboutStores?.r_and_d_capability?.parents?.process?.fields?.length !== 0 && aboutStores?.r_and_d_capability?.parents?.process?.show === "Y") &&
                  <Panel
                    className="CapabilityCollapse"
                    header={ <CapabilityCollapseHeader/> }
                    key="1"
                    showArrow={ false }
                  >
                    <Row
                      className="vh-100- manufacturing--container">
                      <Col span={24}>
                        <Swiper
                          pagination={{
                            "clickable": true,
                            "type": "fraction"
                          }}
                          navigation={false}
                          className="manufacturing--swiper"
                        >

                          {isLoading ?
                            <>Loading...</> :
                            Object.entries(aboutStores?.r_and_d_capability?.parents?.process?.fields).map(([key, capability], index) => {
                              return (
                                <SwiperSlide key={`swiper_process_${index}`}>
                                  <Row className="manufacturing--info__content">
                                    <Col span={24} className="manufacturing--images">
                                      <ImagesSwiper images={capability?.process_pictures} processKey={index + 1} />
                                    </Col>

                                    <Col span={24} className="mt-4 manufacturing--info__certificate">
                                      <Row>
                                        <Col span={24} className="vv-font-size-2 font-weight-bold text-47 manufacturing--info__title py-4">
                                          { t(__('r_and_d_capability')) }
                                        </Col>

                                        <Col span={24} className="manufacturing--info__processName productionLine bg-white">
                                          <Row>
                                            <Col span={12} className="vv-font-size-1-4 text-92">
                                              { t(__("process_name")) }
                                            </Col>

                                            <Col span={12} className="vv-font-size-1-4 text-47">
                                              { capability?.process_name || '---' }
                                            </Col>
                                          </Row>
                                        </Col>

                                        <Col span={24} className="manufacturing--info__desc productionLine py-4">
                                          <span className="d-block vv-font-size-1-4 text-92 mb-3">{ t(__('Process describe')) }</span>
                                          { capability?.process_describe || '' }
                                        </Col>
                                      </Row>
                                    </Col>

                                  </Row>
                                </SwiperSlide>
                              );
                            })
                          }

                        </Swiper>
                      </Col>
                    </Row>
                  </Panel>
                }

                {
                  (aboutStores?.quality_control?.parents?.process?.fields?.length !== 0 && aboutStores?.quality_control?.parents?.process?.show === "Y") &&
                  <Panel
                    className="QualityControlCollapse"
                    header={ <QualityControlCollapseHeader/> }
                    key="2"
                    showArrow={ false }
                  >
                    <Row
                      className="vh-100-- manufacturing--container">
                      <Col span={24}>
                        <Swiper
                          pagination={{
                            "clickable": true,
                            "type": "fraction"
                          }}
                          navigation={false}
                          className="manufacturing--swiper"
                        >

                          {isLoading ?
                            <>Loading...</> :
                            Object.entries(aboutStores?.quality_control?.parents?.process?.fields).map(([key, capability], index) => {
                              return (
                                <SwiperSlide key={`swiper_process_${index}`}>
                                  <Row className="manufacturing--info__content">
                                    <Col span={24} className="manufacturing--images">
                                      <ImagesSwiper images={capability?.process_pictures} processKey={index + 1} />
                                    </Col>

                                    <Col span={24} className="mt-4 manufacturing--info__certificate">
                                      <Row>
                                        <Col span={24} className="vv-font-size-2 font-weight-bold text-47 manufacturing--info__title py-4">
                                          { t(__('r_and_d_capability')) }
                                        </Col>

                                        <Col span={24} className="manufacturing--info__processName productionLine bg-white">
                                          <Row>
                                            <Col span={12} className="vv-font-size-1-4 text-92">
                                              { t(__("process_name")) }
                                            </Col>

                                            <Col span={12} className="vv-font-size-1-4 text-47">
                                              { capability?.process_name || '---' }
                                            </Col>
                                          </Row>
                                        </Col>

                                        <Col span={24} className="manufacturing--info__desc productionLine py-4">
                                          <span className="d-block vv-font-size-1-4 text-92 mb-3">{ t(__('Process describe')) }</span>
                                          { capability?.process_describe || '' }
                                        </Col>
                                      </Row>
                                    </Col>

                                  </Row>
                                </SwiperSlide>
                              );
                            })
                          }

                        </Swiper>
                      </Col>
                    </Row>
                  </Panel>
                }

                {
                  (aboutStores?.export_capability?.fields?.export_percentage?.length !== 0 && aboutStores?.export_capability?.fields?.main_markets_and_distribution?.length !== 0) &&
                  <Panel
                    className="ExportCapabilityCollapse"
                    header={ <ExportCapabilityCollapseHeader/> }
                    key="3"
                    showArrow={ false }
                  >
                    <Row
                      className="vh-100-- manufacturing--container exportCapability">
                      <Col span={24}>
                        <Row className="manufacturing--info__content exportCapability">
                          {isLoading ?
                            <>Loading...</> :
                            <>
                              <Col span={24} className="manufacturing--info__exportCapability shadow-bottom mb-4">
                                <Row gutter={[0, 20]}>
                                  <Col span={24} className="manufacturing--info__processName px-0">
                                    <Row>
                                      <Col span={24} className="padding-y manufacturing--info__processNameContent">
                                        <Row>
                                          <Col span={24}>
                                            <Row>
                                              <Col span={12} className="vv-font-size-1-4 text-92">
                                                { t(__('Export Percentage')) }
                                              </Col>

                                              <Col span={12} className="vv-font-size-1-4 text-47">
                                                { aboutStores?.export_capability?.fields?.export_percentage || '---' }
                                              </Col>
                                            </Row>
                                          </Col>

                                          <Col span={24}>
                                            <Row gutter={[0, 5]}>
                                              <Col span={24} className="vv-font-size-1-4 text-92">
                                                { t(__('Main Markets and Distribution')) }:
                                              </Col>

                                              <Col span={24} className="vv-font-size-1-4 text-47">
                                                <Row className="row-cols-2 row-cols-md-3 row-cols-lg-4 px-4" gutter={[10, 10]}>
                                                  {Object.entries(aboutStores?.export_capability?.fields?.main_markets_and_distribution).map(([key, distribution], index) => {
                                                    return (
                                                      <Col key={`distribution_${key}_${index}`}>
                                                        { `${distribution.country} ${distribution.percent}` }
                                                      </Col>
                                                    )
                                                  })}

                                                </Row>
                                              </Col>
                                            </Row>
                                          </Col>

                                          <Col span={24}>
                                            <Row>
                                              <Col span={12} className="vv-font-size-1-4 text-92">
                                                { t(__('Year of export')) }
                                              </Col>

                                              <Col span={12} className="vv-font-size-1-4 text-47">
                                                { aboutStores?.export_capability?.fields?.year_when_your_company_started_exporting || '---' }
                                              </Col>
                                            </Row>
                                          </Col>

                                          <Col span={24}>
                                            <Row gutter={[0, 5]}>
                                              <Col span={24} className="vv-font-size-1-4 text-92">
                                                { t(__('accepted_delivery_terms')) }:
                                              </Col>

                                              <Col span={24} className="vv-font-size-1-4 text-47">
                                                <Row className="row-cols-2 row-cols-md-3 row-cols-lg-4 px-4" gutter={[10, 10]}>
                                                  {Object.entries(aboutStores?.export_capability?.fields?.accepted_delivery_terms).map(([key, accepted_delivery_terms], index) => {
                                                    return (
                                                      <Col key={`distribution_${key}_${index}`}>
                                                        { accepted_delivery_terms }
                                                      </Col>
                                                    )
                                                  })}

                                                </Row>
                                              </Col>
                                            </Row>
                                          </Col>

                                          <Col span={24}>
                                            <Row>
                                              <Col span={12} className="vv-font-size-1-4 text-92">
                                                { t(__('Average Lead Time')) }
                                              </Col>

                                              <Col span={12} className="vv-font-size-1-4 text-47">
                                                { aboutStores?.export_capability?.fields?.average_lead_time || '---' }
                                              </Col>
                                            </Row>
                                          </Col>

                                          <Col span={24}>
                                            <Row gutter={[0, 5]}>
                                              <Col span={24} className="vv-font-size-1-4 text-92">
                                                { t(__('Accepted Payment Currency')) }:
                                              </Col>

                                              <Col span={24} className="vv-font-size-1-4 text-47">
                                                <Row className="row-cols-2 row-cols-md-3 row-cols-lg-4 px-4" gutter={[10, 10]}>
                                                  {Object.entries(aboutStores?.export_capability?.fields?.accepted_payment_currency).map(([key, accepted_payment_currency], index) => {
                                                    return (
                                                      <Col key={`distribution_${key}_${index}`}>
                                                        { accepted_payment_currency }
                                                      </Col>
                                                    )
                                                  })}

                                                </Row>
                                              </Col>
                                            </Row>
                                          </Col>

                                          <Col span={24}>
                                            <Row gutter={[0, 5]}>
                                              <Col span={24} className="vv-font-size-1-4 text-92">
                                                { t(__('Language Spoken')) }:
                                              </Col>

                                              <Col span={24} className="vv-font-size-1-4 text-47">
                                                <Row className="row-cols-2 row-cols-md-3 row-cols-lg-4 px-4" gutter={[10, 10]}>
                                                  {Object.entries(aboutStores?.export_capability?.fields?.language_spoken).map(([key, language_spoken], index) => {
                                                    return (
                                                      <Col key={`distribution_${key}_${index}`}>
                                                        { language_spoken }
                                                      </Col>
                                                    )
                                                  })}

                                                </Row>
                                              </Col>
                                            </Row>
                                          </Col>
                                        </Row>
                                      </Col>
                                    </Row>
                                  </Col>
                                </Row>
                              </Col>

                              <Col span={24} className="mt-2 shadow-bottom mb-4 bg-f6 customerCase--container">
                                <Swiper
                                  pagination={{
                                    "clickable": true,
                                    "type": "fraction"
                                  }}
                                  navigation={false}
                                  className="manufacturing--swiper"
                                >

                                  { Object.entries(aboutStores?.export_capability?.parents?.project_and_customer?.fields).map(([key, customersCase], index) => {
                                    return (
                                      <SwiperSlide key={`swiper_customerCase_${index}`}>
                                        <Row className="manufacturing--info__content">
                                          <Col span={24} className="manufacturing--images">
                                            <ImagesSwiper images={customersCase?.cooperation_photos} processKey={index + 1} />
                                          </Col>

                                          <Col span={24} className="mt-4 manufacturing--info__certificate">
                                            <Row>
                                              <Col span={24} className="vv-font-size-2 font-weight-bold text-47 manufacturing--info__title py-4">
                                                { t(__('Customer case')) }
                                              </Col>

                                              <Col span={24} className="manufacturing--info__processName px-0">
                                                <Row>
                                                  <Col span={24} className="padding-y manufacturing--info__processNameContent">
                                                    <Row>
                                                      <Col span={24}>
                                                        <Row>
                                                          <Col span={12} className="vv-font-size-1-4 text-92">
                                                            { t(__("Project/customer name")) }
                                                          </Col>

                                                          <Col span={12} className="vv-font-size-1-4 text-47">
                                                            { customersCase?.project_and_customer_name || '---' }
                                                          </Col>
                                                        </Row>
                                                      </Col>

                                                      <Col span={24}>
                                                        <Row>
                                                          <Col span={12} className="vv-font-size-1-4 text-92">
                                                            { t(__("Customer’s Country")) }
                                                          </Col>

                                                          <Col span={12} className="vv-font-size-1-4 text-47">
                                                            { customersCase?.customers_country_and_region || '---' }
                                                          </Col>
                                                        </Row>
                                                      </Col>

                                                      <Col span={24}>
                                                        <Row>
                                                          <Col span={12} className="vv-font-size-1-4 text-92">
                                                            { t(__("Products You Supply To Customer")) }
                                                          </Col>

                                                          <Col span={12} className="vv-font-size-1-4 text-47">
                                                            { customersCase?.products_you_supply_to_customer || '---' }
                                                          </Col>
                                                        </Row>
                                                      </Col>

                                                      <Col span={24}>
                                                        <Row>
                                                          <Col span={12} className="vv-font-size-1-4 text-92">
                                                            { t(__("Annual Turnover")) }
                                                          </Col>

                                                          <Col span={12} className="vv-font-size-1-4 text-47">
                                                            <Statistic value={ customersCase?.annual_turnover || '---' } suffix="$" style={{ lineHeight: "13px" }} />
                                                          </Col>
                                                        </Row>
                                                      </Col>
                                                    </Row>
                                                  </Col>
                                                </Row>
                                              </Col>
                                            </Row>
                                          </Col>

                                        </Row>
                                      </SwiperSlide>
                                    );
                                  }) }

                                </Swiper>
                              </Col>

                              <Col span={24} className="mt-2 bg-f6 overseasOffice--container">
                                <Swiper
                                  pagination={{
                                    "clickable": true,
                                    "type": "fraction"
                                  }}
                                  navigation={false}
                                  className="manufacturing--swiper"
                                >

                                  { Object.entries(aboutStores?.export_capability?.parents?.company_overseas_office?.fields).map(([key, overseasOffice], index) => {
                                    return (
                                      <SwiperSlide key={`swiper_customerCase_${index}`}>
                                        <Row className="manufacturing--info__content">
                                          <Col span={24} className="manufacturing--images">
                                            <ImagesSwiper images={overseasOffice?.office_photos} processKey={index + 1} />
                                          </Col>

                                          <Col span={24} className="mt-4 manufacturing--info__certificate">
                                            <Row>
                                              <Col span={24} className="vv-font-size-2 font-weight-bold text-47 manufacturing--info__title py-4">
                                                { t(__('Overseas office')) }
                                              </Col>

                                              <Col span={24} className="manufacturing--info__processName px-0">
                                                <Row>
                                                  <Col span={24} className="py-4 manufacturing--info__processNameContent">
                                                    <Row>
                                                      <Col span={24}>
                                                        <Row>
                                                          <Col span={12} className="vv-font-size-1-4 text-92">
                                                            { t(__("Country/Region")) }
                                                          </Col>

                                                          <Col span={12} className="vv-font-size-1-4 text-47">
                                                            { overseasOffice?.country_and_region || '---' }
                                                          </Col>
                                                        </Row>
                                                      </Col>

                                                      <Col span={24}>
                                                        <Row>
                                                          <Col span={12} className="vv-font-size-1-4 text-92">
                                                            { t(__("Province/State/County")) }
                                                          </Col>

                                                          <Col span={12} className="vv-font-size-1-4 text-47">
                                                            { overseasOffice?.province_and_state_and_county || '---' }
                                                          </Col>
                                                        </Row>
                                                      </Col>

                                                      <Col span={24}>
                                                        <Row>
                                                          <Col span={12} className="vv-font-size-1-4 text-92">
                                                            { t(__("City")) }
                                                          </Col>

                                                          <Col span={12} className="vv-font-size-1-4 text-47">
                                                            { overseasOffice?.city || '---' }
                                                          </Col>
                                                        </Row>
                                                      </Col>

                                                      <Col span={24}>
                                                        <Row>
                                                          <Col span={12} className="vv-font-size-1-4 text-92">
                                                            { t(__("Street Address")) }
                                                          </Col>

                                                          <Col span={12} className="vv-font-size-1-4 text-47">
                                                            { overseasOffice?.street_address || '---' }
                                                          </Col>
                                                        </Row>
                                                      </Col>

                                                      <Col span={24}>
                                                        <Row>
                                                          <Col span={12} className="vv-font-size-1-4 text-92">
                                                            { t(__("phone number")) }
                                                          </Col>

                                                          <Col span={12} className="vv-font-size-1-4 text-47">
                                                            { `${overseasOffice?.country_code}-${overseasOffice?.phone_number}` }
                                                          </Col>
                                                        </Row>
                                                      </Col>

                                                      <Col span={24}>
                                                        <Row>
                                                          <Col span={12} className="vv-font-size-1-4 text-92">
                                                            { t(__("Duties")) }
                                                          </Col>

                                                          <Col span={12} className="vv-font-size-1-4 text-47">
                                                            { overseasOffice?.duties || '---' }
                                                          </Col>
                                                        </Row>
                                                      </Col>

                                                      <Col span={24}>
                                                        <Row>
                                                          <Col span={12} className="vv-font-size-1-4 text-92">
                                                            { t(__("Number of Staff")) }
                                                          </Col>

                                                          <Col span={12} className="vv-font-size-1-4 text-47">
                                                            <Statistic value={ overseasOffice?.number_of_staff || '---' } style={{ lineHeight: "13px" }} />

                                                          </Col>
                                                        </Row>
                                                      </Col>
                                                    </Row>
                                                  </Col>
                                                </Row>
                                              </Col>
                                            </Row>
                                          </Col>

                                        </Row>
                                      </SwiperSlide>
                                    );
                                  }) }

                                </Swiper>
                              </Col>

                            </>
                          }
                        </Row>
                      </Col>
                    </Row>
                  </Panel>
                }

              </Collapse>
            }

          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export { About };
